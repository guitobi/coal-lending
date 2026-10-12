import { useTranslation } from "react-i18next";
import { useForm, useWatch } from "react-hook-form";
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

function OrderForm({ productType = "charcoal" }) {
  const { t, i18n } = useTranslation();
  const isPellet = productType === "pellet";
  const [isLoading, setIsLoading] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
    reset,
  } = useForm({ defaultValues: isPellet ? { quantityBags: 65 } : {} });

  const weightInKg = useWatch({ control, name: "weightInKg" });
  const quantityBags = useWatch({ control, name: "quantityBags" });
  const weight = Number(weightInKg);
  const orderSummary = weightInKg && Number.isFinite(weight) && weight >= 100
    ? { weight: weightInKg, totalPrice: (weight * 0.95).toFixed(2) }
    : null;

  async function submitOrder(data) {
    try {
      setIsLoading(true);
      const { name, email, phoneNumber, city, weightInKg, comment } = data;

      const bags = Number(data.quantityBags);
      const totalOrder = {
        name,
        email,
        phoneNumber,
        city,
        weightInKg: isPellet ? bags * 15 : (weightInKg ? Number(weightInKg) : 0),
        comment,
        lang: i18n.language,
        productType,
        ...(isPellet ? { quantityBags: bags } : {}),
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
      className={isPellet
        ? "min-w-0 rounded-3xl border border-stone-700 bg-stone-900/85 p-5 shadow-xl sm:p-8 lg:p-10"
        : "bg-linear-to-br from-stone-900/90 to-stone-900/50 backdrop-blur-sm rounded-3xl shadow-2xl border border-stone-800/50 p-6 sm:p-10 order-1 md:order-2"}
    >
      <div className="space-y-6">
        <OrderPersonalInfo register={register} errors={errors} />

        {isPellet ? (
          <div className="space-y-3">
            <label htmlFor="quantityBags" className="block text-stone-100 font-medium">
              {t("pellets.bagsLabel")}
            </label>
            <input
              id="quantityBags"
              type="number"
              min="1"
              max="6666"
              step="1"
              className="w-full rounded-xl border border-stone-600 bg-stone-950 px-4 py-3 text-white outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20"
              aria-describedby="pellet-quantity-help"
              aria-invalid={Boolean(errors.quantityBags)}
              {...register("quantityBags", { required: true, valueAsNumber: true, min: 1, max: 6666 })}
            />
            <p id="pellet-quantity-help" className="text-sm text-stone-400">{t("pellets.bagsHelp")}</p>
            {errors.quantityBags && <p role="alert" className="text-red-400 text-sm">1–6666</p>}
            <div className="border border-amber-500/25 bg-amber-500/5 rounded-xl p-5 flex flex-wrap gap-4 items-end justify-between">
              <div>
                <p className="text-sm text-stone-400">{t("pellets.weight")}</p>
                <strong className="text-xl text-white">{Number.isInteger(Number(quantityBags)) && Number(quantityBags) > 0 ? Number(quantityBags) * 15 : 0} kg</strong>
              </div>
              <div>
                <p className="text-sm text-stone-400">{t("pellets.total")}</p>
                <strong className="text-3xl tracking-tight text-amber-200">{Number.isInteger(Number(quantityBags)) && Number(quantityBags) > 0 ? (Number(quantityBags) * 6.3).toLocaleString(i18n.language, { style: "currency", currency: "EUR" }) : "—"}</strong>
              </div>
            </div>
            <p className="text-xs text-stone-400">{t("pellets.noShipment")}</p>
          </div>
        ) : (
          <OrderQuantityInfo register={register} errors={errors} orderSummary={orderSummary} />
        )}

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
              t(isPellet ? "pellets.submit" : "order.form.actions.submitText")
            )}
          </Button>
        </div>
      </div>
    </form>
  );
}

export default OrderForm;
