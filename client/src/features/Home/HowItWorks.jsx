import { useTranslation } from "react-i18next";
import { steps } from "../../data/steps.jsx";
import { Link } from "react-router";
import { ArrowUpRight, ChevronRight } from "lucide-react";

const HowItWorks = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20  relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-300 mb-4 font-space-grotesk">
            {t("howItWorks.title")}
          </h2>
          <p className="text-stone-300 max-w-2xl mx-auto">
            {t("howItWorks.subtitle")}
          </p>
        </div>

        <div className="sm:hidden flex items-center justify-end mb-3 text-xs text-stone-400 pr-1">
          <span>Swipe</span>
          <ChevronRight size={14} className="ml-1 text-orange-500" />
          <ChevronRight size={14} className="-ml-1 text-orange-500/80" />
        </div>

        <div className="relative flex md:grid md:grid-cols-3 gap-6 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory px-1 -mx-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {/* Decorative line (Desktop only) */}
          <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-0.5 bg-amber-600 -z-10 border-t-2 border-dashed border-amber-600"></div>

          {steps.map((step, index) => (
            <Link
              key={index}
              to={index === 1 ? "/delivery" : "/order"}
              className="flex flex-col items-center text-center group cursor-pointer px-2 py-1 transition-all duration-300 hover:-translate-y-1 focus-visible:outline-none snap-start min-w-[82%] md:min-w-0"
              aria-label={
                index === 1
                  ? `${t(step.title)} - ${t("howItWorks.learnMoreDelivery")}`
                  : `${t(step.title)} - ${t("productPackages.orderNow")}`
              }
            >
              {/* Icon circle */}
              <div className="relative w-24 h-24 bg-stone-900/40 rounded-full flex items-center justify-center mb-6 shadow-sm border-4 border-stone-800/40 z-20 transition-all duration-300 group-hover:scale-105 group-hover:border-amber-600">
                {/* Opaque background to hide line */}
                <div className="absolute inset-0 bg-stone-950 rounded-full -z-10 "></div>
                {step.icon}
              </div>

              <h3 className="text-xl font-bold text-stone-300 mb-3">
                {t(step.title)}
              </h3>
              <p className="text-sm text-stone-300 leading-relaxed max-w-xs mx-auto">
                {t(step.desc)}
              </p>

              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-orange-500 group-hover:text-orange-400 transition-colors">
                {index === 1
                  ? t("howItWorks.learnMoreDelivery").replace(" →", "")
                  : t("productPackages.orderNow")}
                <ArrowUpRight size={16} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
