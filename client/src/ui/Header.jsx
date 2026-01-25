import { useState } from "react";
import { Link } from "react-router";
import coalImage from "../assets/coal.webp";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-stone-700 text-slate-50 shadow-xl border-b-4 border-orange-500">
      <nav className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-3 hover:scale-105 transition-transform"
          >
            <img
              src={coalImage}
              alt="Coal"
              className="h-14 w-14 object-cover rounded-lg shadow-md"
            />
            <span className="text-2xl font-bold text-orange-400">
              Coal Lending
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-2 text-lg font-medium">
            <li>
              <Link
                to="/"
                className="px-4 py-2 rounded-lg hover:bg-stone-600 hover:text-orange-300 transition-all"
              >
                Головна
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="px-4 py-2 rounded-lg hover:bg-stone-600 hover:text-orange-300 transition-all"
              >
                Про нас
              </Link>
            </li>
            <li>
              <Link
                to="/delivery"
                className="px-4 py-2 rounded-lg hover:bg-stone-600 hover:text-orange-300 transition-all"
              >
                Доставка
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
          className={`md:hidden flex flex-col divide-y divide-stone-600 mt-4 text-lg font-medium bg-stone-800 rounded-lg overflow-hidden transition-all duration-300 ${isMenuOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <li>
            <Link
              to="/"
              className="block py-3 px-4 hover:bg-stone-600 hover:text-orange-300 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Головна
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block py-3 px-4 hover:bg-stone-600 hover:text-orange-300 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Про нас
            </Link>
          </li>
          <li>
            <Link
              to="/delivery"
              className="block py-3 px-4 hover:bg-stone-600 hover:text-orange-300 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Доставка
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
