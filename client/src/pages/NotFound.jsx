import { SearchX } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import Seo from "../seo/Seo";
import Button from "../ui/Button";

function NotFound() {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen px-4 py-8 sm:py-12 lg:py-16 flex items-center justify-center">
      <Seo
        title={t("notFound.seoTitle")}
        description={t("notFound.seoDescription")}
        robots="noindex, follow"
      />

      <div className="w-full max-w-3xl rounded-3xl border border-stone-800/60 bg-linear-to-br from-stone-900/90 to-stone-900/50 backdrop-blur-sm shadow-2xl p-5 sm:p-8 lg:p-10 text-center">
        <div className="mx-auto mb-4 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center">
          <SearchX className="w-7 h-7 sm:w-8 sm:h-8 text-orange-500" />
        </div>

        <p className="text-orange-500 font-bold text-xs sm:text-sm tracking-[0.24em] uppercase mb-2">
          {t("notFound.errorLabel")}
        </p>

        <p className="text-orange-500 text-[88px] leading-none sm:text-[140px] md:text-[180px] font-black drop-shadow-[0_10px_35px_rgba(249,115,22,0.35)] mb-2 sm:mb-3">
          404
        </p>

        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-stone-200 mb-3 sm:mb-4">
          {t("notFound.title")}
        </h1>
        <p className="text-stone-400 text-sm sm:text-base lg:text-lg max-w-xl mx-auto mb-6 sm:mb-8 px-1 sm:px-0">
          {t("notFound.description")}
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-sm sm:max-w-none mx-auto">
          <Button type="primary" to="/">
            {t("notFound.homeButton")}
          </Button>

          <Link
            to="/contact"
            className="rounded-full border-2 border-stone-700 text-stone-300 hover:text-orange-500 hover:border-orange-500 px-6 py-2.5 sm:px-8 sm:py-3 font-semibold transition-colors"
          >
            {t("notFound.contactButton")}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
