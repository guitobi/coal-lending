import { CreditCard, MapPin, Package, Truck } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useRef, useEffect } from "react";
import gsap from "gsap";

function DeliveryTerms() {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const featuresRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      // Title animation
      if (titleRef.current) {
        gsap.fromTo(titleRef.current,
          { opacity: 0, x: isMobile ? -30 : -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: titleRef.current,
              start: isMobile ? 'top 90%' : 'top 80%',
            },
          }
        );
      }

      // Features with stagger
      if (featuresRef.current) {
        const items = featuresRef.current.querySelectorAll('.feature-item');
        gsap.fromTo(items,
          { opacity: 0, x: isMobile ? -20 : -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: featuresRef.current,
              start: isMobile ? 'top 85%' : 'top 75%',
            },
          }
        );
      }

      // Image slide from right
      if (imageRef.current) {
        gsap.fromTo(imageRef.current,
          { opacity: 0, x: isMobile ? 30 : 50, scale: 1.1 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: imageRef.current,
              start: isMobile ? 'top 85%' : 'top 75%',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-stone-800/5 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 ref={titleRef} className="text-4xl font-bold mb-6 text-orange-500 opacity-0">
              {t("delivery.terms.title")}
            </h2>
            <div ref={featuresRef} className="space-y-4 text-stone-300">
              <div className="feature-item flex items-start">
                <Truck className="w-7 h-7 mr-3 text-orange-500 shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">
                    {t("delivery.terms.features.firstFeature.title")}
                  </h3>
                  <p>{t("delivery.terms.features.firstFeature.description")}</p>
                </div>
              </div>
              <div className="feature-item flex items-start">
                <MapPin className="w-7 h-7 mr-3 text-orange-500 shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">
                    {t("delivery.terms.features.secondFeature.title")}
                  </h3>
                  <p>
                    {t("delivery.terms.features.secondFeature.description")}
                  </p>
                </div>
              </div>
              <div className="feature-item flex items-start">
                <Package className="w-7 h-7 mr-3 text-orange-500 shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">
                    {t("delivery.terms.features.thirdFeature.title")}
                  </h3>
                  <p>{t("delivery.terms.features.thirdFeature.description")}</p>
                </div>
              </div>
              <div className="feature-item flex items-start">
                <CreditCard className="w-7 h-7 mr-3 text-orange-500 shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">
                    {t("delivery.terms.features.fourthFeature.title")}
                  </h3>
                  <p>
                    {t("delivery.terms.features.fourthFeature.description")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div ref={imageRef} className="rounded-lg overflow-hidden shadow-2xl opacity-0">
            <img
              src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&h=400&fit=crop"
              alt="Delivery truck"
              className="w-full h-96 object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default DeliveryTerms;
