import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router";
import { useTranslation } from "react-i18next";
import { SITE_NAME, SITE_URL } from "../utils/siteConfig";

const FALLBACK_OG_IMAGE = "/coal_in_bag.webp";

function getBaseUrl() {
  if (SITE_URL) return SITE_URL;
  if (typeof window !== "undefined") return window.location.origin;

  return "";
}

function toAbsoluteUrl(baseUrl, path) {
  if (!path) return baseUrl;
  if (/^https?:\/\//i.test(path)) return path;

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return baseUrl ? `${baseUrl}${normalizedPath}` : normalizedPath;
}

function Seo({
  title,
  description,
  path,
  image = FALLBACK_OG_IMAGE,
  schema,
  robots = "index, follow",
}) {
  const location = useLocation();
  const { i18n } = useTranslation();

  const language = i18n.language?.toLowerCase().includes("pl") ? "pl" : "en";
  const baseUrl = getBaseUrl();
  const pathname = path || location.pathname || "/";

  const canonicalUrl = toAbsoluteUrl(baseUrl, pathname);
  const ogImageUrl = toAbsoluteUrl(baseUrl, image);
  const fullTitle = title.includes(SITE_NAME)
    ? title
    : `${title} | ${SITE_NAME}`;

  const enAlternate = `${canonicalUrl}${canonicalUrl.includes("?") ? "&" : "?"}lang=en`;
  const plAlternate = `${canonicalUrl}${canonicalUrl.includes("?") ? "&" : "?"}lang=pl`;

  const schemas = Array.isArray(schema) ? schema : schema ? [schema] : [];

  return (
    <Helmet>
      <html lang={language} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />

      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" hrefLang="en" href={enAlternate} />
      <link rel="alternate" hrefLang="pl" href={plAlternate} />
      <link rel="alternate" hrefLang="x-default" href={enAlternate} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta
        property="og:locale"
        content={language === "pl" ? "pl_PL" : "en_US"}
      />
      <meta
        property="og:locale:alternate"
        content={language === "pl" ? "en_US" : "pl_PL"}
      />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />

      {schemas.map((item, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}
    </Helmet>
  );
}

export default Seo;
