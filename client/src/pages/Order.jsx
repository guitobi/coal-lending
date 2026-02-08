import Button from "../ui/Button";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Package, ChevronDown, ChevronUp } from "lucide-react";

const packages = [
  {
    weight: "2.5 kg",
    price: "€1.88",
    features: ["Perfect for small grills", "Ideal for 2-3 people"],
  },
  {
    weight: "5 kg",
    price: "€3.75",
    features: ["Best value option", "Perfect for families"],
    popular: true,
  },
  {
    weight: "10 kg",
    price: "€7.50",
    features: ["Commercial use ready", "Best price per kg"],
  },
];

function Order() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    watch,
  } = useForm();
  const { state } = useLocation();

  const selectedPackage = watch("packageType");
  const numberOfBags = watch("numberOfBags");

  const [isExpanded, setIsExpanded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (state?.weight) {
      setValue("packageType", state.weight);
    }
  }, [state?.weight, setValue]);

  // Обробка анімації згортання
  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsExpanded(false);
        setIsAnimating(false);
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  const toggleExpand = (e) => {
    e.stopPropagation();
    if (isExpanded) {
      setIsAnimating(true);
    } else {
      setIsExpanded(true);
    }
  };

  const handlePackageSelect = (weight) => {
    setValue("packageType", weight, { shouldValidate: true });
    setIsAnimating(true);
  };

  return (
    <div className="min-h-screen py-16 px-4 max-w-2xl mx-auto relative">
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-nowrap text-orange-500 font-extrabold text-center m-5">
        Place your order!
      </h2>

      <div className="mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <h3 className="text-xl text-stone-200 text-center">
            Select packaging type
          </h3>
          <button
            type="button"
            onClick={toggleExpand}
            className="text-stone-400 hover:text-orange-500 transition-colors"
          >
            {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </button>
        </div>

        {/* Вибраний пакет (завжди видимий) */}
        {selectedPackage && !isExpanded && (
          <div className="max-w-md mx-auto mb-4 p-4 rounded-lg border-2 border-orange-500 bg-orange-500/10 text-center animate-fade-in-up">
            <Package className="w-10 h-10 mx-auto mb-2 text-orange-500" />
            <p className="text-xl font-bold text-stone-200">
              {selectedPackage}
            </p>
            <p className="text-sm text-orange-500 font-semibold mt-1">
              SELECTED
            </p>
          </div>
        )}

        {/* Всі картки (показуємо коли розгорнуто або нічого не вибрано) */}
        {(isExpanded || !selectedPackage) && (
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto ${isAnimating ? "animate-fade-out-up" : "animate-fade-in-up"}`}
          >
            {packages.map((pkg) => (
              <div
                key={pkg.weight}
                onClick={() => handlePackageSelect(pkg.weight)}
                className={`
                  cursor-pointer rounded-lg p-6 border-2 transition-all duration-200
                  ${
                    selectedPackage === pkg.weight
                      ? "border-orange-500 bg-orange-500/10 ring-2 ring-orange-500/50"
                      : "border-stone-700 bg-stone-900/40 hover:border-orange-500/50"
                  }
                `}
              >
                <div className="text-center">
                  {pkg.popular && (
                    <div className="bg-orange-500 text-white text-xs font-bold py-1 px-3 rounded-full inline-block mb-2">
                      MOST POPULAR
                    </div>
                  )}
                  <Package className="w-12 h-12 mx-auto mb-3 text-orange-500" />
                  <h4 className="text-2xl font-bold text-stone-200 mb-2">
                    {pkg.weight}
                  </h4>
                  <p className="text-3xl font-bold text-orange-500 mb-3">
                    {pkg.price}
                  </p>
                  <p className="text-sm text-stone-400 mb-3">per bag</p>
                  {selectedPackage === pkg.weight && (
                    <p className="text-sm font-semibold text-orange-500 mb-2">
                      ✓ SELECTED
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        <input
          type="hidden"
          {...register("packageType", {
            required: "Please select a packaging type",
          })}
        />
        {errors?.packageType?.message && (
          <p
            role="alert"
            className="text-center text-sm font-semibold text-red-500 mt-2"
          >
            {errors.packageType.message}
          </p>
        )}
      </div>

      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
        className="text-stone-100 flex flex-col m-10  rounded-2xl justify-between items-center gap-5 px-5 py-6 bg-stone-900/50  mx-auto"
      >
        <div className="flex flex-col gap-1 w-full">
          <label className="text-xs text-stone-300" htmlFor="name">
            Your name
          </label>
          <input
            {...register("name", {
              required: "This field is required",
              min: 2,
              max: 15,
            })}
            className="bg-stone-950 border border-stone-800 rounded-xl px-4 py-3 text-white placeholder-stone-600 focus:outline-none focus:border-orange-500 transition-colors resize-none"
            type="text"
            id="name"
            placeholder="Enter your name..."
          />
          {errors?.name?.message && (
            <p role="alert" className="text-xs font-semibold text-red-500">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-1 w-full">
          <label className="text-xs text-stone-300" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            {...register("email", {
              required: "This field is required",
              pattern: {
                type: "email",
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            className="bg-stone-950 border border-stone-800 rounded-xl px-4 py-3 text-white placeholder-stone-600 focus:outline-none focus:border-orange-500 transition-colors resize-none"
            name="email"
            id="email"
            placeholder="Enter your email..."
          />
          {errors?.email?.message && (
            <p role="alert" className="text-xs font-semibold text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-1 w-full">
          <label className="text-xs text-stone-300" htmlFor="phoneNumber">
            Phone number
          </label>
          <input
            {...register("phoneNumber", {
              required: "This field is required",
              pattern: {
                value: /^\+?[1-9]\d{6,14}$/,
                message: "Invalid phone number",
              },
            })}
            className="bg-stone-950 border border-stone-800 rounded-xl px-4 py-3 text-white placeholder-stone-600 focus:outline-none focus:border-orange-500  transition-colors resize-none"
            type="text"
            id="phoneNumber"
            placeholder="Enter your phone number..."
          />
          {errors?.phoneNumber?.message && (
            <p role="alert" className="text-xs font-semibold text-red-500">
              {errors.phoneNumber.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-1 w-full">
          <label className="text-xs text-stone-300" htmlFor="numberOfBags">
            Number of bags
          </label>
          <input
            {...register("numberOfBags", {
              required: "This field is required",
            })}
            className="bg-stone-950 border border-stone-800 rounded-xl px-4 py-3 text-white placeholder-stone-600 focus:outline-none focus:border-orange-500 transition-colors resize-none"
            type="text"
            id="numberOfBags"
            placeholder="Enter number of bags"
          />
          {errors?.numberOfBags?.message && (
            <p role="alert" className="text-xs font-semibold text-red-500">
              {errors.numberOfBags.message}
            </p>
          )}
        </div>

        <div className="flex flex-col items-start gap-1 w-full  mx-10 ">
          <label className="text-xs text-stone-300" htmlFor="comment">
            Comment <span>(optional)</span>
          </label>
          <textarea
            {...register("commment")}
            className="w-full h-32 bg-stone-950 border border-stone-800 rounded-xl px-4 py-3 text-white placeholder-stone-600 focus:outline-none focus:border-orange-500 transition-colors resize-none"
            name="comment"
            id="comment"
          ></textarea>
        </div>
        <div className="text-center m-10">
          <Button type="primary">Submit order</Button>
        </div>
        <p>
          Your total order weight is:{" "}
          {numberOfBags && selectedPackage
            ? Number(numberOfBags.split(" ").at(0)) *
              Number(selectedPackage.split(" ").at(0))
            : "0"}
        </p>
      </form>

      <p className="text-center text-stone-300 text-xs">
        NOTE! Minimum order is 1 ton.
      </p>

      <p className="text-stone-200 text-center text-md md:text-xl">
        And we will contact with you.
      </p>
    </div>
  );
}

export default Order;
