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
  "/pellet/pellet-granules.webp",
  "/pellet/pellet-warehouse.webp",
  "/pellet/pellet-closeup.webp",
  "/pellet/pellet-wrapped-pallet.webp",
];
const documentUrl = "/pellet/pellet-quality-document.pdf";

function Eyebrow({ children }) {
  return <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-[#cab991]">{children}</p>;
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
    image: "https://vanshare.pl/pellet/pellet-granules.webp",
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
    <article className="bg-[#151915] text-[#f4f1e9]">
      <Seo
        title={t("pellets.seoTitle")}
        description={t("pellets.seoDescription")}
        path="/pellet"
        schema={[productSchema, createOrganizationSchema()]}
      />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="mx-auto grid max-w-7xl lg:min-h-[710px] lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative z-10 flex flex-col justify-center px-5 pb-14 pt-16 sm:px-9 lg:py-20 lg:pr-16">
            <Eyebrow>{t("pellets.eyebrow")}</Eyebrow>
            <h1 className="max-w-[740px] text-[clamp(3.5rem,6.7vw,6.9rem)] font-semibold leading-[0.97] tracking-[-0.065em]">
              {t("pellets.title")}
              <span className="mt-3 block font-normal text-[#c5af84]">{t("pellets.titleAccent")}</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#bcc4b8]">{t("pellets.intro")}</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2">
              <div>
                <span className="block text-4xl font-semibold tracking-tight">6,30 €</span>
                <span className="mt-1 block text-sm text-[#a6b2a5]">{t("pellets.priceBag")}</span>
              </div>
              <div className="h-10 w-px bg-white/20" aria-hidden="true" />
              <div>
                <span className="block text-4xl font-semibold tracking-tight">420 €</span>
                <span className="mt-1 block text-sm text-[#a6b2a5]">{t("pellets.priceTon")}</span>
              </div>
            </div>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#pellet-order" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-[#cfb587] px-6 py-3 text-sm font-semibold text-[#182019] transition hover:bg-[#e4d2af] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#cfb587]">
                {t("pellets.cta")} <ArrowDownRight size={19} aria-hidden="true" />
              </a>
              <a href={documentUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/25 px-5 py-3 text-sm font-semibold transition hover:border-white/60 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                <Download size={17} aria-hidden="true" /> {t("pellets.document")}
              </a>
            </div>
            <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.1em] text-[#b4c0b3]">
              {[0,1,2].map((index) => <li key={index}>{t("pellets.features." + index)}</li>)}
            </ul>
          </div>
          <div className="relative min-h-[460px] overflow-hidden bg-[#393d32] lg:min-h-0">
            <img src={photos[0]} alt={t("pellets.gallery.0")} className="absolute inset-0 h-full w-full object-cover object-center" fetchPriority="high" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#111710]/75 via-transparent to-transparent" />
            <span className="absolute right-6 top-6 rounded-sm border border-white/70 bg-[#1b271b]/35 px-3 py-2 text-sm font-semibold text-white backdrop-blur-sm">A1</span>
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
              <span className="text-xs font-medium uppercase tracking-[0.16em] text-white/90">VAN SHARE / PELLET 15 KG</span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#20281f] px-5 py-20 sm:px-9 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-6 lg:grid-cols-2 lg:items-end">
            <div>
              <Eyebrow>{t("pellets.eyebrowDetails")}</Eyebrow>
              <h2 className="max-w-xl text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">{t("pellets.specTitle")}</h2>
            </div>
            <p className="max-w-lg text-base leading-relaxed text-[#bac3b6] lg:justify-self-end">{t("pellets.specIntro")}</p>
          </div>
          <dl className="grid gap-px overflow-hidden rounded-md border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {Array.isArray(specs) && specs.map((spec) => (
              <div key={spec.label} className="min-h-48 bg-[#20281f] p-7">
                <dt className="text-sm text-[#b5c0b0]">{spec.label}</dt>
                <dd className="mt-7 text-4xl font-semibold tracking-[-0.045em] text-[#e5d0a6]">
                  {spec.value} {spec.unit && <span className="text-xl">{spec.unit}</span>}
                </dd>
                <p className="mt-2 text-xs text-[#b5c0b0]">{spec.note}</p>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-9 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-11 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <Eyebrow>{t("pellets.eyebrowPhotos")}</Eyebrow>
              <h2 className="text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">{t("pellets.photosTitle")}</h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-[#bac3b6]">{t("pellets.photosIntro")}</p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-12">
            {photos.slice(1).map((src,index) => (
              <figure key={src} className={index === 0 ? "col-span-2 overflow-hidden rounded-sm bg-[#2e342d] lg:col-span-5" : "overflow-hidden rounded-sm bg-[#2e342d] lg:col-span-2"}>
                <img loading="lazy" src={src} alt={t("pellets.gallery." + (index+1))} className="aspect-[3/4] h-full w-full object-cover transition-transform duration-700 hover:scale-[1.025]" />
              </figure>
            ))}
            <figure className="col-span-2 hidden overflow-hidden rounded-sm bg-[#2e342d] lg:col-span-1 lg:block">
              <img loading="lazy" src={photos[0]} alt={t("pellets.gallery.0")} className="h-full w-full object-cover" />
            </figure>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#eee9dc] px-5 py-20 text-[#202820] sm:px-9 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-[#746143]">{t("pellets.eyebrowPackaging")}</p>
            <h2 className="text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">{t("pellets.packTitle")}</h2>
            <p className="mt-6 text-base leading-relaxed text-[#555c54]">{t("pellets.packIntro")}</p>
            <p className="mt-8 text-sm leading-relaxed text-[#555c54]">{t("pellets.note")}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex min-h-64 flex-col justify-between rounded-md border border-[#d4cdbf] bg-white/60 p-7">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#686e61]">01 / 15 KG</p>
                <h3 className="mt-5 text-xl font-semibold">{t("pellets.bagTitle")}</h3>
              </div>
              <div>
                <p className="text-5xl font-semibold tracking-tight">6,30 €</p>
                <p className="mt-2 text-sm text-[#5a6258]">{t("pellets.perBag")}</p>
              </div>
            </div>
            <div className="flex min-h-64 flex-col justify-between rounded-md bg-[#293629] p-7 text-white">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#cfbd97]">02 / 975 KG</p>
                <h3 className="mt-5 text-xl font-semibold">{t("pellets.palletTitle")}</h3>
                <p className="mt-2 text-sm text-[#c8d2c4]">{t("pellets.palletUnit")}</p>
              </div>
              <div>
                <p className="text-5xl font-semibold tracking-tight">409,50 €</p>
                <p className="mt-2 text-sm text-[#c8d2c4]">{t("pellets.perPallet")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-9 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>{t("pellets.eyebrowQuality")}</Eyebrow>
            <h2 className="max-w-xl text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">{t("pellets.qualityTitle")}</h2>
            <p className="mt-6 max-w-xl leading-relaxed text-[#b7c2b5]">{t("pellets.qualityText")}</p>
          </div>
          <a href={documentUrl} target="_blank" rel="noopener noreferrer" className="group flex min-h-48 items-center justify-between gap-4 rounded-md border border-[#546354] bg-[#202820] p-7 transition hover:border-[#b5ac87] sm:p-9">
            <div className="flex items-start gap-5">
              <FileText size={35} strokeWidth={1.3} className="shrink-0 text-[#c4b28b]" aria-hidden="true" />
              <div>
                <span className="block text-xl font-semibold">{t("pellets.qualityLink")}</span>
                <span className="mt-3 block text-sm text-[#b6c0b3]">{t("pellets.qualityMeta")}</span>
              </div>
            </div>
            <ArrowUpRight className="shrink-0 text-[#c4b28b] transition group-hover:-translate-y-1 group-hover:translate-x-1" size={24} aria-hidden="true" />
          </a>
        </div>
      </section>

      <section id="pellet-order" className="scroll-mt-24 border-t border-white/10 bg-[#1f281f] px-5 py-20 sm:px-9 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <Eyebrow>{t("pellets.eyebrowOrder")}</Eyebrow>
            <h2 className="max-w-xl text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">{t("pellets.orderTitle")}</h2>
            <p className="mt-6 max-w-md leading-relaxed text-[#b7c2b5]">{t("pellets.orderLead")}</p>
            <p className="mt-10 text-sm text-[#b7c2b5]">{t("pellets.contact")}</p>
            <a href="tel:+48731431849" className="mt-3 inline-flex items-center gap-3 text-xl font-semibold text-[#e8d4ab] transition hover:text-white"><Phone size={20} aria-hidden="true" /> +48 731 431 849</a>
          </div>
          {pelletOrdersReady ? (
            <OrderForm productType="pellet" />
          ) : (
            <div role="status" className="rounded-md border border-[#647464]/45 bg-[#172017] p-7 sm:p-10">
              <h3 className="text-2xl font-semibold text-[#e5d0a6]">
                {t(pelletOrdersReady === null ? "pellets.checkingBackend" : "pellets.orderUnavailable")}
              </h3>
              <p className="mt-4 leading-relaxed text-[#b7c2b5]">{t("pellets.contactAlternative")}</p>
              <a
                href="mailto:vanshare1@gmail.com?subject=Pellet%20-%20zapytanie"
                className="mt-6 inline-flex items-center gap-2 text-[#e8d4ab] underline underline-offset-4 hover:text-white"
              >
                vanshare1@gmail.com <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
          )}
        </div>
      </section>
      <div className="border-t border-white/10 px-5 py-6 text-sm text-[#aab6a7]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <span>VAN SHARE Sp. z o.o.</span>
          <Link to="/" className="inline-flex items-center gap-2 transition hover:text-white">VAN SHARE <ArrowUpRight size={16} aria-hidden="true" /></Link>
        </div>
      </div>
    </article>
  );
}
