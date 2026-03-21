import { useTranslation } from "react-i18next";
import { features } from "../../data/features.jsx";
import Button from "../../ui/Button";
import { Link } from "react-router";
import { ArrowUpRight, ChevronRight } from "lucide-react";

function KeyFeatures() {
  const { t } = useTranslation();

  const featureActions = [
    { to: "/order", label: t("productPackages.orderNow") },
    { to: "/order", label: t("productPackages.orderNow") },
    { to: "/about", label: t("keyFeatures.learnMore") },
    { to: "/delivery", label: t("howItWorks.learnMoreDelivery") },
    { to: "/about", label: t("keyFeatures.learnMore") },
    { to: "/calculator", label: t("cta.calculatePrice") },
  ];

  return (
    <div className="pt-12 sm:pt-15 pb-20 sm:pb-32">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-semibold text-stone-300 mb-8 font-space-grotesk px-4 sm:px-6 lg:px-16 text-center">
        {t("keyFeatures.sectionTitle")}
      </h2>

      <article className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="text-center mb-12">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-stone-300 mb-3 font-space-grotesk">
            {t("keyFeatures.title")}
          </h3>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-semibold text-stone-300 mb-4 font-space-grotesk">
            €0.95/kg
          </h2>
          <p className="text-sm sm:text-base lg:text-base text-stone-400 max-w-3xl mx-auto leading-relaxed">
            {t("keyFeatures.description")}
          </p>
        </div>

        <div className="sm:hidden flex items-center justify-end mb-3 text-xs text-stone-400 pr-1">
          <span>Swipe</span>
          <ChevronRight size={14} className="ml-1 text-orange-500" />
          <ChevronRight size={14} className="-ml-1 text-orange-500/80" />
        </div>

        <div className="mb-12 flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-6 overflow-x-auto sm:overflow-visible snap-x snap-mandatory px-1 -mx-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {features.map((feature, index) => (
            <Link
              key={index}
              to={featureActions[index]?.to || "/order"}
              className="group relative overflow-hidden bg-stone-900/40 p-5 sm:p-6 rounded-xl border border-stone-800 backdrop-blur-sm transition-all duration-300 hover:bg-stone-900/80 hover:border-orange-500/50 hover:-translate-y-1 hover:shadow-lg text-center block cursor-pointer snap-start min-w-[82%] sm:min-w-0"
              aria-label={`${t(feature.title)} - ${featureActions[index]?.label || t("productPackages.orderNow")}`}
            >
              <div className="absolute inset-0 bg-linear-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="mb-2 sm:mb-3">{feature.icon}</div>
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-stone-300 transition-colors mb-2">
                {t(feature.title)}
              </h3>
              <p className="text-xs sm:text-sm text-stone-400 block">
                {t(feature.desc)}
              </p>

              <span className="inline-flex items-center gap-1 mt-3 sm:mt-4 text-xs sm:text-sm text-orange-500 font-semibold group-hover:text-orange-400 transition-colors">
                {featureActions[index]?.label || t("productPackages.orderNow")}
                <ArrowUpRight size={16} />
              </span>
            </Link>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center items-stretch sm:items-center max-w-sm sm:max-w-none mx-auto">
          <Button
            type="primary"
            to="/order"
            className="w-full sm:w-auto text-center"
          >
            {t("keyFeatures.buyNow")}
          </Button>
          <Button
            type="secondary"
            to="/calculator"
            className="w-full sm:w-auto text-center"
          >
            {t("cta.calculatePrice")}
          </Button>
          <Button
            type="secondary"
            to="/about"
            className="w-full sm:w-auto text-center"
          >
            {t("keyFeatures.learnMore")}
          </Button>
        </div>
      </article>
    </div>
  );
}

export default KeyFeatures;
