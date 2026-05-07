import { useTranslation } from "react-i18next";
import { Phone, Mail, MapPin, FileText } from "lucide-react";

function FooterContactInfo() {
  const { t } = useTranslation();
  return (
    <div>
      <h4 className="text-xl sm:text-xl lg:text-2xl font-semibold mb-4 text-orange-400">
        {t("footer.contactTitle")}
      </h4>
      <ul className="space-y-3 text-slate-300 text-sm sm:text-base lg:text-lg">
        <li className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-orange-400 flex-shrink-0" />
          <span>+48 577 432 949</span>
        </li>
        <li className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-orange-400 flex-shrink-0" />
          <span>+48 730 670 345</span>
        </li>
        <li className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-orange-400 flex-shrink-0" />
          <span>vanshare1@gmail.com</span>
        </li>
        <li className="flex items-start gap-2">
          <MapPin className="w-4 h-4 text-orange-400 flex-shrink-0 mt-1" />
          <span>
            ul. Batalionów Chłopskich 3<br />
            58-050 Jelenia Góra, Poland
          </span>
        </li>
        <li className="flex items-center gap-2">
          <FileText className="w-4 h-4 text-orange-400 flex-shrink-0" />
          <span>NIP: 716-28-26-886</span>
        </li>
      </ul>
    </div>
  );
}

export default FooterContactInfo;
