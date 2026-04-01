import { useTranslation } from "react-i18next";
import Seo from "../seo/Seo";
import CTA from "../features/Home/CTA";
import HowItWorks from "../features/Home/HowItWorks";
import KeyFeatures from "../features/Home/KeyFeatures";
import ProductPackages from "../features/Home/ProductPackages";
import Testimonials from "../features/Home/Testimonials";

function Home() {
  const { t } = useTranslation();

  const seoData = {
    title: t("seoPages.home.title"),
    description: t("seoPages.home.description"),
  };

  return (
    <>
      <Seo {...seoData} />

      <main>
        <CTA />
        <HowItWorks />
        <KeyFeatures />
        <Testimonials />
        <ProductPackages />
      </main>
    </>
  );
}

export default Home;
