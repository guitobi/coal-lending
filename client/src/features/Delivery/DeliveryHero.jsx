import { CheckCircle, Package, TreeDeciduous } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useRef, useEffect } from "react";
import gsap from "gsap";

function DeliveryHero() {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const featuresRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Title animation
      if (titleRef.current) {
        tl.fromTo(titleRef.current,
          { opacity: 0, y: isMobile ? -25 : -40, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8 },
          0
        );
      }

      // Description
      if (descRef.current) {
        tl.fromTo(descRef.current,
          { opacity: 0, y: isMobile ? 15 : 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          0.2
        );
      }

      // Feature badges with stagger
      if (featuresRef.current) {
        const badges = featuresRef.current.querySelectorAll('.feature-badge');
        tl.fromTo(badges,
          { opacity: 0, scale: isMobile ? 0.9 : 0.8, y: isMobile ? 20 : 30 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'back.out(1.4)',
          },
          0.4
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-stone-950/50 border border-black text-stone-100 py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 ref={titleRef} className="text-5xl font-bold mb-6 text-stone-100 opacity-0">
          {t("delivery.title")}
        </h1>
        <p ref={descRef} className="text-xl mb-8 max-w-3xl mx-auto px-4 text-stone-300 opacity-0">
          {t("delivery.description")}
        </p>
        <div ref={featuresRef} className="flex flex-wrap justify-center gap-4">
          <div className="feature-badge bg-stone-900/40 rounded-lg px-6 py-3 flex items-center gap-3">
            <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center">
              <Package className="w-6 h-6 text-orange-500" strokeWidth={2} />
            </div>
            <span className="font-semibold text-stone-300 ">
              {t("delivery.features.firstFeature.description")}
            </span>
          </div>
          <div className="feature-badge bg-stone-900/40 rounded-lg px-6 py-3 flex items-center gap-3">
            <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center">
              <CheckCircle
                className="w-6 h-6 text-orange-500"
                strokeWidth={2}
              />
            </div>
            <span className="font-semibold text-stone-300">
              {t("delivery.features.secondFeature.description")}
            </span>
          </div>
          <div className="feature-badge bg-stone-900/40 rounded-lg px-6 py-3 flex items-center gap-3">
            <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center">
              <TreeDeciduous
                className="w-6 h-6 text-orange-500"
                strokeWidth={2}
              />
            </div>
            <span className="font-semibold text-stone-300">
              {t("delivery.features.thirdFeature.description")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DeliveryHero;
