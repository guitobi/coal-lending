import { useTranslation } from "react-i18next";

function OrderSummary({ orderSummary }) {
  const { t } = useTranslation();

  if (!orderSummary) return null;

  return (
    <div className="bg-linear-to-br from-orange-500/10 to-amber-600/5 border-2 border-orange-500/30 rounded-2xl p-6 space-y-3">
      <h3 className="text-lg font-bold text-orange-500 mb-3">
        {t("order.form.summary.title")}
      </h3>
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-stone-400 text-sm">
            {t(["order.form.summary.weight", "order.summary.weight"])}
          </span>
          <span className="text-white font-bold text-lg">
            {orderSummary.weight} kg
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-stone-400 text-sm">
            {t(["order.form.summary.pricePerKg", "order.summary.pricePerKg"])}
          </span>
          <span className="text-stone-300">€0.95</span>
        </div>
        <div className="border-t border-orange-500/20 pt-2 mt-2">
          <div className="flex justify-between items-center">
            <span className="text-stone-300 font-medium">
              {t(["order.form.summary.totalPrice", "order.summary.totalPrice"])}
            </span>
            <span className="text-orange-500 font-bold text-2xl">
              €{orderSummary.totalPrice}
            </span>
          </div>
        </div>
      </div>
      <p className="text-xs text-stone-500 mt-3">
        {t(["order.form.summary.note", "order.summary.note"])}
      </p>
    </div>
  );
}

export default OrderSummary;
