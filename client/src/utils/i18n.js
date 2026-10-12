import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "../locales/en.json";
import pl from "../locales/pl.json";
import pelletsPl from "../locales/pellets.pl.json";
import pelletsEn from "../locales/pellets.en.json";
import productsPl from "../locales/products.pl.json";
import productsEn from "../locales/products.en.json";

const resources = {
  en: {
    translation: { ...en, pellets: pelletsEn, products: productsEn },
  },
  pl: {
    translation: { ...pl, pellets: pelletsPl, products: productsPl },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    detection: {
      order: [
        "querystring",
        "cookie",
        "localStorage",
        "sessionStorage",
        "navigator",
        "htmlTag",
        "path",
        "subdomain",
      ],
      lookupQuerystring: "lng",
      lookupCookie: "i18next",
      lookupLocalStorage: "i18nextLng",
      caches: ["localStorage", "cookie"],
    },
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
