import { useTranslation } from "react-i18next";
import Seo from "../../seo/Seo";
import {
  createLocalBusinessSchema,
  createOrganizationSchema,
} from "../../utils/structuredDataSchemas";

import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

function ContactPage() {
  const { t } = useTranslation();

  // Get schemas for structured data
  const localBusinessSchema = createLocalBusinessSchema();
  const organizationSchema = createOrganizationSchema();

  return (
    <div className="min-h-screen py-12 sm:py-16 px-4">
      <Seo
        title={t("seoPages.contact.title")}
        description={t("seoPages.contact.description")}
        path="/contact"
        schema={[localBusinessSchema, organizationSchema]}
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
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
