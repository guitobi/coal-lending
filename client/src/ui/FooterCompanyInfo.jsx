import { useTranslation } from "react-i18next";

function FooterCompanyInfo() {
  const { t } = useTranslation();
  return (
    <div>
      <h3 className="text-2xl sm:text-2xl lg:text-3xl font-bold text-orange-400 mb-4">
        Van Share
      </h3>
      <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed">
        {t(
          "footer.Official distributor of WOODEN WEST charcoal in Poland. Premium hardwood charcoal for grilling and BBQ.",
        )}
        .
      </p>
      <p className="text-slate-400 text-xs mt-2">
        Van Share Spółka z o.o. | NIP: 716-28-26886
      </p>
    </div>
  );
}

export default FooterCompanyInfo;
