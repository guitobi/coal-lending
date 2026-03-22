import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";

import Button from "../ui/Button";
import toast from "react-hot-toast";
import Spinner from "../ui/Spinner";
import Seo from "../seo/Seo";
import { buildApiUrl } from "../utils/api";

function ContactUs() {
  const { t } = useTranslation();

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
      const req = await fetch(buildApiUrl("/api/problem/new"), {
        method: "POST",
        body: JSON.stringify(data),
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
    <div className="min-h-screen py-12 sm:py-16 px-4">
      <Seo
        title={t("seoPages.contact.title")}
        description={t("seoPages.contact.description")}
        path="/contact"
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-500 mb-4">
            {t("contactUs.title")}
          </h1>
          <p className="text-stone-400 text-base sm:text-lg max-w-2xl mx-auto">
            {t("contactUs.description")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Contact Information */}
          <div className="space-y-6 order-2 md:order-1">
            <div className="bg-linear-to-br from-stone-900/90 to-stone-900/50 backdrop-blur-sm rounded-3xl shadow-2xl border border-stone-800/50 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-orange-500 mb-6">
                {t("contactUs.contactInfo.title")}
              </h2>

              <div className="space-y-5 sm:space-y-6">
                {/* Email */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-orange-500/10 p-2 sm:p-3 rounded-lg shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-stone-200 font-semibold mb-1 text-sm sm:text-base">
                      {t("contactUs.contactInfo.email.title")}
                    </h3>
                    <a
                      href="mailto:vanshare1@gmail.com"
                      className="text-stone-400 hover:text-orange-500 transition-colors text-sm sm:text-base break-all"
                    >
                      vanshare1@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-orange-500/10 p-2 sm:p-3 rounded-lg shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-stone-200 font-semibold mb-1 text-sm sm:text-base">
                      {t("contactUs.contactInfo.phone.title")}
                    </h3>
                    <a
                      href="tel:+48123456789"
                      className="text-stone-400 hover:text-orange-500 transition-colors text-sm sm:text-base"
                    >
                      {t("contactUs.contactInfo.phone.description")}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-orange-500/10 p-2 sm:p-3 rounded-lg shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-stone-200 font-semibold mb-1 text-sm sm:text-base">
                      {t("contactUs.contactInfo.address.title")}
                    </h3>
                    <p className="text-stone-400 text-sm sm:text-base">
                      {t("contactUs.contactInfo.address.description.firstLine")}
                      <br />
                      {t(
                        "contactUs.contactInfo.address.description.secondLine",
                      )}
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-orange-500/10 p-2 sm:p-3 rounded-lg shrink-0">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-stone-200 font-semibold mb-1 text-sm sm:text-base">
                      {t("contactUs.contactInfo.businessHours.title")}
                    </h3>
                    <p className="text-stone-400 text-sm sm:text-base">
                      {t(
                        "contactUs.contactInfo.businessHours.description.firstLine",
                      )}
                      <br />
                      {t(
                        "contactUs.contactInfo.businessHours.description.secondLine",
                      )}
                      <br />
                      {t(
                        "contactUs.contactInfo.businessHours.description.thirdLine",
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-linear-to-br from-orange-500/10 to-amber-600/5 border-2 border-orange-500/30 rounded-2xl p-5 sm:p-6">
              <h3 className="text-base sm:text-lg font-bold text-orange-500 mb-3">
                {t("contactUs.whyChooseUs.title")}
              </h3>
              <ul className="space-y-2 text-stone-300 text-xs sm:text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-orange-500 shrink-0">✓</span>
                  {t("contactUs.whyChooseUs.firstPoint")}
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500 shrink-0">✓</span>
                  {t("contactUs.whyChooseUs.secondPoint")}
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500 shrink-0">✓</span>
                  {t("contactUs.whyChooseUs.thirdPoint")}
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500 shrink-0">✓</span>
                  {t("contactUs.whyChooseUs.fourthPoint")}
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-linear-to-br from-stone-900/90 to-stone-900/50 backdrop-blur-sm rounded-3xl shadow-2xl border border-stone-800/50 p-6 sm:p-8 order-1 md:order-2">
            <h2 className="text-xl sm:text-2xl font-bold text-orange-500 mb-6">
              {t("contactUs.form.title")}
            </h2>

            <form
              onSubmit={handleSubmit((data) => onContactUs(data))}
              className="space-y-4 sm:space-y-5"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-stone-300 mb-2"
                >
                  {t("contactUs.form.name.label")}
                </label>
                <input
                  {...register("name", { required: "Name is required" })}
                  type="text"
                  id="name"
                  placeholder={t("contactUs.form.name.placeholder")}
                  className="w-full bg-stone-950/50 border-2 border-stone-800 rounded-xl px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all text-sm sm:text-base"
                />
                {errors.name && (
                  <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                    ⚠ {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-stone-300 mb-2"
                >
                  {t("contactUs.form.email.label")}
                </label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  type="email"
                  id="email"
                  placeholder={t("contactUs.form.email.placeholder")}
                  className="w-full bg-stone-950/50 border-2 border-stone-800 rounded-xl px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all text-sm sm:text-base"
                />
                {errors.email && (
                  <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                    ⚠ {errors.email.message}
                  </p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-stone-300 mb-2"
                >
                  {t("contactUs.form.subject.label")}
                </label>
                <input
                  {...register("subject", { required: "Subject is required" })}
                  type="text"
                  id="subject"
                  placeholder={t("contactUs.form.subject.placeholder")}
                  className="w-full bg-stone-950/50 border-2 border-stone-800 rounded-xl px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all text-sm sm:text-base"
                />
                {errors.subject && (
                  <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                    ⚠ {errors.subject.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-stone-300 mb-2"
                >
                  {t("contactUs.form.message.label")}
                </label>
                <textarea
                  {...register("message", {
                    required: "Message is required",
                    minLength: {
                      value: 10,
                      message: "Message must be at least 10 characters",
                    },
                  })}
                  id="message"
                  rows="5"
                  placeholder={t("contactUs.form.message.placeholder")}
                  className="w-full bg-stone-950/50 border-2 border-stone-800 rounded-xl px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all resize-none text-sm sm:text-base"
                ></textarea>
                {errors.message && (
                  <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                    ⚠ {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <Button
                  type="primary"
                  className="w-full flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <Spinner />
                      <span>{t("contactUs.form.actions.processingText")}</span>
                    </div>
                  ) : (
                    <>
                      <Send size={18} />
                      {t("contactUs.form.actions.submitText")}
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
