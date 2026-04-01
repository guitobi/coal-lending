import { useTranslation } from "react-i18next";
import InputField from "../../components/forms/InputField";
import { validationRules } from "../../utils/validation";

function ContactSubjectInfo({ register, errors }) {
  const { t } = useTranslation();

  return (
    <InputField
      id="subject"
      label={t("contactUs.form.subject.label")}
      placeholder={t("contactUs.form.subject.placeholder")}
      register={register}
      errors={errors}
      icon="message"
      registerOptions={validationRules.subject}
    />
  );
}

export default ContactSubjectInfo;
