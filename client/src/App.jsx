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

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Delivery = lazy(() => import("./pages/Delivery"));
const Calculator = lazy(() => import("./pages/Calculator"));
const Order = lazy(() => import("./pages/Order"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
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

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
