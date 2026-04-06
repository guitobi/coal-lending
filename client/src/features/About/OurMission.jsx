import { Earth, Users, Lightbulb } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useRef, useEffect } from "react";
import gsap from "gsap";

function OurMission() {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      // Title animation with split effect
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

      // Cards with icon rotation
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.mission-card');
        const icons = cardsRef.current.querySelectorAll('.mission-icon');

        gsap.fromTo(cards,
          { opacity: 0, y: isMobile ? 35 : 60, rotateX: isMobile ? 0 : -20 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: isMobile ? 'top 85%' : 'top 75%',
            },
          }
        );

        // Animate icons separately with rotation (reduced on mobile)
        gsap.fromTo(icons,
          { opacity: 0, rotation: isMobile ? -90 : -180, scale: 0 },
          {
            opacity: 1,
            rotation: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'back.out(1.7)',
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
        {t("about.ourMission.title")}
      </h2>
      <div ref={cardsRef} className="grid md:grid-cols-3 gap-8">
        <div className="mission-card group bg-stone-900/40 rounded-lg p-6 border border-stone-800 backdrop-blur-sm transition-all duration-300 hover:bg-stone-900/80 hover:border-orange-500/50 hover:-translate-y-1 hover:shadow-lg">
          <div className="mb-4">
            <Earth className="mission-icon w-10 h-10 mb-4 text-stone-500 group-hover:text-orange-500 transition-colors duration-300" />
          </div>
          <h3 className="text-xl font-semibold mb-3 text-amber-600 group-hover:text-white transition-colors">
            {t("about.ourMission.firstCard.title")}
          </h3>
          <p className="text-stone-300">
            {t("about.ourMission.firstCard.description")}
          </p>
        </div>
        <div className="mission-card group bg-stone-900/40 rounded-lg p-6 border border-stone-800 backdrop-blur-sm transition-all duration-300 hover:bg-stone-900/80 hover:border-orange-500/50 hover:-translate-y-1 hover:shadow-lg">
          <div className="mb-4">
            <Users className="mission-icon w-10 h-10 mb-4 text-stone-500 group-hover:text-orange-500 transition-colors duration-300" />
          </div>
          <h3 className="text-xl font-semibold mb-3 text-amber-600 group-hover:text-white transition-colors">
            {t("about.ourMission.secondCard.title")}
          </h3>
          <p className="text-stone-300">
            {t("about.ourMission.secondCard.description")}
          </p>
        </div>
        <div className="mission-card group bg-stone-900/40 rounded-lg p-6 border border-stone-800 backdrop-blur-sm transition-all duration-300 hover:bg-stone-900/80 hover:border-orange-500/50 hover:-translate-y-1 hover:shadow-lg">
          <div className="mb-4">
            <Lightbulb className="mission-icon w-10 h-10 mb-4 text-stone-500 group-hover:text-orange-500 transition-colors duration-300" />
          </div>
          <h3 className="text-xl font-semibold mb-3 text-amber-600 group-hover:text-white transition-colors">
            {t("about.ourMission.thirdCard.title")}
          </h3>
          <p className="text-stone-300">
            {t("about.ourMission.thirdCard.description")}
          </p>
        </div>
      </div>
    </section>
  );
}

export default OurMission;
