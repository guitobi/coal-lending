import { useTranslation } from "react-i18next";
import InputField from "../../components/forms/InputField";
import { validationRules } from "../../utils/validation";

function OrderPersonalInfo({ register, errors }) {
  const { t } = useTranslation();

  return (
    <>
      {/* Name Field */}
      <InputField
        id="name"
        label={t("order.form.name.label")}
        placeholder={t("order.form.name.placeholder")}
        register={register}
        errors={errors}
        icon="user"
        registerOptions={validationRules.name}
      />

      {/* Email Field */}
      <InputField
        id="email"
        label={t("order.form.email.label")}
        type="email"
        placeholder={t("order.form.email.placeholder")}
        register={register}
        errors={errors}
        icon="mail"
        registerOptions={validationRules.email}
      />

      {/* Phone Number Field */}
      <InputField
        id="phoneNumber"
        label={t("order.form.phone.label")}
        placeholder={t("order.form.phone.placeholder")}
        register={register}
        errors={errors}
        icon="phone"
        registerOptions={validationRules.phone}
      />

      {/* City Field */}
      <InputField
        id="city"
        label={t("order.form.city.label")}
        placeholder={t("order.form.city.placeholder")}
        register={register}
        errors={errors}
        icon="mapPin"
        registerOptions={validationRules.city}
      />
    </>
  );
}

export default OrderPersonalInfo;
