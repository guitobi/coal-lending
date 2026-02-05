import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import BackgroundDecorations from "./BackgroundDecorations";
import ScrollToTop from "../utils/scrollToTop";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
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
