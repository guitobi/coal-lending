import DeliveryHero from "../features/Delivery/DeliveryHero";

import DeliveryTerms from "../features/Delivery/DeliveryTerms";
import AditionalSevices from "../features/Delivery/AditionalSevices";
import DeliveryContactSection from "../features/Delivery/DeliveryContactSection";
import { useTranslation } from "react-i18next";
import Seo from "../seo/Seo";

function Delivery() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <Seo
        title={t("nav.delivery")}
        description={t("delivery.description")}
        path="/delivery"
      />

      {/* Hero Section */}
      <DeliveryHero />

      {/* Delivery Terms - Zig-Zag */}
      <DeliveryTerms />

      {/* Additional Services */}
      <AditionalSevices />
      {/* Contact Section */}
      <DeliveryContactSection />
    </div>
  );
}

export default Delivery;
