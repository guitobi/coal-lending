import { Mail, MapPinned, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useRef, useEffect } from "react";
import gsap from "gsap";

import Button from "../../ui/Button";

function DeliveryContactSection() {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const contactBoxRef = useRef(null);
  const footerRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: isMobile ? 'top 85%' : 'top 75%',
        },
      });

      // Title
      if (titleRef.current) {
        tl.fromTo(titleRef.current,
          { opacity: 0, y: isMobile ? -20 : -30 },
          { opacity: 1, y: 0, duration: 0.7 },
          0
        );
      }

      // Description
      if (descRef.current) {
        tl.fromTo(descRef.current,
          { opacity: 0, y: isMobile ? 15 : 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          0.1
        );
      }

      // Contact box with scale
      if (contactBoxRef.current) {
        tl.fromTo(contactBoxRef.current,
          { opacity: 0, scale: isMobile ? 0.95 : 0.9, y: isMobile ? 20 : 30 },
          { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: 'back.out(1.2)' },
          0.3
        );
      }

      // Footer text
      if (footerRef.current) {
        tl.fromTo(footerRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.5 },
          0.6
        );
      }

      // Button
      if (buttonRef.current) {
        tl.fromTo(buttonRef.current,
          { opacity: 0, y: isMobile ? 15 : 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          0.7
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-stone-900/50 py-16 border border-stone-800">
      <div className="max-w-4xl mx-auto px-4 text-center text-white">
        <h2 ref={titleRef} className="text-4xl font-bold mb-6 text-orange-500 opacity-0">
          {t("delivery.order.title")}
        </h2>
        <p ref={descRef} className="text-xl mb-8 text-stone-400 opacity-0">
          {t("delivery.order.description")}
        </p>
        <div ref={contactBoxRef} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-left max-w-2xl mx-auto opacity-0">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center gap-2 font-semibold mb-2">
                <Mail className="w-5 h-5 text-orange-500" />
                <h3>{t("delivery.order.contacts.email.title")}</h3>
              </div>
              <a href="mailto:vanshare1@gmail.com" className="hover:underline">
                {t("delivery.order.contacts.email.description")}
              </a>
            </div>
            <div>
              <div className="flex items-center gap-2 font-semibold mb-2">
                <Phone className="w-5 h-5 text-orange-500" />
                <h3>{t("delivery.order.contacts.phone.title")}</h3>
              </div>
              <p>{t("delivery.order.contacts.phone.first")}</p>
              <p>{t("delivery.order.contacts.phone.second")}</p>
            </div>
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 font-semibold mb-2">
                <MapPinned className="w-5 h-5 text-orange-500" />
                <h3>{t("delivery.order.contacts.address.title")}</h3>
              </div>

              <p>
                {t("delivery.order.contacts.address.description.firstLine")}
              </p>
              <p>
                {t("delivery.order.contacts.address.description.secondLine")}
              </p>
              <p>
                {t("delivery.order.contacts.address.description.thirdLine")}
              </p>
              <p className="mt-2 text-sm">{t("delivery.order.contacts.nip")}</p>
            </div>
          </div>
        </div>
        <p ref={footerRef} className="mt-6 text-sm py-6 opacity-0">
          {t("delivery.order.contacts.footer")}
        </p>
        <div ref={buttonRef} className="opacity-0">
          <Button type="secondary" to="/order">
            {t("delivery.order.orderButtonText")}
          </Button>
        </div>
      </div>
    </section>
  );
}

export default DeliveryContactSection;
