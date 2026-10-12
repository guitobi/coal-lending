import { useTranslation } from "react-i18next";
import NavButtonLink from "./NavButtonLink";
import LanguageSwitcher from "./LanguageSwitcher";

function MobileNav({ setIsMenuOpen, isMenuOpen }) {
  const { t } = useTranslation();

  return (
    <div
      id="mobile-site-navigation"
      inert={!isMenuOpen}
      aria-hidden={!isMenuOpen}
      className={`w-full bg-neutral-900 overflow-hidden transition-all duration-500 ease-in-out xl:hidden
        ${isMenuOpen ? "max-h-screen pb-4 opacity-100" : "max-h-0 pb-0 opacity-0"}`}
    >
      <ul
        className="mt-2 mb-0 flex flex-col divide-y divide-neutral-700 rounded-lg bg-neutral-800 text-lg font-medium"
      >
        <li>
          <NavButtonLink
            to="/"
            type="mobile"
            onClick={() => setIsMenuOpen(false)}
          >
            {t("nav.home")}
          </NavButtonLink>
        </li>
        <li>
          <NavButtonLink
            to="/about"
            type="mobile"
            onClick={() => setIsMenuOpen(false)}
          >
            {t("nav.aboutUs")}
          </NavButtonLink>
        </li>
        <li>
          <NavButtonLink to="/pellet" type="mobile" onClick={() => setIsMenuOpen(false)}>
            {t("nav.pellet")}
          </NavButtonLink>
        </li>
        <li>
          <NavButtonLink
            to="/delivery"
            type="mobile"
            onClick={() => setIsMenuOpen(false)}
          >
            {t("nav.delivery")}
          </NavButtonLink>
        </li>

        <li>
          <NavButtonLink
            to="/faq"
            type="mobile"
            onClick={() => setIsMenuOpen(false)}
          >
            {t("nav.faq")}
          </NavButtonLink>
        </li>
        <li>
          <NavButtonLink
            to="/blog"
            type="mobile"
            onClick={() => setIsMenuOpen(false)}
          >
            {t("nav.blog")}
          </NavButtonLink>
        </li>
        <li>
          <NavButtonLink
            to="/contact"
            type="mobile"
            onClick={() => setIsMenuOpen(false)}
          >
            {t("nav.contactUs")}
          </NavButtonLink>
        </li>

        <li className="p-2">
          <LanguageSwitcher isMobile={true} />
        </li>
      </ul>
    </div>
  );
}

export default MobileNav;
