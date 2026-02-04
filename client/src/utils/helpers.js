import { getDistance } from "geolib";

// Координати складу/точки доставки (можна винести в config)
const WAREHOUSE_COORDS = {
  latitude: 51.7592, // Polkowice, Poland
  longitude: 16.0753,
};

// Функція для геокодування адреси (перетворення адреси в координати)
export async function geocodeAddress(address) {
  if (!address || address.trim().length < 3) {
    return null;
  }

  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json&limit=1`,
    );
    const data = await res.json();

    if (data && data.length > 0) {
      const location = data[0];
      const latitude = parseFloat(location.lat);
      const longitude = parseFloat(location.lon);

      const distanceInMeters = getDistance(
        { latitude, longitude },
        WAREHOUSE_COORDS,
      );
      const distanceInKm = (distanceInMeters / 1000).toFixed(2);

      return {
        latitude,
        longitude,
        distance: distanceInKm,
        distanceMeters: distanceInMeters,
        displayName: location.display_name,
      };
    }

    return null;
  } catch (error) {
    console.error("Error geocoding address:", error);
    return null;
  }
}

export function getGeolocation(e, onSuccess, onError) {
  e.preventDefault();

  if (!navigator.geolocation) {
    const errorMsg = "Your browser does not support geolocation";
    if (onError) onError(errorMsg);
    return;
  }

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      try {
        const { latitude, longitude } = position.coords;

        const distanceInMeters = getDistance(
          { latitude, longitude },
          WAREHOUSE_COORDS,
        );
        const distanceInKm = (distanceInMeters / 1000).toFixed(2);

        const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`,
        );
        const data = await res.json();

        const address = data.display_name || `${latitude}, ${longitude}`;

        if (onSuccess) {
          onSuccess({
            latitude,
            longitude,
            address,
            distance: distanceInKm,
            distanceMeters: distanceInMeters,
            fullData: data,
          });
        }
      } catch (error) {
        console.error("Error fetching address:", error);
        if (onError) onError("Could not retrieve address");
      }
    },
    (error) => {
      let errorMsg = "Could not determine position";

      switch (error.code) {
        case error.PERMISSION_DENIED:
          errorMsg =
            "Location access denied. Please enable location permissions.";
          break;
        case error.POSITION_UNAVAILABLE:
          errorMsg = "Location information unavailable.";
          break;
        case error.TIMEOUT:
          errorMsg = "Location request timed out.";
          break;
      }

      if (onError) onError(errorMsg);
    },
  );
}
