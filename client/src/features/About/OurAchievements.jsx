import { useTranslation } from "react-i18next";
import { useRef, useEffect } from "react";
import gsap from "gsap";

function OurAchievements() {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const isMobile = window.innerWidth < 768;

    let titleAnim, cardsAnim;

    // Title animation
    if (titleRef.current) {
      titleAnim = gsap.fromTo(titleRef.current,
        { opacity: 0, y: isMobile ? 20 : 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: isMobile ? 'top 90%' : 'top 80%',
          },
        }
      );
    }

    // Cards with counter animation
    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll('.achievement-card');

      cardsAnim = gsap.fromTo(cards,
        { opacity: 0, scale: 0.8, rotateY: isMobile ? 0 : -15 },
        {
          opacity: 1,
          scale: 1,
          rotateY: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: 'back.out(1.4)',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: isMobile ? 'top 85%' : 'top 75%',
          },
        }
      );

      // Animate numbers only if they are numeric
      const numbers = cardsRef.current.querySelectorAll('.achievement-number');
      numbers.forEach((num) => {
        const text = num.textContent.trim();

        // Skip if already animated
        if (num.hasAttribute('data-animated')) return;

        const hasPlus = text.includes('+');
        const hasPercent = text.includes('%');
        const numericValue = parseInt(text.replace(/\D/g, ''));

        // Only animate if it's a valid number and starts with a digit
        if (!isNaN(numericValue) && numericValue > 0 && /^\d/.test(text)) {
          num.setAttribute('data-animated', 'true');
          const obj = { val: 0 };
          gsap.to(obj, {
            val: numericValue,
            duration: isMobile ? 1.5 : 2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: num,
              start: isMobile ? 'top 90%' : 'top 80%',
              once: true,
            },
            onUpdate: () => {
              let displayText = Math.round(obj.val).toString();
              if (hasPlus) displayText += '+';
              if (hasPercent) displayText += '%';
              num.textContent = displayText;
            },
          });
        }
      });
    }

    return () => {
      // Clean up only the main animations, not the counter text
      if (titleAnim) titleAnim.kill();
      if (cardsAnim) cardsAnim.kill();
    };
  }, [t]);

  return (
    <section ref={sectionRef} className="bg-stone-900/50 border border-stone-950 rounded-3xl py-16 ">
      <div className="max-w-7xl mx-auto px-4 ">
        <h2 ref={titleRef} className="text-3xl font-bold text-center mb-12 text-stone-100 opacity-0">
          {t("about.achievements.title")}
        </h2>
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8 text-center">
          <div className="achievement-card bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8 hover:outline hover:outline-amber-600 duration-300 min-h-40 flex flex-col justify-center items-center gap-2">
            <div className="achievement-number text-5xl md:text-6xl font-bold text-orange-400 leading-none">
              {t("about.achievements.firstCard.title")}
            </div>
            <p className="text-base md:text-xl text-stone-200">
              {t("about.achievements.firstCard.description")}
            </p>
          </div>
          <div className="achievement-card bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8 hover:outline hover:outline-amber-600 duration-300 min-h-40 flex flex-col justify-center items-center gap-2">
            <div className="achievement-number text-5xl md:text-6xl font-bold text-orange-400 leading-none">
              {t("about.achievements.secondCard.title")}
            </div>
            <p className="text-base md:text-xl text-stone-200">
              {t("about.achievements.secondCard.description")}
            </p>
          </div>
          <div className="achievement-card bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8 hover:outline hover:outline-amber-600 duration-300 min-h-40 flex flex-col justify-center items-center gap-2">
            <div className="md:hidden lg:block text-5xl lg:text-6xl font-bold text-orange-400 leading-none">
              EN 1860-2
            </div>

            <div className="hidden md:flex lg:hidden flex-col items-center">
              <div className="text-5xl font-bold text-orange-400 mb-0">EN</div>
              <div className="text-3xl font-bold text-orange-400">1860-2</div>
            </div>
            <p className="text-base md:text-xl text-stone-200">
              {t("about.achievements.thirdCard.description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurAchievements;
