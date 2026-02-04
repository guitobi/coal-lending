import { useState, useEffect } from "react";

import NavBar from "./NavBar";
import Logo from "./Logo";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`text-slate-50 shadow-xl border-b-4 bg-stone-900 border-orange-500 transition-all duration-100 ease-in-out 
        ${
          isScrolled
            ? "sticky top-0 z-50 bg-transparent backdrop-blur-md animate-[slideDown_0.5s_ease-out]"
            : "relative z-10 bg-transparent"
        }`}
      style={{
        animation: isScrolled ? "slideDown 0.3s ease-out" : "none",
      }}
    >
      <NavBar />
    </header>
  );
}

export default Header;
