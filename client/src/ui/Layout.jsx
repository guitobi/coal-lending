import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="grow bg-stone-200 font-roboto h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
