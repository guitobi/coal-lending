import CTA from "../features/Home/CTA";
import HowItWorks from "../features/Home/HowItWorks";
import KeyFeatures from "../features/Home/KeyFeatures";
import ProductPackages from "../features/Home/ProductPackages";
import Testimonials from "../features/Home/Testimonials";
import DeferredSection from "../ui/DeferredSection";
import { useTranslation } from "react-i18next";
import Seo from "../seo/Seo";
import { SITE_URL } from "../utils/siteConfig";

function Home() {
  const { t } = useTranslation();

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "VAN SHARE",
    url: SITE_URL,
    email: "vanshare1@gmail.com",
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Premium Hardwood Charcoal",
    image: `${SITE_URL}/coal_in_bag.webp`,
    brand: "WOODEN WEST",
    description: t("keyFeatures.description"),
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      price: "0.95",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/order`,
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "PL",
        },
        shippingRate: {
          "@type": "MonetaryAmount",
          value: "0",
          currency: "EUR",
        },
      },
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        returnPolicyCategory: "https://schema.org/MerchantReturnNotPermitted",
      },
    },
  };

  return (
    <div className="text-center">
      <Seo
        title={t("seoPages.home.title")}
        description={t("seoPages.home.description")}
        path="/"
        schema={[organizationSchema, productSchema]}
      />

      <div className="relative">
        <CTA />
      </div>

      <div className="relative overflow-visible z-10">
        <ProductPackages />
      </div>

      <div className="relative z-0 -mt-1">
        <DeferredSection>
          <Testimonials />
        </DeferredSection>
      </div>

      <div className="relative z-0 -mt-1">
        <DeferredSection>
          <HowItWorks />
        </DeferredSection>
      </div>

      <div className="relative z-0 -mt-1">
        <DeferredSection>
          <KeyFeatures />
        </DeferredSection>
      </div>
    </div>
  );
}

export default Home;
