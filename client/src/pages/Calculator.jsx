import { useState, useEffect, useRef } from "react";
import Button from "../ui/Button";
import { getGeolocation, geocodeAddress } from "../utils/helpers";
import { MapPin } from "lucide-react";
import Spinner from "../ui/Spinner";

function Calculator() {
  const [isLocationLoading, setIsLocationLoading] = useState(false);
  const [locationError, setLocationError] = useState(null);
  const [address, setAddress] = useState("");
  const [distance, setDistance] = useState(0);
  const [isGeocodingAddress, setIsGeocodingAddress] = useState(false);
  const skipGeocoding = useRef(false);
  const debounceTimer = useRef(null);
  const errorTimer = useRef(null);

  useEffect(() => {
    if (skipGeocoding.current) {
      skipGeocoding.current = false;
      return;
    }

    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    debounceTimer.current = setTimeout(async () => {
      if (address && address.trim().length > 3) {
        setIsGeocodingAddress(true);
        const result = await geocodeAddress(address);
        if (result) {
          setDistance(result.distance);
        }
        setIsGeocodingAddress(false);
      } else {
        setDistance(0);
      }
    }, 1000);

    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, [address]);

  function handleGetLocation(e) {
    setIsLocationLoading(true);
    setLocationError(null);

    // Очищаємо попередній таймер якщо був
    if (errorTimer.current) {
      clearTimeout(errorTimer.current);
    }

    getGeolocation(
      e,
      (data) => {
        // Успіх! Очищаємо таймер помилки
        if (errorTimer.current) {
          clearTimeout(errorTimer.current);
          errorTimer.current = null;
        }
        skipGeocoding.current = true;
        setDistance(data.distance);
        setAddress(data.address);
        setIsLocationLoading(false);
        setLocationError(null);
      },
      (error) => {
        console.warn("Geolocation warning:", error);
        // Чекаємо 3 секунди - якщо success не прийшов, тоді показуємо помилку
        errorTimer.current = setTimeout(() => {
          setLocationError(error);
          setIsLocationLoading(false);
          errorTimer.current = null;
        }, 3000);
      },
    );
  }

  return (
    <div className="min-h-screen py-16 px-4 relative">
      {/* Loading Overlay */}
      {isLocationLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-4">
            <Spinner className="h-16 w-16 border-4" />
            <p className="text-white text-lg font-semibold">
              Getting your location...
            </p>
          </div>
        </div>
      )}

      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-orange-500 mb-4 hover:text-orange-600 hover:[text-shadow:0_0_20px_rgb(249_115_22/0.8)] transition-all duration-300">
            Price Calculator
          </h1>
          <p className="text-lg text-stone-400">
            Calculate the estimated cost for your charcoal delivery
          </p>
        </div>

        {/* Calculator Form */}
        <form className="bg-stone-900/50 rounded-2xl shadow-2xl p-8 space-y-6">
          {/* Package Type */}
          <div>
            <label
              htmlFor="packageType"
              className="block text-sm font-semibold text-stone-200 mb-2"
            >
              Package Type
            </label>
            <select
              id="packageType"
              className="w-full px-4 py-3 border-2 border-stone-300 rounded-lg  focus:ring-2 focus:ring-yellow-200 outline-none transition-all bg-stone-950 text-stone-300 focus:border-orange-500"
            >
              <option value="">Select package size...</option>
              <option value="2.5">2.5 kg - €1.88/bag</option>
              <option value="5">5 kg - €3.75/bag</option>
              <option value="10">10 kg - €7.50/bag</option>
            </select>
          </div>

          {/* Number of Bags */}
          <div>
            <label
              htmlFor="numberOfBags"
              className="block text-sm font-semibold text-stone-200 mb-2"
            >
              Number of Bags
            </label>
            <input
              type="number"
              id="numberOfBags"
              min="1"
              placeholder="Enter quantity..."
              className="w-full px-4 py-3 border-2 border-stone-300 rounded-lg  focus:ring-2 focus:ring-yellow-200 outline-none transition-all text-stone-300 bg-stone-950 focus:border-orange-500"
            />
          </div>

          {/* Delivery Distance
          <div>
            <label
              htmlFor="distance"
              className="block text-sm font-semibold text-stone-800 mb-2"
            >
              Delivery Distance (km)
            </label>
            <input
              type="number"
              id="distance"
              min="0"
              step="0.1"
              placeholder="Enter distance in kilometers..."
              className="w-full px-4 py-3 border-2 border-stone-300 rounded-lg focus:border-yellow-600 focus:ring-2 focus:ring-yellow-200 outline-none transition-all"
            />
          </div> */}

          {/* Delivery Address (Optional) */}
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-semibold text-stone-200 mb-2"
            >
              Delivery Address{" "}
              {/* <span className="text-stone-400 font-normal">(optional)</span> */}
            </label>

            {/* Error Message */}
            {locationError && (
              <div className="mb-3 p-3 bg-red-500/20 border border-red-500 rounded-lg text-red-200 text-sm">
                {locationError}
              </div>
            )}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 sm:relative">
              <div className="relative w-full">
                <input
                  type="text"
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter delivery address..."
                  className="w-full px-4 py-4 sm:py-3 text-base sm:pr-48 border-2 border-stone-300 rounded-lg  focus:ring-2 focus:ring-yellow-200 outline-none transition-all bg-stone-950 text-stone-300 focus:border-orange-500"
                />
                {isGeocodingAddress && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 sm:right-48">
                    <Spinner className="h-5 w-5 border-2 border-orange-500 border-t-transparent" />
                  </div>
                )}
              </div>
              <div className="sm:absolute sm:right-2 sm:top-1/2 sm:-translate-y-1/2">
                <button
                  type="button"
                  onClick={(e) => handleGetLocation(e)}
                  disabled={isLocationLoading}
                  className="w-full sm:w-auto px-4 py-3 bg-orange-500 hover:bg-orange-600 disabled:bg-stone-600 disabled:cursor-not-allowed text-white rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group"
                  title="Get my location"
                >
                  <MapPin className="w-5 h-5 group-hover:animate-pulse" />
                  <span className="sm:hidden">Get my location</span>
                </button>
              </div>
            </div>
          </div>

          {/* Calculate Button */}
          <Button
            type="submit"
            className="w-full bg-linear-to-r from-yellow-500 to-orange-500 text-white font-bold py-4 px-6 rounded-lg hover:brightness-110 hover:shadow-2xl transition-all duration-300 text-lg"
          >
            Calculate Total Price
          </Button>

          {/* Result Section (Placeholder) */}
          <div className="bg-stone-950 rounded-lg p-6 border-2 border-stone-800">
            <h3 className="text-lg font-semibold text-stone-200 mb-3">
              Estimated Cost Breakdown:
            </h3>
            <div className="space-y-2 text-stone-300">
              <div className="flex justify-between">
                <span>Product Cost:</span>
                <span className="font-semibold">€0.00</span>
              </div>
              <div className="flex justify-between">
                <span>Base Delivery Fee:</span>
                <span className="font-semibold">€0.00</span>
              </div>
              <div className="flex justify-between">
                <span>Distance Fee {distance > 0 && `(${distance} km)`}:</span>
                <span className="font-semibold">€0.00</span>
              </div>
              <div className="border-t-2 border-stone-300 pt-2 mt-2 flex justify-between text-xl">
                <span
                  className="font-bold text-orange-400
                "
                >
                  Total:
                </span>
                <span className="font-bold text-orange-400">€0.00</span>
              </div>
            </div>
          </div>
        </form>

        {/* Info Note */}
        <div className="mt-8 text-center text-sm text-stone-400">
          <p>* Final price may vary based on availability and current rates</p>
          <p>* Minimum order: 10 tons for wholesale</p>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
