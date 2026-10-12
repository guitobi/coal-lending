import { ArrowDownRight, ArrowUpRight, Download, FileText, Phone } from "lucide-react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Seo from "../seo/Seo";
import OrderForm from "../features/Order/OrderForm";
import { createOrganizationSchema } from "../utils/structuredDataSchemas";
import { buildApiUrl } from "../utils/api";

const photos = [
  "/pellet/pellet-pallets.webp",
  "/pellet/pellet-warehouse.webp",
  "/pellet/pellet-closeup.webp",
  "/pellet/pellet-wrapped-pallet.webp",
];
const documentUrl = "/pellet/pellet-quality-document.pdf";

function Eyebrow({ children }) {
  return <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">{children}</p>;
}

export default function Pellets() {
  const { t } = useTranslation();
  const [pelletOrdersReady, setPelletOrdersReady] = useState(null);

  useEffect(() => {
    let active = true;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    fetch(buildApiUrl("/api/capabilities"), { signal: controller.signal, cache: "no-store" })
      .then((response) => {
        if (!response.ok) throw new Error("Pellet order capability unavailable");
        return response.json();
      })
      .then((capabilities) => (
        capabilities.pelletOrderVersion >= 1 &&
        Array.isArray(capabilities.products) &&
        capabilities.products.includes("pellet")
      ))
      .catch(() => false)
      .then((enabled) => { if (active) setPelletOrdersReady(enabled); })
      .finally(() => clearTimeout(timeout));
    return () => {
      active = false;
      controller.abort();
      clearTimeout(timeout);
    };
  }, []);

  const specs = t("pellets.spec", { returnObjects: true });
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: t("pellets.title"),
    description: t("pellets.seoDescription"),
    image: "https://vanshare.pl/pellet/pellet-pallets.webp",
    category: "Pine wood pellets",
    brand: { "@type": "Brand", name: "VAN SHARE" },
    offers: {
      "@type": "Offer",
      url: "https://vanshare.pl/pellet#pellet-order",
      priceCurrency: "EUR",
      price: "6.30",
      description: "15 kg bag; shipping quoted separately",
      seller: { "@type": "Organization", name: "VAN SHARE Sp. z o.o." },
    },
  };

  return (
    <article className="relative text-stone-200">
      <Seo
        title={t("pellets.seoTitle")}
        description={t("pellets.seoDescription")}
        path="/pellet"
        schema={[productSchema, createOrganizationSchema()]}
      />

      <section className="relative mx-auto max-w-7xl px-4 pb-14 pt-8 sm:px-6 sm:pb-20 sm:pt-12 lg:px-8">
        <div className="grid overflow-hidden rounded-2xl border border-stone-700/80 bg-stone-900/80 shadow-xl shadow-black/20 lg:min-h-[610px] lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative z-10 flex min-w-0 flex-col justify-center px-5 py-10 sm:px-9 sm:py-14 lg:py-16 lg:pr-12">
            <Eyebrow>{t("pellets.eyebrow")}</Eyebrow>
            <h1 className="max-w-[740px] font-space-grotesk text-[clamp(2.35rem,6vw,4.5rem)] font-bold leading-[1.08] tracking-tight text-stone-100">
              {t("pellets.title")}
              <span className="mt-2 block font-semibold text-orange-400">{t("pellets.titleAccent")}</span>
            </h1>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-stone-300 sm:text-base">{t("pellets.intro")}</p>
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4">
              <div>
                <span className="block font-space-grotesk text-3xl font-bold tracking-tight text-stone-100 sm:text-4xl">6,30 €</span>
                <span className="mt-1 block text-sm text-stone-400">{t("pellets.priceBag")}</span>
              </div>
              <div className="h-10 w-px bg-stone-700" aria-hidden="true" />
              <div>
                <span className="block font-space-grotesk text-3xl font-bold tracking-tight text-stone-100 sm:text-4xl">420 €</span>
                <span className="mt-1 block text-sm text-stone-400">{t("pellets.priceTon")}</span>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#pellet-order" className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full border-2 border-orange-500 bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:border-orange-600 hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400 min-[420px]:w-auto">
                {t("pellets.cta")} <ArrowDownRight size={19} aria-hidden="true" />
              </a>
              <a href={documentUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-stone-600 bg-stone-950/30 px-5 py-3 text-sm font-semibold text-stone-200 transition hover:border-orange-500 hover:text-orange-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400 min-[420px]:w-auto">
                <Download size={17} aria-hidden="true" /> {t("pellets.document")}
              </a>
            </div>
            <ul className="mt-9 flex flex-wrap gap-x-5 gap-y-3 border-t border-stone-700 pt-5 text-xs font-medium uppercase tracking-wide text-stone-400">
              {[0,1,2].map((index) => <li key={index}>{t("pellets.features." + index)}</li>)}
            </ul>
          </div>
          <div className="relative min-h-[280px] overflow-hidden bg-stone-800 sm:min-h-[360px] lg:min-h-0">
            <img src={photos[0]} alt={t("pellets.gallery.0")} className="absolute inset-0 h-full w-full object-cover object-center" fetchPriority="high" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
            <span className="absolute right-5 top-5 rounded-full border border-orange-400/70 bg-stone-950/75 px-3 py-1.5 text-xs font-semibold text-orange-300 backdrop-blur-sm">A1</span>
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
              <span className="text-xs font-medium uppercase tracking-[0.16em] text-white/90">VAN SHARE / PELLET 15 KG</span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-stone-800 bg-stone-900/40 px-4 py-14 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-6 lg:grid-cols-2 lg:items-end">
            <div>
              <Eyebrow>{t("pellets.eyebrowDetails")}</Eyebrow>
              <h2 className="max-w-xl font-space-grotesk text-3xl font-bold tracking-tight text-stone-100 sm:text-4xl lg:text-5xl">{t("pellets.specTitle")}</h2>
            </div>
            <p className="max-w-lg text-sm leading-relaxed text-stone-400 sm:text-base lg:justify-self-end">{t("pellets.specIntro")}</p>
          </div>
          <dl className="grid gap-px overflow-hidden rounded-2xl border border-stone-700/80 bg-stone-700/80 sm:grid-cols-2 lg:grid-cols-4">
            {Array.isArray(specs) && specs.map((spec) => (
              <div key={spec.label} className="min-h-40 bg-stone-900/95 p-6 sm:min-h-44 sm:p-7">
                <dt className="text-sm text-stone-400">{spec.label}</dt>
                <dd className="mt-5 font-space-grotesk text-3xl font-bold tracking-tight text-orange-400 sm:text-4xl">
                  {spec.value} {spec.unit && <span className="text-xl">{spec.unit}</span>}
                </dd>
                <p className="mt-2 text-xs text-stone-400">{spec.note}</p>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-11 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <Eyebrow>{t("pellets.eyebrowPhotos")}</Eyebrow>
              <h2 className="font-space-grotesk text-3xl font-bold tracking-tight text-stone-100 sm:text-4xl lg:text-5xl">{t("pellets.photosTitle")}</h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-stone-400">{t("pellets.photosIntro")}</p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-12">
            {photos.slice(1).map((src,index) => (
              <figure key={src} className={index === 0 ? "col-span-2 overflow-hidden rounded-xl border border-stone-700/70 bg-stone-900 lg:col-span-6" : "col-span-1 overflow-hidden rounded-xl border border-stone-700/70 bg-stone-900 lg:col-span-3"}>
                <img loading="lazy" src={src} alt={t("pellets.gallery." + (index+2))} className="h-56 w-full object-cover sm:h-80 lg:h-[390px]" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-stone-800 bg-stone-900/50 px-4 py-14 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">{t("pellets.eyebrowPackaging")}</p>
            <h2 className="font-space-grotesk text-3xl font-bold tracking-tight text-stone-100 sm:text-4xl lg:text-5xl">{t("pellets.packTitle")}</h2>
            <p className="mt-6 text-base leading-relaxed text-stone-400">{t("pellets.packIntro")}</p>
            <p className="mt-8 text-sm leading-relaxed text-stone-400">{t("pellets.note")}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex min-h-56 min-w-0 flex-col justify-between rounded-2xl border border-stone-700 bg-stone-950/40 p-5 sm:p-7">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-400">01 / 15 KG</p>
                <h3 className="mt-5 text-xl font-semibold">{t("pellets.bagTitle")}</h3>
              </div>
              <div>
                <p className="font-space-grotesk text-3xl font-bold tracking-tight text-stone-100 sm:text-4xl xl:text-5xl">6,30 €</p>
                <p className="mt-2 text-sm text-stone-400">{t("pellets.perBag")}</p>
              </div>
            </div>
            <div className="flex min-h-56 min-w-0 flex-col justify-between rounded-2xl border border-orange-500/40 bg-stone-900/85 p-5 text-white sm:p-7">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-orange-400">02 / 975 KG</p>
                <h3 className="mt-5 text-xl font-semibold">{t("pellets.palletTitle")}</h3>
                <p className="mt-2 text-sm text-stone-400">{t("pellets.palletUnit")}</p>
              </div>
              <div>
                <p className="font-space-grotesk text-3xl font-bold tracking-tight text-stone-100 sm:text-4xl xl:text-5xl">409,50 €</p>
                <p className="mt-2 text-sm text-stone-400">{t("pellets.perPallet")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>{t("pellets.eyebrowQuality")}</Eyebrow>
            <h2 className="max-w-xl font-space-grotesk text-3xl font-bold tracking-tight text-stone-100 sm:text-4xl lg:text-5xl">{t("pellets.qualityTitle")}</h2>
            <p className="mt-6 max-w-xl leading-relaxed text-stone-400">{t("pellets.qualityText")}</p>
          </div>
          <a href={documentUrl} target="_blank" rel="noopener noreferrer" className="group flex min-h-40 min-w-0 items-center justify-between gap-4 rounded-2xl border border-stone-700 bg-stone-900/80 p-5 transition hover:border-orange-500 sm:p-8">
            <div className="flex items-start gap-5">
              <FileText size={35} strokeWidth={1.3} className="shrink-0 text-orange-400" aria-hidden="true" />
              <div>
                <span className="block text-xl font-semibold">{t("pellets.qualityLink")}</span>
                <span className="mt-3 block text-sm text-stone-400">{t("pellets.qualityMeta")}</span>
              </div>
            </div>
            <ArrowUpRight className="shrink-0 text-orange-400 transition group-hover:-translate-y-1 group-hover:translate-x-1" size={24} aria-hidden="true" />
          </a>
        </div>
      </section>

      <section id="pellet-order" className="scroll-mt-24 border-t border-stone-800 bg-stone-900/45 px-4 py-14 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <Eyebrow>{t("pellets.eyebrowOrder")}</Eyebrow>
            <h2 className="max-w-xl font-space-grotesk text-3xl font-bold tracking-tight text-stone-100 sm:text-4xl lg:text-5xl">{t("pellets.orderTitle")}</h2>
            <p className="mt-6 max-w-md leading-relaxed text-stone-400">{t("pellets.orderLead")}</p>
            <p className="mt-10 text-sm text-stone-400">{t("pellets.contact")}</p>
            <a href="tel:+48731431849" className="mt-3 inline-flex flex-wrap items-center gap-3 text-lg font-semibold text-orange-400 transition hover:text-orange-300 sm:text-xl"><Phone size={20} aria-hidden="true" /> +48 731 431 849</a>
          </div>
          {pelletOrdersReady ? (
            <OrderForm productType="pellet" />
          ) : (
            <div role="status" className="min-w-0 rounded-2xl border border-stone-700 bg-stone-900/85 p-6 sm:p-10">
              <h3 className="text-2xl font-semibold text-orange-400">
                {t(pelletOrdersReady === null ? "pellets.checkingBackend" : "pellets.orderUnavailable")}
              </h3>
              <p className="mt-4 leading-relaxed text-stone-400">{t("pellets.contactAlternative")}</p>
              <a
                href="mailto:vanshare1@gmail.com?subject=Pellet%20-%20zapytanie"
                className="mt-6 inline-flex max-w-full flex-wrap items-center gap-2 break-all text-orange-400 underline underline-offset-4 hover:text-orange-300"
              >
                vanshare1@gmail.com <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
          )}
        </div>
      </section>
      <div className="border-t border-stone-800 px-4 py-6 text-sm text-stone-400 sm:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <span>VAN SHARE Sp. z o.o.</span>
          <Link to="/" className="inline-flex items-center gap-2 transition hover:text-white">VAN SHARE <ArrowUpRight size={16} aria-hidden="true" /></Link>
        </div>
      </div>
    </article>
  );
}
