import { useTranslation } from "react-i18next";
import InputField from "../../components/forms/InputField";
import OrderSummary from "./OrderSummary";
import { validationRules } from "../../utils/validation";

function OrderQuantityInfo({ register, errors, orderSummary }) {
  const { t } = useTranslation();

  return (
    <>
      {/* Weight Field */}
      <InputField
        id="weightInKg"
        label={t("order.form.quantity.label")}
        type="number"
        placeholder={t("order.form.quantity.placeholder")}
        register={register}
        errors={errors}
        icon="weight"
        registerOptions={validationRules.weight}
      />
      <p className="text-xs text-stone-500 flex items-center gap-1">
        ℹ️ {t("order.form.quantity.min")}
      </p>

      {/* Order Summary */}
      <OrderSummary orderSummary={orderSummary} />
    </>
  );
}

export default OrderQuantityInfo;
