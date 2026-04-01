import { useTranslation } from "react-i18next";
import InputField from "../../components/forms/InputField";
import { validationRules } from "../../utils/validation";

function ContactPersonalInfo({ register, errors }) {
  const { t } = useTranslation();

  return (
    <>
      {/* Name */}
      <InputField
        id="name"
        label={t("contactUs.form.name.label")}
        placeholder={t("contactUs.form.name.placeholder")}
        register={register}
        errors={errors}
        icon="user"
        registerOptions={validationRules.name}
      />

      {/* Email */}
      <InputField
        id="email"
        label={t("contactUs.form.email.label")}
        type="email"
        placeholder={t("contactUs.form.email.placeholder")}
        register={register}
        errors={errors}
        icon="mail"
        registerOptions={validationRules.email}
      />
    </>
  );
}

export default ContactPersonalInfo;
