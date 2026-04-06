import { useTranslation } from "react-i18next";
import Seo from "../../seo/Seo";
import {
  createLocalBusinessSchema,
  createOrganizationSchema,
} from "../../utils/structuredDataSchemas";
import { useRef, useEffect } from "react";
import gsap from "gsap";

import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

function ContactPage() {
  const { t } = useTranslation();

  // Get schemas for structured data
  const localBusinessSchema = createLocalBusinessSchema();
  const organizationSchema = createOrganizationSchema();

  const headerRef = useRef(null);
  const infoRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Header animation
      if (headerRef.current) {
        tl.fromTo(headerRef.current,
          { opacity: 0, y: -30 },
          { opacity: 1, y: 0, duration: 0.8 },
          0
        );
      }

      // Info and Form slide in from sides
      if (infoRef.current) {
        tl.fromTo(infoRef.current,
          { opacity: 0, x: -50 },
          { opacity: 1, x: 0, duration: 0.8 },
          0.2
        );
      }

      if (formRef.current) {
        tl.fromTo(formRef.current,
          { opacity: 0, x: 50 },
          { opacity: 1, x: 0, duration: 0.8 },
          0.2
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen py-12 sm:py-16 px-4">
      <Seo
        title={t("seoPages.contact.title")}
        description={t("seoPages.contact.description")}
        path="/contact"
        schema={[localBusinessSchema, organizationSchema]}
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12 opacity-0">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-500 mb-4">
            {t("contactUs.title")}
          </h1>
          <p className="text-stone-400 text-base sm:text-lg max-w-2xl mx-auto">
            {t("contactUs.description")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <div ref={infoRef} className="opacity-0">
            <ContactInfo />
          </div>
          <div ref={formRef} className="opacity-0">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
