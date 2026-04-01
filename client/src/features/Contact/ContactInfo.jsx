import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

function ContactInfo() {
  const { t } = useTranslation();

  return (
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
                {t("contactUs.contactInfo.address.description.secondLine")}
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
                {t("contactUs.contactInfo.businessHours.description.firstLine")}
                <br />
                {t(
                  "contactUs.contactInfo.businessHours.description.secondLine",
                )}
                <br />
                {t("contactUs.contactInfo.businessHours.description.thirdLine")}
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
  );
}

export default ContactInfo;
