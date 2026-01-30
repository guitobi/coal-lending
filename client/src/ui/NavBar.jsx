import { Link, useLocation } from "react-router";

import { useState } from "react";

import Logo from "./Logo";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();

  return (
    <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6">
      <div className="flex items-stretch justify-between h-full">
        <Link
          to="/"
          className="flex h-full items-center gap-2 sm:gap-3 hover:scale-105 transition-all duration-300 group"
        >
          <Logo />
        </Link>
        <ul className="hidden sm:hidden md:flex gap-2 lg:gap-4 text-base md:text-lg lg:text-xl font-medium items-center">
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
              location.pathname === "/" ? "bg-neutral-700 text-yellow-300" : ""
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
  );
}

export default NavBar;
