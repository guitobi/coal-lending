import { useTranslation } from "react-i18next";
import { useRef, useEffect } from "react";
import Button from "../../ui/Button";
import { scrollToElement } from "../../utils/scrollUtils";
import gsap from "gsap";

function CTA() {
  const { t } = useTranslation();
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);
  const imageRef = useRef(null);
  const imageMobileRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // Title: slide from left
      if (titleRef.current) {
        titleRef.current.style.transition = "none";

        tl.fromTo(
          titleRef.current,
          { opacity: 0, x: isMobile ? -30 : -60 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            onComplete: () => {
              titleRef.current.style.transition = "all 0.5s";
            },
          },
          0,
        );
      }

      // Subtitle: slide from left (delayed)
      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          { opacity: 0, x: isMobile ? -20 : -40 },
          { opacity: 1, x: 0, duration: 0.7 },
          0.1,
        );
      }

      // Buttons: slide from bottom
      if (buttonsRef.current) {
        tl.fromTo(
          buttonsRef.current.children,
          { opacity: 0, y: isMobile ? 20 : 30 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 },
          0.3,
        );
      }

      // Desktop image: slide from right + scale
      if (imageRef.current) {
        tl.fromTo(
          imageRef.current,
          { opacity: 0, x: isMobile ? 30 : 60, scale: 1.05 },
          { opacity: 1, x: 0, scale: 1, duration: 0.9 },
          0.15,
        );

        // Subtle floating (only on desktop)
        if (!isMobile) {
          gsap.to(imageRef.current, {
            y: 10,
            duration: 3,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            delay: 1.2,
          });
        }

        // Hover
        const img = imageRef.current;
        img.parentElement.addEventListener("mouseenter", () => {
          gsap.to(img, {
            scale: 1.03,
            duration: 0.4,
            ease: "power2.out",
            overwrite: "auto",
          });
        });

        img.parentElement.addEventListener("mouseleave", () => {
          gsap.to(img, {
            scale: 1,
            duration: 0.4,
            ease: "power2.out",
            overwrite: "auto",
          });
        });
      }

      // Mobile image: slide from right
      if (imageMobileRef.current) {
        tl.fromTo(
          imageMobileRef.current,
          { opacity: 0, x: isMobile ? 20 : 40, scale: 1.05 },
          { opacity: 1, x: 0, scale: 1, duration: 0.7 },
          0.15,
        );
      }

      // Glow (only on desktop)
      if (glowRef.current && !isMobile) {
        gsap.to(glowRef.current, {
          opacity: 0.5,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 0.8,
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="pb-20 sm:pb-25 md:pb-30 lg:pb-25 flex items-center relative z-10 w-screen h-screen pt-16 sm:pt-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 w-full">
        <div className="flex flex-col lg:flex-row-reverse lg:items-center lg:justify-between lg:gap-16">
          <div className="flex-1 lg:text-left text-center pt-8 sm:pt-12 md:pt-20 lg:pt-0">
            <h1
              ref={titleRef}
              className={
                "text-3xl sm:text-5xl md:text-6xl lg:text-5xl font-bold font-space-grotesk " +
                "text-stone-300 transition-all duration-500 cursor-pointer hover:text-orange-500 " +
                "hover:scale-[1.01] mb-4 sm:mb-6 md:mb-8 text-center tracking-tight " +
                "sm:tracking-normal px-2 sm:px-0 opacity-0"
              }
            >
              <span className="inline-block whitespace-nowrap">
                {t("cta.maximumHeat")}
              </span>{" "}
              <span className="inline-block">{t("cta.minimumAsh")}</span>
            </h1>

            {/* Mobile layout photo */}
            <div
              ref={imageMobileRef}
              className="lg:hidden flex justify-center mb-4 sm:mb-6 relative group opacity-0"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-500/30 rounded-full blur-[80px] -z-10 pointer-events-none"></div>
              <img
                fetchPriority="high"
                width={567}
                height={1280}
                src="/coal_in_bag.webp"
                alt="Premium charcoal in bag"
                className="relative z-10 w-32 sm:w-40 md:w-48 rounded-2xl drop-shadow-[0_15px_50px_rgba(0,0,0,0.4)] aspect-567/1280"
              />
            </div>

            <h3
              ref={subtitleRef}
              className="text-xl sm:text-2xl md:text-3xl lg:text-2xl font-semibold text-stone-300 cursor-pointer duration-300 mb-6 sm:mb-8 lg:mb-10 text-center hover:text-orange-400 hover:scale-[1.01] transition-all opacity-0"
            >
              {t("cta.qualityClaim")}
            </h3>

            <div
              ref={buttonsRef}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 *:opacity-0"
            >
              <Button
                type="primary"
                onClick={() => {
                  scrollToElement("#packages", 100);
                }}
              >
                {t("cta.checkPrices")}
              </Button>
              <Button to="/calculator" type="secondary">
                {t("cta.calculatePrice")}
              </Button>
            </div>
          </div>

          <div className="hidden lg:flex flex-1 justify-center items-center mt-12 lg:mt-8 relative z-0 group">
            <div
              ref={glowRef}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-orange-500/30 rounded-full blur-[120px] -z-10 pointer-events-none transition-all duration-700 group-hover:scale-125 group-hover:bg-orange-500/50"
            ></div>

            <img
              ref={imageRef}
              fetchPriority="high"
              width={567}
              height={1280}
              src="/coal_in_bag.webp"
              alt="Premium charcoal in bag"
              className="relative z-10 w-64 lg:w-72 xl:w-80 rounded-2xl drop-shadow-2xl transition-all duration-500 ease-out aspect-567/1280 opacity-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
