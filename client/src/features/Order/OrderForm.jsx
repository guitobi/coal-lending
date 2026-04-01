import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router";

import Button from "../../ui/Button";
import Spinner from "../../ui/Spinner";
import OrderPersonalInfo from "./OrderPersonalInfo";
import OrderQuantityInfo from "./OrderQuantityInfo";
import OrderCommentSection from "./OrderCommentSection";
import OrderConsentSection from "./OrderConsentSection";
import { buildApiUrl } from "../../utils/api";

function OrderForm() {
  const { t, i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [orderSummary, setOrderSummary] = useState(null);

  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const weightInKg = watch("weightInKg");

  // Оновлюємо підсумок замовлення при зміні ваги
  if (
    weightInKg &&
    Number(weightInKg) >= 100 &&
    weightInKg !== orderSummary?.weight
  ) {
    const totalPrice = (Number(weightInKg) * 0.95).toFixed(2);
    setOrderSummary({
      weight: weightInKg,
      totalPrice: totalPrice,
    });
  }

  async function submitOrder(data) {
    try {
      setIsLoading(true);
      const { name, email, phoneNumber, city, weightInKg, comment } = data;

      const totalOrder = {
        name,
        email,
        phoneNumber,
        city,
        weightInKg: weightInKg ? Number(weightInKg) : 0,
        comment,
        lang: i18n.language,
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
      setOrderSummary(null); // Скидаємо підсумок замовлення
      toast.success(
        t(["order.form.toastSuccess", "order.footer.toastSuccess"]),
      );
    } catch (error) {
      console.error(error);
      toast.error(t(["order.form.toastError", "order.footer.toastError"]));
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit((data) => submitOrder(data))}
      className="bg-linear-to-br from-stone-900/90 to-stone-900/50 backdrop-blur-sm rounded-3xl shadow-2xl border border-stone-800/50 p-6 sm:p-10 order-1 md:order-2"
    >
      <div className="space-y-6">
        <OrderPersonalInfo register={register} errors={errors} />

        <OrderQuantityInfo
          register={register}
          errors={errors}
          orderSummary={orderSummary}
        />

        <OrderCommentSection register={register} errors={errors} />

        <OrderConsentSection register={register} errors={errors} />

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
  );
}

export default OrderForm;
