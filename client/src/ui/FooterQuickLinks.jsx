import { useTranslation } from "react-i18next";
import { Link } from "react-router";

function FooterQuickLinks() {
  const { t } = useTranslation();

  return (
    <div>
      <h4 className="text-xl sm:text-xl lg:text-2xl font-semibold mb-4 text-orange-400">
        {t("footer.navigationTitle")}
      </h4>
      <ul className="space-y-2 text-sm sm:text-base lg:text-lg">
        <li>
          <Link
            to="/"
            className="text-slate-300 hover:text-orange-500 transition-colors"
          >
            {t("nav.home")}
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="text-slate-300 hover:text-orange-500  transition-colors"
          >
            {t("nav.aboutUs")}
          </Link>
        </li>
        <li>
          <Link
            to="/delivery"
            className="text-slate-300 hover:text-orange-500 transition-colors"
          >
            {t("nav.delivery")}
          </Link>
        </li>
        <li>
          <Link
            to="/calculator"
            className="text-slate-300 hover:text-orange-500 transition-colors"
          >
            {t("nav.calculator")}
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="text-slate-300 hover:text-orange-500 transition-colors"
          >
            {t("nav.contactUs")}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default FooterQuickLinks;
