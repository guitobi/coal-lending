import { useTranslation } from "react-i18next";
import Seo from "../../seo/Seo";
import {
  createLocalBusinessSchema,
  createOrganizationSchema,
} from "../../utils/structuredDataSchemas";
import { useRef, useEffect } from "react";
import gsap from "gsap";

import OrderForm from "./OrderForm";
import OrderContactInfo from "./OrderContactInfo";

function OrderPage() {
  const { t } = useTranslation();

  // Get schemas for structured data
  const localBusinessSchema = createLocalBusinessSchema();
  const organizationSchema = createOrganizationSchema();

  const headerRef = useRef(null);
  const infoRef = useRef(null);
  const formRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Header animation
      if (headerRef.current) {
        tl.fromTo(headerRef.current,
          { opacity: 0, y: -30, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8 },
          0
        );
      }

      // Info and Form slide in from sides
      if (infoRef.current) {
        tl.fromTo(infoRef.current,
          { opacity: 0, x: -50, rotateY: -10 },
          { opacity: 1, x: 0, rotateY: 0, duration: 0.8 },
          0.2
        );
      }

      if (formRef.current) {
        tl.fromTo(formRef.current,
          { opacity: 0, x: 50, rotateY: 10 },
          { opacity: 1, x: 0, rotateY: 0, duration: 0.8 },
          0.2
        );
      }

      // Footer fade in
      if (footerRef.current) {
        tl.fromTo(footerRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          0.5
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen py-12 sm:py-16 px-4">
      <Seo
        title={t("seoPages.order.title")}
        description={t("seoPages.order.description")}
        path="/order"
        schema={[localBusinessSchema, organizationSchema]}
      />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-10 sm:mb-12 opacity-0">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-orange-500 font-extrabold mb-3">
            {t("order.title")}
          </h1>
          <p className="text-stone-400 text-sm sm:text-base max-w-xl mx-auto">
            {t("order.description")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <div ref={infoRef} className="opacity-0">
            <OrderContactInfo />
          </div>
          <div ref={formRef} className="opacity-0">
            <OrderForm />
          </div>
        </div>

        {/* Footer Text */}
        <div ref={footerRef} className="text-center mt-8 space-y-2 opacity-0">
          <p className="text-stone-300 text-base sm:text-lg font-medium">
            📞 {t(["order.form.footer.title", "order.footer.title"])}
          </p>
          <p className="text-stone-500 text-sm">
            {t(["order.form.footer.delivery", "order.footer.delivery"])}
          </p>
          {/* Info Note */}
          <div className="mt-8 text-center space-y-2">
            <p className="text-sm text-stone-400">
              {t([
                "order.form.footer.contact.title",
                "order.footer.contact.title",
              ])}{" "}
              <a
                href="/contact"
                className="text-orange-500 hover:text-orange-400 underline"
              >
                {t([
                  "order.form.footer.contact.contact",
                  "order.footer.contact.contact",
                ])}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
