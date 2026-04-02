import { useTranslation } from "react-i18next";
import Seo from "../seo/Seo";
import StructuredData from "../components/StructuredData";
import {
  createLocalBusinessSchema,
  createOrganizationSchema,
} from "../utils/structuredDataSchemas";
import CTA from "../features/Home/CTA";
import HowItWorks from "../features/Home/HowItWorks";
import KeyFeatures from "../features/Home/KeyFeatures";
import ProductPackages from "../features/Home/ProductPackages";
import Testimonials from "../features/Home/Testimonials";
import FAQSection from "../components/FAQSection";

function Home() {
  const { t } = useTranslation();

  const seoData = {
    title: t("seoPages.home.title"),
    description: t("seoPages.home.description"),
  };

  // Get schemas for structured data
  const localBusinessSchema = createLocalBusinessSchema();
  const organizationSchema = createOrganizationSchema();

  return (
    <>
      <Seo {...seoData} schema={[localBusinessSchema, organizationSchema]} />

      <main>
        <CTA />
        <ProductPackages />
        <Testimonials />
        <HowItWorks />
        <KeyFeatures />
        <FAQSection id="faq" />
      </main>
    </>
  );
}

export default Home;
