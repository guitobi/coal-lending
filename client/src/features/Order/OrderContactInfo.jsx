import { useTranslation } from "react-i18next";
import ContactDetailsSection from "./ContactDetailsSection";
import OrderBenefitsSection from "./OrderBenefitsSection";

function OrderContactInfo() {
  const { t } = useTranslation();

  return (
    <div className="space-y-6 order-2 md:order-1">
      <div className="bg-linear-to-br from-stone-900/90 to-stone-900/50 backdrop-blur-sm rounded-3xl shadow-2xl border border-stone-800/50 p-6 sm:p-8">
        <h2 className="text-xl sm:text-2xl font-bold text-orange-500 mb-3">
          {t("contactUs.contactInfo.title")}
        </h2>
        <p className="text-stone-400 text-sm sm:text-base mb-6">
          {t("order.description")}
        </p>

        <ContactDetailsSection />
      </div>

      <OrderBenefitsSection />
    </div>
  );
}

export default OrderContactInfo;
