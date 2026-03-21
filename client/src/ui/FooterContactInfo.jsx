import { useTranslation } from "react-i18next";

function FooterContactInfo() {
  const { t } = useTranslation();
  return (
    <div>
      <h4 className="text-xl sm:text-xl lg:text-2xl font-semibold mb-4 text-orange-400">
        {t("footer.contactTitle")}
      </h4>
      <ul className="space-y-2 text-slate-300 text-sm sm:text-base lg:text-lg">
        <li>📞 +48 577 432 949</li>
        <li>📞 +48 730 670 345</li>
        <li>📧 vanshare1@gmail.com</li>
        <li>📍 ul. Batalionów Chłopskich 3</li>
        <li className="pl-5">58-050 Jelenia Góra, Poland</li>
        <li>🧾 NIP: 716-28-26-886</li>
      </ul>
    </div>
  );
}

export default FooterContactInfo;
