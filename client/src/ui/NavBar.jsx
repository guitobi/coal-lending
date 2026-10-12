import { useState } from "react";

import Logo from "./Logo";
import NavButtonLink from "./NavButtonLink";
import HamburgerMenu from "./HamburgerMenu";
import MobileNav from "./MobileNav";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

function NavBar() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full flex flex-col bg-stone-900  border-b border-stone-800/50">
      <div className="flex w-full items-stretch">
        <NavButtonLink to="/" type="logo">
          <Logo />
        </NavButtonLink>

        <div className="flex min-w-0 flex-1 items-center justify-end bg-stone-900 px-4 text-stone-50">
          <ul className="hidden items-center gap-1 whitespace-nowrap text-base font-medium xl:flex 2xl:gap-3 2xl:text-lg">
            <li>
              <NavButtonLink to="/" type="primary">
                {t("nav.home")}
              </NavButtonLink>
            </li>
            <li>
              <NavButtonLink to="/about" type="primary">
                {t("nav.aboutUs")}
              </NavButtonLink>
            </li>
            <li>
              <NavButtonLink to="/pellet" type="primary">{t("nav.pellet")}</NavButtonLink>
            </li>
            <li>
              <NavButtonLink to="/delivery" type="primary">
                {t("nav.delivery")}
              </NavButtonLink>
            </li>

            <li>
              <NavButtonLink to="/faq" type="primary">
                {t("nav.faq")}
              </NavButtonLink>
            </li>
            <li>
              <NavButtonLink to="/blog" type="primary">
                {t("nav.blog")}
              </NavButtonLink>
            </li>
            <li>
              <NavButtonLink to="/contact" type="primary">
                {t("nav.contactUs")}
              </NavButtonLink>
            </li>
            <li>
              <LanguageSwitcher />
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
