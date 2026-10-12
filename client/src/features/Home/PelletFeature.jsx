import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

export default function PelletFeature() {
  const { t } = useTranslation();
  return (
    <section aria-labelledby="pellet-feature-title" className="relative px-4 py-12 sm:px-6 lg:py-20">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-md border border-[#65705a]/40 bg-[#202b21] text-[#f2eee4] lg:grid-cols-2">
        <div className="flex flex-col justify-center px-7 py-11 sm:px-12 lg:px-16 lg:py-20">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.23em] text-[#dcc59e]">{t("pellets.eyebrow")}</p>
          <h2 id="pellet-feature-title" className="max-w-xl text-4xl font-semibold leading-[1.08] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
            {t("pellets.title")}
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-[#c5cec2]">{t("pellets.intro")}</p>
          <div className="mt-8 flex flex-wrap items-end gap-x-8 gap-y-3">
            <div>
              <p className="text-3xl font-semibold tracking-tight">6,30 €</p>
              <p className="mt-1 text-sm text-[#b9c5b7]">{t("pellets.priceBag")}</p>
            </div>
            <div>
              <p className="text-3xl font-semibold tracking-tight">420 €</p>
              <p className="mt-1 text-sm text-[#b9c5b7]">{t("pellets.priceTon")}</p>
            </div>
          </div>
          <Link to="/pellet" className="mt-9 inline-flex w-fit items-center gap-3 rounded-sm bg-[#d4ba89] px-6 py-3 font-semibold text-[#1e281e] transition hover:bg-[#ead6b1] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            {t("pellets.cta")} <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
        <Link to="/pellet" className="group relative block min-h-[360px] overflow-hidden lg:min-h-[520px]" aria-label={t("pellets.photosTitle")}>
          <img src="/pellet/pellet-granules.webp" alt={t("pellets.gallery.1")} loading="lazy" className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.035]" />
          <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-sm font-medium text-white drop-shadow-lg">
            <span>PELLET / 15 KG</span><span>A1</span>
          </div>
        </Link>
      </div>
    </section>
  );
}
