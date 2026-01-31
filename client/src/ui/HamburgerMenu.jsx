function HamburgerMenu({ setIsMenuOpen, isMenuOpen }) {
  return (
    <button
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      className="md:hidden flex flex-col gap-1.5 "
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
  );
}

export default HamburgerMenu;
