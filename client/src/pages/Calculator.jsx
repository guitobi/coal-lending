import { useState, useEffect, useRef } from "react";
import Button from "../ui/Button";
import { getGeolocation, geocodeAddress } from "../utils/helpers";
import { MapPin } from "lucide-react";
import Spinner from "../ui/Spinner";
import { useForm } from "react-hook-form";

function Calculator() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm();

  const [isLocationLoading, setIsLocationLoading] = useState(false);
  const [locationError, setLocationError] = useState(null);
  const [distance, setDistance] = useState(0);
  const [isGeocodingAddress, setIsGeocodingAddress] = useState(false);

  const [productCost, setProductCost] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);

  const skipGeocoding = useRef(false);
  const debounceTimer = useRef(null);
  const errorTimer = useRef(null);

  const address = watch("address");

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

    if (errorTimer.current) {
      clearTimeout(errorTimer.current);
    }

    getGeolocation(
      e,
      (data) => {
        if (errorTimer.current) {
          clearTimeout(errorTimer.current);
          errorTimer.current = null;
        }
        skipGeocoding.current = true;
        setDistance(data.distance);
        setValue("address", data.address);
        setIsLocationLoading(false);
        setLocationError(null);
      },
      (error) => {
        console.warn("Geolocation warning:", error);
        errorTimer.current = setTimeout(() => {
          setLocationError(error);
          setIsLocationLoading(false);
          errorTimer.current = null;
        }, 3000);
      },
    );
  }

  return (
    <div className="min-h-screen py-16 px-4 max-w-2xl mx-auto relative">
      {/* Loading Overlay */}
      {isLocationLoading && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-black/50 backdrop-blur-sm">
          <Spinner className="h-16 w-16 border-4" />
          <p className="text-white text-lg font-semibold">
            Getting your location...
          </p>
        </div>
      )}

      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-orange-500 mb-4 hover:text-orange-600 hover:[text-shadow:0_0_20px_rgb(249_115_22/0.8)] transition-all duration-300">
          Price Calculator
        </h1>
        <p className="text-lg text-stone-400">
          Calculate the estimated cost for your charcoal delivery
        </p>
      </header>

      {/* Calculator Form */}
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
          const { packageType, numberOfBags } = data;
          const finalPrice = packageType * numberOfBags + 1.5 * distance;
          setProductCost(packageType * numberOfBags);
          setFinalPrice(finalPrice);
        })}
        className="bg-stone-900/50 rounded-2xl shadow-2xl p-8 space-y-6"
      >
        {/* Package Type */}
        <div>
          <label
            htmlFor="packageType"
            className="block text-sm font-semibold text-stone-200 mb-2"
          >
            Package Type
          </label>
          {errors?.address?.message && (
            <p className="text-sm md:text-md text-red-600 font-semibold py-2">
              {errors?.packageType?.message}
            </p>
          )}
          <select
            id="packageType"
            className="w-full px-4 py-3 border-2 border-stone-300 rounded-lg  focus:ring-2 focus:ring-yellow-200 outline-none transition-all bg-stone-950 text-stone-300 focus:border-orange-500"
            {...register("packageType", {
              required: "This field is required",
            })}
          >
            <option value="">Select package size...</option>
            <option value="1.88">2.5 kg - €1.88/bag</option>
            <option value="3.75">5 kg - €3.75/bag</option>
            <option value="7.50">10 kg - €7.50/bag</option>
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
          {errors?.numberOfBags?.message && (
            <p className="text-sm md:text-md text-red-600 font-semibold py-2">
              {errors?.address?.message}
            </p>
          )}
          <input
            type="number"
            id="numberOfBags"
            min="1"
            placeholder="Enter quantity..."
            className="w-full px-4 py-3 border-2 border-stone-300 rounded-lg  focus:ring-2 focus:ring-yellow-200 outline-none transition-all text-stone-300 bg-stone-950 focus:border-orange-500"
            {...register("numberOfBags", {
              required: "This field is required",
            })}
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

        {/* Delivery Address */}
        <div>
          <label
            htmlFor="address"
            className="block text-sm font-semibold text-stone-200 mb-2"
          >
            Delivery Address
          </label>
          {errors?.address?.message && (
            <p className="text-sm md:text-md text-red-600 font-semibold py-2">
              {errors?.address?.message}
            </p>
          )}
          {locationError && (
            <div className="mb-3 p-3 bg-red-500/20 border border-red-500 rounded-lg text-red-200 text-sm">
              {locationError}
            </div>
          )}

          {isGeocodingAddress && (
            <div className="mb-3 flex items-center gap-3 p-3 bg-orange-500/20 border border-orange-500 rounded-lg text-orange-200 text-sm">
              <Spinner className="h-5 w-5 border-2 border-orange-500 border-t-transparent" />
              <span>Calculating distance...</span>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 sm:relative">
            <input
              type="text"
              id="address"
              placeholder="Enter delivery address..."
              className="w-full px-4 py-4 sm:py-3 sm:pr-48 border-2 border-stone-300 rounded-lg focus:ring-2 focus:ring-yellow-200 outline-none transition-all bg-stone-950 text-stone-300 focus:border-orange-500"
              {...register("address", { required: "This field is required" })}
            />

            <button
              type="button"
              onClick={(e) => handleGetLocation(e)}
              disabled={isLocationLoading}
              className="sm:absolute sm:right-2 sm:top-1/2 sm:-translate-y-1/2 w-full sm:w-auto px-4 py-3 bg-orange-500 hover:bg-orange-600 disabled:bg-stone-600 disabled:cursor-not-allowed text-white rounded-lg transition-all hover:shadow-lg hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group"
              title="Get my location"
            >
              <MapPin className="w-5 h-5 group-hover:animate-pulse" />
              <span className="sm:hidden">Get my location</span>
            </button>
          </div>
        </div>

        {/* Calculate Button */}
        <Button
          type="submit"
          className="text-md w-full bg-linear-to-r from-yellow-500 to-orange-500 text-white font-bold py-4 px-6 rounded-lg hover:brightness-110 hover:shadow-2xl transition-all duration-300 md:text-lg"
        >
          Calculate Total Price
        </Button>

        {/* Result Section */}
        <div className="bg-stone-950 rounded-lg p-6 border-2 border-stone-800">
          <h3 className="text-lg font-semibold text-stone-200 mb-3">
            Estimated Cost Breakdown:
          </h3>
          <div className="space-y-2 text-stone-300">
            <div className="flex justify-between">
              <span>Product Cost:</span>
              <span className="font-semibold">€{productCost.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Base Delivery Fee:</span>
              <span className="font-semibold">€0.00</span>
            </div>
            <div className="flex justify-between">
              <span>Distance Fee {distance > 0 && `(${distance} km)`}:</span>
              <span className="font-semibold">
                €{(1.5 * distance).toFixed(2)}
              </span>
            </div>
            <div className="border-t-2 border-stone-300 pt-2 mt-2 flex justify-between text-xl">
              <span className="font-bold text-orange-400">Total:</span>
              <span className="font-bold text-orange-400">
                €{finalPrice.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </form>

      {/* Info Note */}
      <p className="mt-8 text-center text-sm text-stone-400">
        * Final price may vary based on availability and current rates
        <br />* Minimum order: 10 tons for wholesale
      </p>
    </div>
  );
}

export default Calculator;
