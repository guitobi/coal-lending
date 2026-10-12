function HamburgerMenu({ setIsMenuOpen, isMenuOpen }) {
  return (
    <button
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      className="flex min-h-11 min-w-11 flex-col items-center justify-center gap-1.5 rounded-lg text-stone-100 transition-colors hover:bg-stone-800 focus-visible:outline-2 focus-visible:outline-orange-400 xl:hidden"
      aria-label="Menu"
      aria-expanded={isMenuOpen}
      aria-controls="mobile-site-navigation"
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
  );
}

export default HamburgerMenu;
