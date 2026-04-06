import { Flame, Droplets, Diamond, FileCheck, ShieldCheck } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useRef, useEffect } from "react";
import gsap from "gsap";

const AboutProduct = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef(null);
  const contentLeftRef = useRef(null);
  const contentRightRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      // Header animation - fade in from top
      if (headerRef.current) {
        gsap.fromTo(headerRef.current,
          { opacity: 0, y: isMobile ? -20 : -30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headerRef.current,
              start: isMobile ? 'top 90%' : 'top 80%',
            },
          }
        );
      }

      // Lab cards - stagger with scale
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.lab-card');
        gsap.fromTo(cards,
          { opacity: 0, y: isMobile ? 25 : 40, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'back.out(1.2)',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: isMobile ? 'top 85%' : 'top 75%',
            },
          }
        );
      }

      // Left content - slide from left
      if (contentLeftRef.current) {
        gsap.fromTo(contentLeftRef.current,
          { opacity: 0, x: isMobile ? -30 : -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: contentLeftRef.current,
              start: isMobile ? 'top 85%' : 'top 75%',
            },
          }
        );
      }

      // Right content - slide from right (no rotation on mobile)
      if (contentRightRef.current) {
        gsap.fromTo(contentRightRef.current,
          { opacity: 0, x: isMobile ? 30 : 50, rotateY: isMobile ? 0 : 15 },
          {
            opacity: 1,
            x: 0,
            rotateY: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: contentRightRef.current,
              start: isMobile ? 'top 85%' : 'top 75%',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-stone-900/40 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div ref={headerRef} className="text-center mb-16 opacity-0">
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
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {/* Card 1: Carbon */}
          <div className="lab-card bg-stone-900/50 border border-stone-800 p-6 rounded-2xl hover:border-orange-500/50 transition-colors group">
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
          <div className="lab-card bg-stone-900/50 border border-stone-800 p-6 rounded-2xl hover:border-orange-500/50 transition-colors group">
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
          <div className="lab-card bg-stone-900/50 border border-stone-800 p-6 rounded-2xl hover:border-orange-500/50 transition-colors group">
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
          <div className="lab-card bg-stone-900/50 border border-stone-800 p-6 rounded-2xl hover:border-orange-500/50 transition-colors group">
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
          <div ref={contentLeftRef} className="space-y-6 opacity-0">
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
          <div ref={contentRightRef} className="relative opacity-0">
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
