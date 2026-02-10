import NavButtonLink from "./NavButtonLink";

function MobileNav({ setIsMenuOpen, isMenuOpen }) {
  return (
    <div
      className={`w-full bg-neutral-900 overflow-hidden transition-all duration-300 ${isMenuOpen ? "max-h-96 pb-4" : "max-h-0 pb-0"}`}
    >
      <ul
        className={`md:hidden flex flex-col divide-y divide-neutral-700 mt-2 mb-0 text-lg font-medium bg-neutral-800 rounded-lg`}
      >
        <li>
          <NavButtonLink
            to="/"
            type="mobile"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavButtonLink>
        </li>
        <li>
          <NavButtonLink
            to="/about"
            type="mobile"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </NavButtonLink>
        </li>
        <li>
          <NavButtonLink
            to="/delivery"
            type="mobile"
            onClick={() => setIsMenuOpen(false)}
          >
            Delivery
          </NavButtonLink>
        </li>
        <li>
          <NavButtonLink
            to="/calculator"
            type="mobile"
            onClick={() => setIsMenuOpen(false)}
          >
            Calculator
          </NavButtonLink>
        </li>
        <li>
          <NavButtonLink
            to="/contact"
            type="mobile"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </NavButtonLink>
        </li>
      </ul>
    </div>
  );
}

export default MobileNav;
