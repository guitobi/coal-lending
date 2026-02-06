import { useState } from "react";

import Logo from "./Logo";
import NavButtonLink from "./NavButtonLink";
import HamburgerMenu from "./HamburgerMenu";
import MobileNav from "./MobileNav";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full flex flex-col bg-stone-900  border-b border-stone-800/50">
      <div className="flex w-full items-stretch">
        <NavButtonLink to="/" type="logo">
          <Logo />
        </NavButtonLink>

        <div className="text-stone-50 bg-stone-900 flex-1 flex items-center justify-end  px-4">
          <ul className="hidden sm:hidden md:flex gap-2 lg:gap-4 text-base md:text-lg lg:text-xl font-medium items-center">
            <li>
              <NavButtonLink to="/" type="primary">
                Home
              </NavButtonLink>
            </li>
            <li>
              <NavButtonLink to="/about" type="primary">
                About Us
              </NavButtonLink>
            </li>
            <li>
              <NavButtonLink to="/delivery" type="primary">
                Delivery
              </NavButtonLink>
            </li>
          </ul>
          <HamburgerMenu
            setIsMenuOpen={setIsMenuOpen}
            isMenuOpen={isMenuOpen}
          />
        </div>
      </div>

      <MobileNav setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
    </nav>
  );
}

export default NavBar;
