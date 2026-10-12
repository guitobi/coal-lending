import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

const products = [
  { id: "charcoal", href: "/order", image: "/coal_in_bag.webp", price: "950 €" },
  { id: "pellet", href: "/pellet", image: "/pellet/pellet-granules.webp", price: "420 €" },
];

export default function ProductCategories() {
  const { t } = useTranslation();

  return (
    <section id="products" aria-labelledby="products-title" className="relative mx-auto max-w-7xl scroll-mt-24 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mb-7 max-w-2xl sm:mb-10">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">{t("products.eyebrow")}</p>
        <h2 id="products-title" className="font-space-grotesk text-3xl font-bold tracking-tight text-stone-100 sm:text-4xl lg:text-5xl">{t("products.title")}</h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-stone-400 sm:text-base">{t("products.description")}</p>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
        {products.map((product) => (
          <article key={product.id} className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-stone-700/80 bg-stone-900/75 shadow-xl shadow-black/20 transition-colors duration-300 hover:border-orange-500/65">
            <Link to={product.href} aria-label={t(`products.${product.id}.view`)} className={`relative block aspect-[16/10] overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-orange-400 sm:aspect-[16/9] ${product.id === "charcoal" ? "bg-[#e8e4dd]" : "bg-stone-800"}`}>
              <img src={product.image} alt={t(`products.${product.id}.imageAlt`)} loading="lazy" decoding="async" className={`h-full w-full transition-transform duration-500 motion-safe:group-hover:scale-[1.03] ${product.id === "charcoal" ? "object-contain mix-blend-multiply" : "object-cover"}`} />
              <div aria-hidden="true" className={`pointer-events-none absolute inset-0 bg-gradient-to-t via-transparent to-transparent ${product.id === "charcoal" ? "from-stone-950/35" : "from-stone-950/65"}`} />
              <span className="absolute bottom-4 left-4 rounded-full border border-white/25 bg-stone-950/75 px-3 py-1.5 text-xs font-medium text-stone-100 backdrop-blur-sm sm:bottom-5 sm:left-5">{t(`products.${product.id}.tag`)}</span>
            </Link>
            <div className="flex flex-1 flex-col gap-5 p-5 sm:p-7">
              <div>
                <h3 className="font-space-grotesk text-2xl font-bold tracking-tight text-stone-100 sm:text-3xl">{t(`products.${product.id}.title`)}</h3>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-stone-400 sm:text-base">{t(`products.${product.id}.description`)}</p>
              </div>
              <div className="mt-auto flex flex-col items-start justify-between gap-4 border-t border-stone-700/70 pt-5 min-[480px]:flex-row min-[480px]:items-end">
                <div>
                  <p className="mb-1 text-xs text-stone-400">{t("products.startingAt")}</p>
                  <p className="font-space-grotesk text-3xl font-bold tracking-tight text-stone-100">{product.price}<span className="ml-1.5 text-sm font-normal text-stone-400">/ {t("products.perTon")}</span></p>
                  {product.id === "pellet" && <p className="mt-1 text-xs text-stone-400">{t("products.pellet.bagPrice")}</p>}
                </div>
                <Link to={product.href} className="inline-flex min-h-11 w-full shrink-0 items-center justify-center gap-2 rounded-full border-2 border-orange-500 bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-orange-600 hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400 min-[480px]:w-auto">
                  {t(`products.${product.id}.view`)} <ArrowUpRight size={18} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
