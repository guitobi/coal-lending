import { useTranslation } from "react-i18next";
import Seo from "../seo/Seo";
import ComparisonTable from "../components/ComparisonTable";
import { useRef, useEffect } from "react";
import gsap from "gsap";

function Comparison() {
  const { t } = useTranslation();

  const headerRef = useRef(null);
  const tableRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Header
      if (headerRef.current) {
        tl.fromTo(headerRef.current,
          { opacity: 0, y: -30 },
          { opacity: 1, y: 0, duration: 0.8 },
          0
        );
      }

      // Table with scale
      if (tableRef.current) {
        tl.fromTo(tableRef.current,
          { opacity: 0, scale: 0.95, y: 30 },
          { opacity: 1, scale: 1, y: 0, duration: 0.8 },
          0.2
        );
      }

      // Info text
      if (infoRef.current) {
        tl.fromTo(infoRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          0.4
        );
      }
    });

    return () => ctx.revert();
  }, []);

  // Sample data for comparison table
  const headers = [
    t("comparison.headers.quality", "Jakość"),
    t("comparison.headers.burnTime", "Czas spalania"),
    t("comparison.headers.ashContent", "Zawartość popiołu"),
    t("comparison.headers.price", "Cena"),
    t("comparison.headers.certified", "Certyfikowany"),
  ];

  const rows = [
    {
      name: t("comparison.products.woodenWest", "WOODEN WEST Premium"),
      values: [
        t("comparison.qualities.high", "Wysoka"),
        t("comparison.burnTimes.long", "Długi (>3h)"),
        t("comparison.ashContents.low", "<2%"),
        t("comparison.prices.medium", "Średnia"),
        true,
      ],
    },
    {
      name: t("comparison.products.brandA", "Marka A"),
      values: [
        t("comparison.qualities.medium", "Średnia"),
        t("comparison.burnTimes.medium", "~2h"),
        t("comparison.ashContents.medium", "~5%"),
        t("comparison.prices.low", "Niska"),
        false,
      ],
    },
    {
      name: t("comparison.products.brandB", "Marka B"),
      values: [
        t("comparison.qualities.high", "Wysoka"),
        t("comparison.burnTimes.short", "~1.5h"),
        t("comparison.ashContents.high", ">8%"),
        t("comparison.prices.high", "Wysoka"),
        true,
      ],
    },
    {
      name: t("comparison.products.coconut", "Kokosowe"),
      values: [
        t("comparison.qualities.veryHigh", "Bardzo wysoka"),
        t("comparison.burnTimes.veryLong", ">5h"),
        t("comparison.ashContents.veryLow", "<1%"),
        t("comparison.prices.high", "Wysoka"),
        true,
      ],
    },
  ];

  return (
    <div className="min-h-screen py-12 sm:py-16 px-4">
      <Seo
        title={t(
          "seoPages.comparison.title",
          "Porównanie węgla drzewnego | VAN SHARE",
        )}
        description={t(
          "seoPages.comparison.description",
          "Porównaj różne rodzaje węgla drzewnego pod kątem jakości, czasu spalania, zawartości popiołu i ceny. VAN SHARE - oficjalny dystrybutor WOODEN WEST w Polsce.",
        )}
        path="/comparison"
      />

      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className="text-center mb-12 opacity-0">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-500 mb-4">
            {t("comparison.pageTitle", "Porównanie produktów")}
          </h1>
          <p className="text-stone-400 text-base sm:text-lg max-w-2xl mx-auto">
            {t(
              "comparison.pageSubtitle",
              "Porównaj nasze produkty i wybierz najlepszą opcję dla swoich potrzeb",
            )}
          </p>
        </div>

        <div ref={tableRef} className="opacity-0">
          <ComparisonTable headers={headers} rows={rows} />
        </div>

        <div ref={infoRef} className="mt-12 text-center opacity-0">
          <p className="text-stone-400 text-sm sm:text-base max-w-3xl mx-auto">
            {t(
              "comparison.info",
              "Wszystkie nasze produkty spełniają normy europejskie EN 1860-2 i są testowane pod kątem jakości, bezpieczeństwa i skuteczności. Dostarczamy tylko najlepsze węgle drzewne premium do grillowania i ogrzewania.",
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Comparison;
