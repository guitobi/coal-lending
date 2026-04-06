import { FlaskConical, Handshake, Tag } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useRef, useEffect } from "react";
import gsap from "gsap";

function AditionalSevices() {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      // Title animation
      if (titleRef.current) {
        gsap.fromTo(titleRef.current,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: 'back.out(1.2)',
            scrollTrigger: {
              trigger: titleRef.current,
              start: isMobile ? 'top 90%' : 'top 80%',
            },
          }
        );
      }

      // Cards with stagger and rotation
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.service-card');
        gsap.fromTo(cards,
          { opacity: 0, y: isMobile ? 30 : 50, rotateX: isMobile ? 0 : -20 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: isMobile ? 'top 85%' : 'top 75%',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="max-w-7xl mx-auto px-4 py-16">
      <h2 ref={titleRef} className="text-4xl font-bold text-center mb-12 text-orange-500 opacity-0">
        {t("delivery.additional.title")}
      </h2>
      <div ref={cardsRef} className="grid md:grid-cols-3 gap-8">
        <div className="service-card group bg-stone-900/40 p-6 rounded-xl border border-stone-800 backdrop-blur-sm transition-all duration-300 hover:bg-stone-900/80 hover:border-orange-500/50 hover:-translate-y-1 hover:shadow-lg text-center">
          <div className="mb-4">
            <Tag
              className="w-10 h-10 mx-auto mb-4 text-stone-500 group-hover:text-orange-500 transition-colors duration-300"
              strokeWidth={2}
            />
          </div>
          <h3 className="text-xl font-bold mb-3 text-stone-200 group-hover:text-white transition-colors">
            {t("delivery.additional.firstPoint.title")}
          </h3>
          <p className="text-stone-300 text-sm">
            {t("delivery.additional.firstPoint.description")}
          </p>
        </div>
        <div className="service-card group bg-stone-900/40 p-6 rounded-xl border border-stone-800 backdrop-blur-sm transition-all duration-300 hover:bg-stone-900/80 hover:border-orange-500/50 hover:-translate-y-1 hover:shadow-lg text-center">
          <div className="mb-4">
            <FlaskConical
              className="w-10 h-10 mx-auto mb-4 text-stone-500 group-hover:text-orange-500 transition-colors duration-300"
              strokeWidth={2}
            />
          </div>
          <h3 className="text-xl font-bold mb-3 text-stone-200 group-hover:text-white transition-colors">
            {t("delivery.additional.secondPoint.title")}
          </h3>
          <p className="text-stone-300 text-sm">
            {t("delivery.additional.secondPoint.description")}
          </p>
        </div>
        <div className="service-card group bg-stone-900/40 p-6 rounded-xl border border-stone-800 backdrop-blur-sm transition-all duration-300 hover:bg-stone-900/80 hover:border-orange-500/50 hover:-translate-y-1 hover:shadow-lg text-center">
          <div className="mb-4">
            <Handshake
              className="w-10 h-10 mx-auto mb-4 text-stone-500 group-hover:text-orange-500 transition-colors duration-300"
              strokeWidth={2}
            />
          </div>
          <h3 className="text-xl font-bold mb-3 text-stone-200 group-hover:text-white transition-colors">
            {t("delivery.additional.thirdPoint.title")}
          </h3>
          <p className="text-stone-300 text-sm">
            {t("delivery.additional.thirdPoint.description")}
          </p>
        </div>
      </div>
    </section>
  );
}

export default AditionalSevices;
