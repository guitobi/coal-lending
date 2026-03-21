import Button from "../ui/Button";
import { useForm } from "react-hook-form";
import { User, Mail, Phone, Weight, MessageSquare, MapPin } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";
import Spinner from "../ui/Spinner";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import Seo from "../seo/Seo";
import { buildApiUrl } from "../utils/api";

function Order() {
  const { t } = useTranslation();

  const [isLoading, setIsLoading] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const weightInKg = watch("weigthInKg");

  async function submitOrder(data) {
    try {
      setIsLoading(true);
      const { name, email, phoneNumber, city, weightInKg } = data;

      const totalOrder = {
        name,
        email,
        phoneNumber,
        city,
        weightInKg: weightInKg ? Number(weightInKg) : 0,
      };

      const req = await fetch(buildApiUrl("/api/order/new"), {
        method: "POST",
        body: JSON.stringify(totalOrder),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!req.ok) throw new Error("error posting data");

      const result = await req.json();
      console.log(result);
      reset();
      toast.success(t("order.toastSuccess"));
    } catch (error) {
      console.error(error);
      toast.error(t("order.toastError"));
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen py-12 sm:py-16 px-4 max-w-3xl mx-auto relative">
      <Seo
        title={t("order.title")}
        description={t("order.description")}
        path="/order"
      />

      {/* Header */}
      <div className="text-center mb-10 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-orange-500 font-extrabold mb-3">
          {t("order.title")}
        </h1>
        <p className="text-stone-400 text-sm sm:text-base max-w-xl mx-auto">
          {t("order.description")}
        </p>
      </div>

      <form
        onSubmit={handleSubmit((data) => submitOrder(data))}
        className="bg-linear-to-br from-stone-900/90 to-stone-900/50 backdrop-blur-sm rounded-3xl shadow-2xl border border-stone-800/50 p-6 sm:p-10"
      >
        <div className="space-y-6">
          {/* Name Field */}
          <div className="flex flex-col gap-2">
            <label
              className="text-sm font-medium text-stone-300 flex items-center gap-2"
              htmlFor="name"
            >
              <User size={16} className="text-orange-500" />
              {t("order.form.name.label")}
            </label>
            <div className="relative">
              <input
                {...register("name", {
                  required: "This field is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters",
                  },
                  maxLength: {
                    value: 50,
                    message: "Name must be less than 50 characters",
                  },
                })}
                className="w-full bg-stone-950/50 border-2 border-stone-800 rounded-xl px-4 py-3.5 text-white placeholder-stone-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                type="text"
                id="name"
                placeholder={t("order.form.name.placeholder")}
              />
            </div>
            {errors?.name?.message && (
              <p
                role="alert"
                className="text-xs font-medium text-red-400 flex items-center gap-1"
              >
                ⚠ {errors.name.message}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-2">
            <label
              className="text-sm font-medium text-stone-300 flex items-center gap-2"
              htmlFor="email"
            >
              <Mail size={16} className="text-orange-500" />
              {t("order.form.email.label")}
            </label>
            <div className="relative">
              <input
                type="email"
                {...register("email", {
                  required: "This field is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                className="w-full bg-stone-950/50 border-2 border-stone-800 rounded-xl px-4 py-3.5 text-white placeholder-stone-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                name="email"
                id="email"
                placeholder={t("order.form.email.placeholder")}
              />
            </div>
            {errors?.email?.message && (
              <p
                role="alert"
                className="text-xs font-medium text-red-400 flex items-center gap-1"
              >
                ⚠ {errors.email.message}
              </p>
            )}
          </div>

          {/* Phone Number Field */}
          <div className="flex flex-col gap-2">
            <label
              className="text-sm font-medium text-stone-300 flex items-center gap-2"
              htmlFor="phoneNumber"
            >
              <Phone size={16} className="text-orange-500" />
              {t("order.form.phone.label")}
            </label>
            <div className="relative">
              <input
                {...register("phoneNumber", {
                  required: "This field is required",
                  pattern: {
                    value: /^\+?[1-9]\d{6,14}$/,
                    message: "Invalid phone number",
                  },
                })}
                className="w-full bg-stone-950/50 border-2 border-stone-800 rounded-xl px-4 py-3.5 text-white placeholder-stone-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                type="text"
                id="phoneNumber"
                placeholder={t("order.form.phone.placeholder")}
              />
            </div>
            {errors?.phoneNumber?.message && (
              <p
                role="alert"
                className="text-xs font-medium text-red-400 flex items-center gap-1"
              >
                ⚠ {errors.phoneNumber.message}
              </p>
            )}
          </div>

          {/* City Field */}
          <div className="flex flex-col gap-2">
            <label
              className="text-sm font-medium text-stone-300 flex items-center gap-2"
              htmlFor="city"
            >
              <MapPin size={16} className="text-orange-500" />
              {t("order.form.city.label")}
            </label>
            <div className="relative">
              <input
                {...register("city", {
                  required: "This field is required",
                  minLength: {
                    value: 2,
                    message: "City must be at least 2 characters",
                  },
                })}
                className="w-full bg-stone-950/50 border-2 border-stone-800 rounded-xl px-4 py-3.5 text-white placeholder-stone-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                type="text"
                id="city"
                placeholder={t("order.form.city.placeholder")}
              />
            </div>
            {errors?.city?.message && (
              <p
                role="alert"
                className="text-xs font-medium text-red-400 flex items-center gap-1"
              >
                ⚠ {errors.city.message}
              </p>
            )}
          </div>

          {/* Weight Field */}
          <div className="flex flex-col gap-2">
            <label
              className="text-sm font-medium text-stone-300 flex items-center gap-2"
              htmlFor="weightInKg"
            >
              <Weight size={16} className="text-orange-500" />
              {t("order.form.quantity.label")}
            </label>
            <div className="relative">
              <input
                {...register("weightInKg", {
                  required: "This field is required",
                  min: {
                    value: 100,
                    message: "Minimum order is 100 kg",
                  },
                  pattern: {
                    value: /^\d+$/,
                    message: "Please enter a valid number",
                  },
                })}
                className="w-full bg-stone-950/50 border-2 border-stone-800 rounded-xl px-4 py-3.5 text-white placeholder-stone-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                type="number"
                id="weightInKg"
                placeholder={t("order.form.quantity.placeholder")}
              />
            </div>
            {errors?.weightInKg?.message && (
              <p
                role="alert"
                className="text-xs font-medium text-red-400 flex items-center gap-1"
              >
                ⚠ {errors.weightInKg.message}
              </p>
            )}
            <p className="text-xs text-stone-500 flex items-center gap-1">
              ℹ️ {t("order.form.quantity.min")}
            </p>
          </div>

          {/* Comment Field */}
          <div className="flex flex-col gap-2">
            <label
              className="text-sm font-medium text-stone-300 flex items-center gap-2"
              htmlFor="comment"
            >
              <MessageSquare size={16} className="text-orange-500" />
              {t("order.form.comment.label")}{" "}
              <span className="text-stone-500">
                {t("order.form.comment.optional")}
              </span>
            </label>
            <div className="relative">
              <textarea
                {...register("comment")}
                className="w-full h-32 bg-stone-950/50 border-2 border-stone-800 rounded-xl px-4 py-3.5 text-white placeholder-stone-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all resize-none"
                name="comment"
                id="comment"
                placeholder={t("order.form.comment.placeholder")}
              ></textarea>
            </div>
          </div>

          {/* Order Summary */}
          {weightInKg && Number(weightInKg) >= 100 && (
            <div className="bg-linear-to-br from-orange-500/10 to-amber-600/5 border-2 border-orange-500/30 rounded-2xl p-6 space-y-3">
              <h3 className="text-lg font-bold text-orange-500 mb-3">
                {t("order.form.summary.title")}
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-stone-400 text-sm">
                    {t("order.form.summary.weight")}
                  </span>
                  <span className="text-white font-bold text-lg">
                    {weightInKg} kg
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-400 text-sm">
                    {t("order.form.summary.pricePerKg")}
                  </span>
                  <span className="text-stone-300">€0.95</span>
                </div>
                <div className="border-t border-orange-500/20 pt-2 mt-2">
                  <div className="flex justify-between items-center">
                    <span className="text-stone-300 font-medium">
                      {t("order.form.summary.totalPrice")}
                    </span>
                    <span className="text-orange-500 font-bold text-2xl">
                      €{(Number(weightInKg) * 0.95).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-stone-500 mt-3">
                {t("order.form.summary.note")}
              </p>
            </div>
          )}

          {/* Submit Button */}
          <div className="pt-4 flex justify-center">
            <Button type="primary" disabled={isLoading}>
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <Spinner />
                  <span>{t("order.form.actions.processingText")}</span>
                </div>
              ) : (
                t("order.form.actions.submitText")
              )}
            </Button>
          </div>
        </div>
      </form>

      {/* Footer Text */}
      <div className="text-center mt-8 space-y-2">
        <p className="text-stone-300 text-base sm:text-lg font-medium">
          📞 {t("order.footer.title")}
        </p>
        <p className="text-stone-500 text-sm">{t("order.footer.delivery")}</p>
        {/* Info Note */}
        <div className="mt-8 text-center space-y-2">
          <p className="text-sm text-stone-400">
            {t("order.footer.contact.title")}{" "}
            <Link
              to="/contact"
              className="text-orange-500 hover:text-orange-400 underline"
            >
              {t("order.footer.contact.contact")}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Order;
