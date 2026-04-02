import DeliveryHero from "../features/Delivery/DeliveryHero";

import DeliveryTerms from "../features/Delivery/DeliveryTerms";
import AditionalSevices from "../features/Delivery/AditionalSevices";
import DeliveryContactSection from "../features/Delivery/DeliveryContactSection";
import { useTranslation } from "react-i18next";
import Seo from "../seo/Seo";
import {
  createLocalBusinessSchema,
  createOrganizationSchema,
} from "../utils/structuredDataSchemas";

function Delivery() {
  const { t } = useTranslation();

  // Get schemas for structured data
  const localBusinessSchema = createLocalBusinessSchema();
  const organizationSchema = createOrganizationSchema();

  return (
    <div className="min-h-screen">
      <Seo
        title={t("seoPages.delivery.title")}
        description={t("seoPages.delivery.description")}
        path="/delivery"
        schema={[localBusinessSchema, organizationSchema]}
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
