import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
// import coalImage from "../assets/coal.webp";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Хедер стає sticky після 400px скролу (приблизно після CTA)
      setIsScrolled(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`text-slate-50 shadow-xl border-b-4 border-yellow-500 transition-all duration-100 ease-in-out ${
        isScrolled
          ? "sticky top-0 z-50 bg-neutral-900/95 backdrop-blur-md animate-[slideDown_0.5s_ease-out]"
          : "relative z-10 bg-neutral-900"
      }`}
      style={{
        animation: isScrolled ? "slideDown 0.3s ease-out" : "none",
      }}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-3 hover:scale-105 transition-all duration-300 group"
          >
            <img
              src="/Logo-Photoroom.png"
              alt="Van Share Logo"
              className="h-10 sm:h-12 lg:h-14 w-auto drop-shadow-[0_0_20px_rgba(255,255,255,0.9)]"
            />
            <span
              className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-linear-to-r from-yellow-400 via-yellow-500 to-red-500 
              bg-clip-text text-transparent uppercase tracking-wide font-zalando
              drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]
              group-hover:from-yellow-300 group-hover:via-yellow-400 group-hover:to-red-400
              group-hover:drop-shadow-[0_4px_8px_rgba(234,179,8,0.4)]
              transition-all duration-300"
            >
              Van Share
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden sm:hidden md:flex gap-2 lg:gap-4 text-base md:text-lg lg:text-xl font-medium">
            <li>
              <Link
                to="/"
                className={`px-3 py-2 lg:px-5 lg:py-3 rounded-lg transition-all hover:bg-neutral-700 hover:text-yellow-300 ${
                  location.pathname === "/"
                    ? "bg-neutral-800 text-yellow-300"
                    : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`px-3 py-2 lg:px-5 lg:py-3 rounded-lg transition-all hover:bg-neutral-700 hover:text-yellow-300 ${
                  location.pathname === "/about"
                    ? "bg-neutral-800 text-yellow-300"
                    : ""
                }`}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/delivery"
                className={`px-3 py-2 lg:px-5 lg:py-3 rounded-lg transition-all hover:bg-neutral-700 hover:text-yellow-300 ${
                  location.pathname === "/delivery"
                    ? "bg-neutral-800 text-yellow-300"
                    : ""
                }`}
              >
                Delivery
              </Link>
            </li>
          </ul>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <span
              className={`block h-0.5 w-6 bg-slate-50 transition-transform ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-slate-50 transition-opacity ${isMenuOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-slate-50 transition-transform ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            ></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <ul
          className={`md:hidden flex flex-col divide-y divide-neutral-700 mt-4 text-lg font-medium bg-neutral-800 rounded-lg overflow-hidden transition-all duration-300 ${isMenuOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <li>
            <Link
              to="/"
              className={`block py-3 px-4 transition-all hover:bg-neutral-700 hover:text-yellow-300 ${
                location.pathname === "/"
                  ? "bg-neutral-700 text-yellow-300"
                  : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`block py-3 px-4 transition-all hover:bg-neutral-700 hover:text-yellow-300 ${
                location.pathname === "/about"
                  ? "bg-neutral-700 text-yellow-300"
                  : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/delivery"
              className={`block py-3 px-4 transition-all hover:bg-neutral-700 hover:text-yellow-300 ${
                location.pathname === "/delivery"
                  ? "bg-neutral-700 text-yellow-300"
                  : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Delivery
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
