import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import BackgroundDecorations from "./BackgroundDecorations";
import ScrollToTop from "../utils/ScrollToTop";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";

function Layout() {
  const [showDecorations, setShowDecorations] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const canShowDecorations =
      window.innerWidth >= 768 && !prefersReducedMotion;

    if (!canShowDecorations) return;

    const idleCallback = window.requestIdleCallback;

    if (typeof idleCallback === "function") {
      const id = idleCallback(() => setShowDecorations(true), {
        timeout: 1200,
      });
      return () => window.cancelIdleCallback?.(id);
    }

    const timeoutId = window.setTimeout(() => setShowDecorations(true), 300);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <div
      className="flex flex-col min-h-screen"
      role="main"
      aria-label="Main content"
    >
      <ScrollToTop />
      <Toaster
        position="top-center"
        toastOptions={{
          className:
            "!bg-stone-950/80 !text-stone-200 !border !border-stone-800 !backdrop-blur-md shadow-xl rounded-xl",
          style: {
            background: "transparent",
            boxShadow: "none",
            maxWidth: "500px",
            padding: "16px",
          },
          success: {
            iconTheme: {
              primary: "#f97316",
              secondary: "#fff",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#fff",
            },
          },
        }}
      />
      <Header />
      <main
        className="grow coal-background bg-stone-950 font-roboto relative overflow-hidden "
        id="main-content"
      >
        {showDecorations ? <BackgroundDecorations /> : null}
        <div className="relative z-10">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
