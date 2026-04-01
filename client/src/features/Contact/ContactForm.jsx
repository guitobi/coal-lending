import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { useState } from "react";
import toast from "react-hot-toast";

import Button from "../../ui/Button";
import Spinner from "../../ui/Spinner";
import ContactPersonalInfo from "./ContactPersonalInfo";
import ContactSubjectInfo from "./ContactSubjectInfo";
import ContactMessageSection from "./ContactMessageSection";
import ContactConsentSection from "./ContactConsentSection";
import { buildApiUrl } from "../../utils/api";

function ContactForm() {
  const { t, i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onContactUs = async (data) => {
    try {
      setIsLoading(true);
      const payload = {
        ...data,
        lang: i18n.language,
      };

      const req = await fetch(buildApiUrl("/api/problem/new"), {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!req.ok) throw new Error("error posting data");

      const result = await req.json();
      console.log(result);

      toast.success("Thank you for your message! We'll get back to you soon.");
      reset();
    } catch (error) {
      toast.error(`Something went wrong, try again later(${error.message})`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-linear-to-br from-stone-900/90 to-stone-900/50 backdrop-blur-sm rounded-3xl shadow-2xl border border-stone-800/50 p-6 sm:p-8 order-1 md:order-2">
      <h2 className="text-xl sm:text-2xl font-bold text-orange-500 mb-6">
        {t("contactUs.form.title")}
      </h2>

      <form
        onSubmit={handleSubmit((data) => onContactUs(data))}
        className="space-y-4 sm:space-y-5"
      >
        <ContactPersonalInfo register={register} errors={errors} />

        <ContactSubjectInfo register={register} errors={errors} />

        <ContactMessageSection register={register} errors={errors} />

        <ContactConsentSection register={register} errors={errors} />

        {/* Submit Button */}
        <div className="pt-2">
          <Button
            type="primary"
            className="w-full flex items-center justify-center gap-2"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <Spinner />
                <span>{t("contactUs.form.actions.processingText")}</span>
              </div>
            ) : (
              <>
                <span>{t("contactUs.form.actions.submitText")}</span>
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
