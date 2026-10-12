// Local Business Schema
export const createLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "VAN SHARE",
  image: [
    "https://vanshare.pl/coal_in_bag.webp",
    "https://vanshare.pl/coal_in_bag.png",
  ],
  "@id": "https://vanshare.pl/#organization",
  url: "https://vanshare.pl",
  telephone: "+48 731 431 849",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ul. Gwiaździsta 62 16/6",
    addressLocality: "Wrocław",
    postalCode: "53-413",
    addressCountry: "PL",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "10:00",
      closes: "16:00",
    },
  ],
  areaServed: {
    "@type": "Country",
    name: "PL",
  },
  availableLanguage: ["English", "Polish"],
  email: "vanshare1@gmail.com",
  description:
    "Official distributor of WOODEN WEST brand premium hardwood charcoal in Poland. We provide high-quality charcoal for grilling and BBQ, compliant with European standard EN 1860-2:2005.",
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
});

// Organization Schema
export const createOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Van Share Sp. z o.o.",
  legalName: "Van Share Sp. z o.o.",
  url: "https://vanshare.pl",
  logo: "https://vanshare.pl/Logo.png",
  email: "vanshare1@gmail.com",
  telephone: "+48 731 431 849",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ul. Gwiaździsta 62 16/6",
    addressLocality: "Wrocław",
    postalCode: "53-413",
    addressRegion: "Lower Silesia",
    addressCountry: "PL",
  },
  foundingDate: "2021",
  founders: [
    {
      "@type": "Organization",
      name: "WOODEN WEST LLC",
    },
  ],
  knowsAbout: [
    "charcoal",
    "hardwood charcoal",
    "BBQ fuel",
    "grilling",
    "outdoor cooking",
    "pine wood pellets",
  ],
  areaServed: "Poland",
  serviceType: "Charcoal and wood pellet distribution",
  taxID: "NIP: 716-28-26-886",
});

// Product Schema
export const createProductSchema = (
  productName = "Premium Hardwood Charcoal",
  price = "0.95",
  currency = "EUR",
  description = "High-quality hardwood charcoal for grilling and BBQ, compliant with European standard EN 1860-2:2005.",
) => ({
  "@context": "https://schema.org/",
  "@type": "Product",
  name: productName,
  image: "https://vanshare.pl/coal_in_bag.webp",
  description: description,
  mpn: "HWCH-001",
  brand: {
    "@type": "Brand",
    name: "WOODEN WEST",
  },
  offers: {
    "@type": "Offer",
    priceCurrency: currency,
    price: price,
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: price,
      priceCurrency: currency,
      unitText: "kilogram",
    },
    availability: "https://schema.org/InStock",
    seller: {
      "@type": "Organization",
      name: "VAN SHARE",
    },
  },
});

// FAQ Schema
export const createFAQSchema = (faqs = []) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});
