import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";
import ContactItem from "./ContactItem";

function ContactDetailsSection() {
  const { t } = useTranslation();

  return (
    <div className="space-y-5 sm:space-y-6">
      <ContactItem icon={Mail} title={t("contactUs.contactInfo.email.title")}>
        <a
          href="mailto:vanshare1@gmail.com"
          className="text-stone-400 hover:text-orange-500 transition-colors text-sm sm:text-base break-all"
        >
          vanshare1@gmail.com
        </a>
      </ContactItem>

      <ContactItem icon={Phone} title={t("contactUs.contactInfo.phone.title")}>
        <a
          href="tel:+48123456789"
          className="text-stone-400 hover:text-orange-500 transition-colors text-sm sm:text-base"
        >
          {t("contactUs.contactInfo.phone.description")}
        </a>
      </ContactItem>

      <ContactItem
        icon={MapPin}
        title={t("contactUs.contactInfo.address.title")}
      >
        <p className="text-stone-400 text-sm sm:text-base">
          {t("contactUs.contactInfo.address.description.firstLine")}
          <br />
          {t("contactUs.contactInfo.address.description.secondLine")}
        </p>
      </ContactItem>

      <ContactItem
        icon={Clock}
        title={t("contactUs.contactInfo.businessHours.title")}
      >
        <p className="text-stone-400 text-sm sm:text-base">
          {t("contactUs.contactInfo.businessHours.description.firstLine")}
          <br />
          {t("contactUs.contactInfo.businessHours.description.secondLine")}
          <br />
          {t("contactUs.contactInfo.businessHours.description.thirdLine")}
        </p>
      </ContactItem>
    </div>
  );
}

export default ContactDetailsSection;
