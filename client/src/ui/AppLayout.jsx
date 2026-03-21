import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import BackgroundDecorations from "./BackgroundDecorations";
import ScrollToTop from "../utils/ScrollToTop";
import { Toaster } from "react-hot-toast";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
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
      <main className="grow coal-background bg-stone-950 font-roboto relative overflow-hidden ">
        <BackgroundDecorations />
        <div className="relative z-10">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
