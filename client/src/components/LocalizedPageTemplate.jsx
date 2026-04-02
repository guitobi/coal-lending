import { useTranslation } from "react-i18next";
import Seo from "../seo/Seo";

function LocalizedPageTemplate({
  title,
  description,
  path,
  children,
  region = null,
}) {
  const { t } = useTranslation();

  // Generate localized titles and descriptions based on region
  const getPageTitle = () => {
    if (region) {
      return t(
        "localizedPages.titleWithRegion",
        {
          title:
            title || t("localizedPages.defaultTitle", "Local Charcoal Supply"),
          region: region,
        },
        `${title || "Local Charcoal Supply"} in ${region}`,
      );
    }
    return title || t("localizedPages.defaultTitle", "Local Charcoal Supply");
  };

  const getPageDescription = () => {
    if (region) {
      return t(
        "localizedPages.descriptionWithRegion",
        {
          description:
            description ||
            t(
              "localizedPages.defaultDescription",
              "Premium hardwood charcoal supply in your area",
            ),
          region: region,
        },
        `${description || "Premium hardwood charcoal supply in your area"} for ${region}`,
      );
    }
    return (
      description ||
      t(
        "localizedPages.defaultDescription",
        "Premium hardwood charcoal supply in your area",
      )
    );
  };

  // Get localized schema for local business
  const getLocalBusinessSchema = () => {
    return {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: region ? `VAN SHARE ${region}` : "VAN SHARE",
      image: [
        "https://vanshare.pl/coal_in_bag.webp",
        "https://vanshare.pl/coal_in_bag.png",
      ],
      "@id": region
        ? `https://vanshare.pl/#organization-${region.toLowerCase()}`
        : "https://vanshare.pl/#organization",
      url: region
        ? `https://vanshare.pl/${region.toLowerCase()}`
        : "https://vanshare.pl",
      telephone: "+48 577 432 949",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: region
          ? `${region} Location`
          : "ul. Batalionów Chłopskich 3",
        addressLocality: region || "Jelenia Góra",
        postalCode: region ? "Regional Code" : "58-050",
        addressCountry: "PL",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: region ? 52.2297 : 50.9271, // Default to Warsaw coordinates if region, otherwise Jelenia Gora
        longitude: region ? 21.012 : 15.7166,
      },
      areaServed: region
        ? {
            "@type": "City",
            name: region,
          }
        : {
            "@type": "Country",
            name: "PL",
          },
      availableLanguage: ["English", "Polish"],
      email: "vanshare1@gmail.com",
      description: getPageDescription(),
      brand: "WOODEN WEST",
      makesOffer: {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Premium Hardwood Charcoal",
          category: "Fuel",
          audience: {
            "@type": "Audience",
            audienceType: "B2B Customers",
          },
        },
      },
    };
  };

  return (
    <div className="min-h-screen py-12 sm:py-16 px-4">
      <Seo
        title={getPageTitle()}
        description={getPageDescription()}
        path={path}
        schema={[getLocalBusinessSchema()]}
      />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-500 mb-4">
            {getPageTitle()}
          </h1>
          <p className="text-stone-400 text-base sm:text-lg max-w-2xl mx-auto">
            {getPageDescription()}
          </p>
        </div>

        <div className="bg-stone-900/50 backdrop-blur-sm rounded-2xl border border-stone-700 p-6 sm:p-8">
          {children}
        </div>
      </div>
    </div>
  );
}

export default LocalizedPageTemplate;
