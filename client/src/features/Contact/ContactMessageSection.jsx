import { useTranslation } from "react-i18next";
import TextAreaField from "../../components/forms/TextAreaField";
import { validationRules } from "../../utils/validation";

function ContactMessageSection({ register, errors }) {
  const { t } = useTranslation();

  return (
    <TextAreaField
      id="message"
      label={t("contactUs.form.message.label")}
      placeholder={t("contactUs.form.message.placeholder")}
      register={register}
      errors={errors}
      registerOptions={validationRules.message}
      rows={5}
    />
  );
}

export default ContactMessageSection;
