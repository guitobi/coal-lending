import { Package } from "lucide-react";
import { Link } from "react-router";
import Button from "../../ui/Button";
import { useTranslation } from "react-i18next";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

function ProductPackages() {
  const { t } = useTranslation();
  const packagesContainerRef = useRef(null);
  const middlePackageRef = useRef(null);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const container = packagesContainerRef.current;
    const middleCard = middlePackageRef.current;

    if (!container || !middleCard) return;
    if (window.innerWidth >= 768) return;

    const containerCenter = container.clientWidth / 2;
    const cardCenter = middleCard.offsetLeft + middleCard.clientWidth / 2;
    const targetScrollLeft = cardCenter - containerCenter;

    container.scrollTo({
      left: Math.max(0, targetScrollLeft),
      behavior: "auto",
    });
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      // Title fade
      if (titleRef.current) {
        gsap.fromTo(titleRef.current,
          { opacity: 0, y: isMobile ? 20 : 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: titleRef.current,
              start: isMobile ? 'top 92%' : 'top 85%',
            },
          }
        );
      }

      // Package cards slide up with stagger
      if (packagesContainerRef.current) {
        const cards = packagesContainerRef.current.querySelectorAll('a > div');
        gsap.fromTo(cards,
          { opacity: 0, y: isMobile ? 30 : 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: packagesContainerRef.current,
              start: isMobile ? 'top 85%' : 'top 75%',
            },
          }
        );
      }

      // Buttons slide up
      if (buttonsRef.current) {
        gsap.fromTo(buttonsRef.current.children,
          { opacity: 0, y: isMobile ? 20 : 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: buttonsRef.current,
              start: isMobile ? 'top 92%' : 'top 85%',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const baseCardStyles =
    "rounded-lg p-6 sm:p-8 shadow-lg transition-all duration-300 border hover:shadow-2xl";

  return (
    <section
      ref={sectionRef}
      id="packages"
      className="scroll-mt-20 md:scroll-mt-65 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-16"
    >
      <h2 ref={titleRef} className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-stone-300">
        {t("productPackages.availablePackages")}
      </h2>

      <div className="md:hidden flex items-center justify-end mb-3 text-xs text-stone-400 pr-1">
        <ChevronLeft size={14} className="text-orange-500/80" />
        <span className="mx-1">Swipe left / right</span>
        <ChevronRight size={14} className="text-orange-500" />
      </div>

      <div
        ref={packagesContainerRef}
        className="flex md:grid md:grid-cols-3 gap-6 sm:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory px-1 -mx-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {/* --- 2.5 kg --- */}
        <Link to="/order" className="snap-center min-w-[82%] md:min-w-0">
          <div
            className={`${baseCardStyles} bg-stone-900/40 border-stone-700 hover:border-amber-600`}
          >
            <div className="text-center">
              <Package className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 text-orange-500" />
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-stone-300">
                2.5 kg
              </h3>
              <div className="text-3xl sm:text-4xl font-bold text-stone-200 mb-4">
                €2.38
              </div>
              <div className="text-sm text-stone-400 mb-6">
                {t("productPackages.perBag")}
              </div>
              <ul className="text-left space-y-2 text-sm sm:text-base text-stone-300">
                <li>✓ {t("productPackages.small.firstCheck")}</li>
                <li>✓ {t("productPackages.small.secondCheck")}</li>
                <li>✓ {t("productPackages.small.thirdCheck")}</li>
                <li>✓ {t("productPackages.small.fourthCheck")}</li>
              </ul>
            </div>
          </div>
        </Link>

        {/* --- 10 kg --- */}
        <Link
          to="/order"
          ref={middlePackageRef}
          className="snap-center min-w-[82%] md:min-w-0"
        >
          <div
            className={`${baseCardStyles} bg-stone-900/80 md:transform md:scale-105 border-orange-500/30 shadow-[rgba(249,115,22,0.2)]`}
          >
            <div className="text-center">
              <div className="bg-stone-200 text-orange-600 text-xs font-bold py-1 px-3 rounded-full inline-block mb-3">
                {t("productPackages.mostPopular")}
              </div>
              <Package className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 text-orange-500" />
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-stone-300">
                10 kg
              </h3>
              <div className="text-3xl sm:text-4xl font-bold text-white mb-4">
                €9.50
              </div>
              <div className="text-sm text-stone-400 mb-6">
                {t("productPackages.perBag")}
              </div>
              <ul className="text-left space-y-2 text-sm sm:text-base text-stone-300">
                <li>✓ {t("productPackages.big.firstCheck")}</li>
                <li>✓ {t("productPackages.big.secondCheck")}</li>
                <li>✓ {t("productPackages.big.thirdCheck")}</li>
                <li>✓ {t("productPackages.big.fourthCheck")}</li>
              </ul>
            </div>
          </div>
        </Link>

        {/* --- 5 kg --- */}
        <Link to="/order" className="snap-center min-w-[82%] md:min-w-0">
          <div
            className={`${baseCardStyles} bg-stone-900/40 border-stone-700 hover:border-amber-600`}
          >
            <div className="text-center">
              <Package className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 text-orange-500" />
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-stone-300">
                5 kg
              </h3>
              <div className="text-3xl sm:text-4xl font-bold text-stone-100 mb-4">
                €4,75
              </div>
              <div className="text-sm text-stone-400 mb-6">
                {t("productPackages.perBag")}
              </div>
              <ul className="text-left space-y-2 text-sm sm:text-base text-stone-300">
                <li>✓ {t("productPackages.medium.firstCheck")}</li>
                <li>✓ {t("productPackages.medium.secondCheck")}</li>
                <li>✓ {t("productPackages.medium.thirdCheck")}</li>
                <li>✓ {t("productPackages.medium.fourthCheck")}</li>
              </ul>
            </div>
          </div>
        </Link>
      </div>

      {/* Action Buttons */}
      <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
        <Link to="/order">
          <Button type="primary">{t("productPackages.orderNow")}</Button>
        </Link>
        <a href="/about">
          <Button type="secondary">{t("productPackages.learnMore")}</Button>
        </a>
      </div>

      {/* Footer Info */}
      <div className="text-center mt-6 sm:mt-8 text-stone-300 px-4">
        <p className="text-base sm:text-lg">
          {t("productPackages.basePriceLabel")}{" "}
          <span className="font-bold text-orange-500">
            {t("productPackages.basePricePerTon")}
          </span>{" "}
          {t("productPackages.basePricePerKg")}
        </p>
        <p className="text-xs sm:text-sm mt-2">
          {t("productPackages.deliveryNote")}
        </p>
      </div>
    </section>
  );
}

export default ProductPackages;
