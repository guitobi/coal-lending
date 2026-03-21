import { Link } from "react-router";
import { useTranslation } from "react-i18next";

function FooterCopyrigth() {
  const { t } = useTranslation();

  return (
    <div className="border-t border-neutral-700 mt-8 pt-6 text-center text-slate-400">
      <p>
        &copy; {new Date().getFullYear()} Van Share.{" "}
        {t("footer.allRightsReserved")}
      </p>
      <div className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm">
        <Link
          to="/privacy-policy"
          className="hover:text-orange-400 transition-colors"
        >
          {t("footer.legalLinks.privacyPolicy")}
        </Link>
        <Link
          to="/terms-of-service"
          className="hover:text-orange-400 transition-colors"
        >
          {t("footer.legalLinks.termsOfService")}
        </Link>
        <Link
          to="/cookie-policy"
          className="hover:text-orange-400 transition-colors"
        >
          {t("footer.legalLinks.cookiePolicy")}
        </Link>
        <Link
          to="/legal-notice"
          className="hover:text-orange-400 transition-colors"
        >
          {t("footer.legalLinks.legalNotice")}
        </Link>
      </div>
    </div>
  );
}

export default FooterCopyrigth;
