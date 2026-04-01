import { useTranslation } from "react-i18next";
import CheckboxField from "../../components/forms/CheckboxField";
import { validationRules } from "../../utils/validation";

function ContactConsentSection({ register, errors }) {
  const { t } = useTranslation();

  return (
    <CheckboxField
      id="dataProcessingConsent"
      label={
        <div className="text-stone-300 text-sm">
          {t(
            "contactUs.form.consent.text",
            "I agree to the processing of my personal data in accordance with the ",
          )}
          <a
            href="/privacy-policy"
            className="text-orange-500 hover:text-orange-400 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("contactUs.form.consent.privacyPolicy", "Privacy Policy")}
          </a>{" "}
          {t("contactUs.form.consent.and", "and")}{" "}
          <a
            href="/cookie-policy"
            className="text-orange-500 hover:text-orange-400 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("contactUs.form.consent.cookiePolicy", "Cookie Policy")}
          </a>
          .
        </div>
      }
      register={register}
      errors={errors}
      registerOptions={validationRules.consent(t)}
    />
  );
}

export default ContactConsentSection;
