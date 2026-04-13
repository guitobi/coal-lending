import { Helmet } from 'react-helmet-async';

export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'VAN SHARE',
    description: 'Wysokiej jakości węgiel drzewny bukowy z dostawą w całej Polsce',
    url: 'https://vanshare.pl',
    telephone: '+48-123-456-789',
    email: 'vanshare1@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'PL',
    },
    priceRange: '$$',
    areaServed: {
      '@type': 'Country',
      name: 'Poland',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Węgiel Drzewny',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: 'Węgiel Drzewny Bukowy',
            description: 'Premium węgiel drzewny z drewna bukowego',
            category: 'Węgiel do grilla',
          },
        },
      ],
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

export function ProductSchema({ name, description, image }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: name || 'Węgiel Drzewny Bukowy VAN SHARE',
    description:
      description ||
      'Wysokiej jakości węgiel drzewny z drewna bukowego. Idealny do grillowania.',
    image: image || 'https://vanshare.pl/coal_in_bag.webp',
    brand: {
      '@type': 'Brand',
      name: 'VAN SHARE',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'PLN',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'VAN SHARE',
      },
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

export function BreadcrumbSchema({ items }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
