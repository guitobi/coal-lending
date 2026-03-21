import { Flame, Droplets, Diamond, FileCheck, ShieldCheck } from "lucide-react";
import { useTranslation } from "react-i18next";

const AboutProduct = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-4 bg-stone-900/40 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-sm font-medium mb-4">
            <ShieldCheck className="w-4 h-4" />
            <span>{t("about.distributorBadge")}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            {t("about.headingPrefix")}{" "}
            <span className="text-orange-500">
              {t("about.headingHighlight")}
            </span>
          </h2>
          <p className="text-stone-400 max-w-2xl mx-auto text-lg">
            {t("about.intro")}
          </p>
        </div>

        {/* PART 1: LAB RESULTS (GRID) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {/* Card 1: Carbon */}
          <div className="bg-stone-900/50 border border-stone-800 p-6 rounded-2xl hover:border-orange-500/50 transition-colors group">
            <div className="w-12 h-12 bg-stone-800 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
              <Flame className="w-6 h-6 text-orange-500" />
            </div>
            <h3 className="text-stone-400 text-sm font-medium mb-1">
              {t("about.firstCard.title")}
            </h3>
            <p className="text-3xl font-bold text-white">
              {t("about.firstCard.percentage")}
            </p>
            <p className="text-xs text-stone-500 mt-2">
              {t("about.firstCard.description")}
            </p>
          </div>

          {/* Card 2: Ash */}
          <div className="bg-stone-900/50 border border-stone-800 p-6 rounded-2xl hover:border-orange-500/50 transition-colors group">
            <div className="w-12 h-12 bg-stone-800 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
              <Diamond className="w-6 h-6 text-orange-500" />
            </div>
            <h3 className="text-stone-400 text-sm font-medium mb-1">
              {t("about.secondCard.title")}
            </h3>
            <p className="text-3xl font-bold text-white">
              {t("about.secondCard.percentage")}
            </p>
            <p className="text-xs text-stone-500 mt-2">
              {t("about.secondCard.description")}
            </p>
          </div>

          {/* Card 3: Moisture */}
          <div className="bg-stone-900/50 border border-stone-800 p-6 rounded-2xl hover:border-orange-500/50 transition-colors group">
            <div className="w-12 h-12 bg-stone-800 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
              <Droplets className="w-6 h-6 text-orange-500" />
            </div>
            <h3 className="text-stone-400 text-sm font-medium mb-1">
              {t("about.thirdCard.title")}
            </h3>
            <p className="text-3xl font-bold text-white">
              {t("about.thirdCard.percentage")}
            </p>
            <p className="text-xs text-stone-500 mt-2">
              {t("about.thirdCard.description")}
            </p>
          </div>

          {/* Card 4: Fraction */}
          <div className="bg-stone-900/50 border border-stone-800 p-6 rounded-2xl hover:border-orange-500/50 transition-colors group">
            <div className="w-12 h-12 bg-stone-800 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
              <FileCheck className="w-6 h-6 text-orange-500" />
            </div>
            <h3 className="text-stone-400 text-sm font-medium mb-1">
              {t("about.fourthCard.title")}
            </h3>
            <p className="text-3xl font-bold text-white">
              20-120{" "}
              <span className="text-lg font-normal text-stone-400">mm</span>
            </p>
            <p className="text-xs text-stone-500 mt-2">
              {t("about.fourthCard.description")}
            </p>
          </div>
        </div>

        {/* PART 2: COMPANY INFO (Split Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              {t("about.partnerTitlePrefix")}{" "}
              <span className="text-orange-500">{t("about.partnerName")}</span>
            </h3>
            <p className="text-stone-300 leading-relaxed">
              {t("about.partnerDescription")}{" "}
              <strong className="text-white">
                {t("about.warehouseLocation")}
              </strong>
              .
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 min-w-5 h-5 rounded-full bg-orange-500/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-orange-500" />
                </div>
                <p className="text-stone-400 text-sm">
                  <strong className="text-white block mb-1">
                    {t("about.logisticsTitle")}
                  </strong>
                  {t("about.logisticsDescription")}
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 min-w-5 h-5 rounded-full bg-orange-500/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-orange-500" />
                </div>
                <p className="text-stone-400 text-sm">
                  <strong className="text-white block mb-1">
                    {t("about.privateLabelTitle")}
                  </strong>
                  {t("about.privateLabelDescription")}
                </p>
              </li>
            </ul>

            <div className="pt-4">
              <a
                href="/certificate.pdf"
                download="VanShare_Certificate.pdf"
                className="text-white border-b border-orange-500 pb-1 hover:text-orange-500 transition-colors text-sm font-medium"
              >
                {t("about.certificateLink")}
              </a>
            </div>
          </div>

          {/* Right: Visual Block */}
          <div className="relative">
            {/* Decorative Border */}
            <div className="absolute -inset-4 border-2 border-stone-800 rounded-3xl opacity-50 rotate-2" />

            {/* Main Image Container */}
            <div className="relative bg-stone-900 rounded-2xl overflow-hidden h-80 md:h-96 border border-stone-800 shadow-2xl">
              <img
                src="/5310268230607771055.jpg"
                alt="Charcoal pallets loaded in delivery truck"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />

              {/* Floating Badge */}
              <div className="absolute bottom-6 right-6 bg-stone-950/90 backdrop-blur border border-stone-700 px-4 py-3 rounded-xl shadow-xl">
                <p className="text-xs text-stone-400 uppercase tracking-wider mb-1">
                  Incoterms 2020
                </p>
                <p className="text-white font-bold">DAP Polkowice</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProduct;
