import AppLayout from "./ui/AppLayout";
import { lazy, Suspense, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  PrivacyDocPage,
  TermsDocPage,
  CookieDocPage,
  LegalNoticePage,
} from "./pages/LegalDocs";

import Spinner from "./ui/Spinner";
import HeatmapAnalyticsProvider from "./components/HeatmapAnalyticsProvider";

import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Delivery = lazy(() => import("./pages/Delivery"));
const Calculator = lazy(() => import("./pages/Calculator"));
const Order = lazy(() => import("./pages/Order"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Comparison = lazy(() => import("./pages/Comparison"));
const RegionalCharcoal = lazy(() => import("./pages/RegionalCharcoal"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogArticle = lazy(() => import("./pages/BlogArticle"));
const NotFound = lazy(() => import("./pages/NotFound"));

function withSuspense(component) {
  return (
    <Suspense
      fallback={
        <div className="min-h-[50vh] flex flex-col items-center justify-center gap-4 text-stone-300">
          <Spinner className="h-10 w-10 border-4" />
          <p className="text-sm sm:text-base">Loading...</p>
        </div>
      }
    >
      {component}
    </Suspense>
  );
}

import RoutedAnalyticsProvider from "./components/RoutedAnalyticsProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RoutedAnalyticsProvider measurementId={window.VITE_GA_MEASUREMENT_ID}>
        <AppLayout />
      </RoutedAnalyticsProvider>
    ),
    children: [
      {
        index: true,
        element: withSuspense(<Home />),
      },
      {
        path: "about",
        element: withSuspense(<AboutUs />),
      },
      {
        path: "delivery",
        element: withSuspense(<Delivery />),
      },
      {
        path: "calculator",
        element: withSuspense(<Calculator />),
      },
      {
        path: "order",
        element: withSuspense(<Order />),
      },
      {
        path: "contact",
        element: withSuspense(<ContactUs />),
      },
      {
        path: "faq",
        element: withSuspense(<FAQ />),
      },
      {
        path: "blog",
        element: withSuspense(<Blog />),
      },
      {
        path: "blog/:slug",
        element: withSuspense(<BlogArticle />),
      },
      {
        path: "comparison",
        element: withSuspense(<Comparison />),
      },
      {
        path: "privacy-policy",
        element: withSuspense(<PrivacyDocPage />),
      },
      {
        path: "terms-of-service",
        element: withSuspense(<TermsDocPage />),
      },
      {
        path: "cookie-policy",
        element: withSuspense(<CookieDocPage />),
      },
      {
        path: "legal-notice",
        element: withSuspense(<LegalNoticePage />),
      },
      {
        path: "region/:region/*",
        element: withSuspense(<RegionalCharcoal />),
      },
      {
        path: "*",
        element: withSuspense(<NotFound />),
      },
    ],
  },
]);

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const updateHtmlLangAttribute = () => {
      const htmlTag = document.getElementById("html-tag");
      if (htmlTag) {
        htmlTag.setAttribute("lang", i18n.language);
      }
    };

    updateHtmlLangAttribute();

    const handleLanguageChange = () => {
      updateHtmlLangAttribute();
    };

    i18n.on("languageChanged", handleLanguageChange);

    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [i18n]);

  // Heatmap analytics configuration
  const heatmapConfig = {
    enabled: true,
    type: "custom", // Options: 'hotjar', 'crazyegg', 'custom'
    id: null, // For Hotjar
    version: null, // For Hotjar
    accountId: null, // For Crazy Egg
  };

  return (
    <HeatmapAnalyticsProvider config={heatmapConfig}>
      <RouterProvider router={router} />
    </HeatmapAnalyticsProvider>
  );
}

export default App;
