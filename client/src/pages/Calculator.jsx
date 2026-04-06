import { useState, useRef, useEffect } from "react";
import Button from "../ui/Button";
import {
  Calculator as CalcIcon,
  Package,
  Truck,
  CheckCircle2,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import Seo from "../seo/Seo";
import {
  createLocalBusinessSchema,
  createOrganizationSchema,
} from "../utils/structuredDataSchemas";
import gsap from "gsap";

function Calculator() {
  const { t } = useTranslation();

  // Get schemas for structured data
  const localBusinessSchema = createLocalBusinessSchema();
  const organizationSchema = createOrganizationSchema();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const [subtotal, setSubtotal] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const headerRef = useRef(null);
  const formRef = useRef(null);
  const resultRef = useRef(null);

  const tons = watch("tons");
  const PRICE_PER_TON = 950;

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      // Header animation
      if (headerRef.current) {
        gsap.fromTo(headerRef.current,
          { opacity: 0, y: isMobile ? -20 : -30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
          }
        );
      }

      // Form animation
      if (formRef.current) {
        gsap.fromTo(formRef.current,
          { opacity: 0, y: isMobile ? 25 : 40, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'back.out(1.2)',
            delay: 0.2,
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (showResult && resultRef.current) {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      gsap.fromTo(resultRef.current,
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: 'back.out(1.4)',
        }
      );

      // Animate the price number
      const priceElement = resultRef.current.querySelector('.price-number');
      if (priceElement) {
        const obj = { val: 0 };
        gsap.to(obj, {
          val: subtotal,
          duration: 1.5,
          ease: 'power2.out',
          onUpdate: () => {
            priceElement.textContent = Math.round(obj.val).toLocaleString();
          },
        });
      }
    }
  }, [showResult, subtotal]);

  const handleCalculate = (data) => {
    const { tons } = data;
    const total = Number(tons) * PRICE_PER_TON;
    setSubtotal(total);
    setShowResult(true);
  };

  return (
    <div className="min-h-screen py-12 sm:py-16 px-4 max-w-4xl mx-auto relative">
      <Seo
        title={t("seoPages.calculator.title")}
        description={t("seoPages.calculator.description")}
        path="/calculator"
        schema={[localBusinessSchema, organizationSchema]}
      />

      {/* Header */}
      <header ref={headerRef} className="text-center mb-10 sm:mb-12 opacity-0">
        <div className="flex items-center justify-center gap-3 mb-4">
          <CalcIcon className="w-10 h-10 sm:w-12 sm:h-12 text-orange-500" />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-500 hover:text-orange-600 transition-colors duration-300">
            {t("calculator.title")}
          </h1>
        </div>
        <p className="text-base sm:text-lg text-stone-400 max-w-2xl mx-auto">
          {t("calculator.description")}
        </p>
      </header>

      {/* Calculator Form */}
      <form
        ref={formRef}
        onSubmit={handleSubmit(handleCalculate)}
        className="bg-linear-to-br from-stone-900/90 to-stone-900/50 backdrop-blur-sm rounded-3xl shadow-2xl border border-stone-800/50 p-6 sm:p-10 space-y-8 opacity-0"
      >
        {/* Tons Input */}
        <div className="space-y-3">
          <label
            htmlFor="tons"
            className=" text-base sm:text-lg font-semibold text-stone-200 flex items-center gap-2"
          >
            <Package className="w-5 h-5 text-orange-500" />
            {t("calculator.label")}
          </label>
          <div className="relative">
            <input
              type="number"
              id="tons"
              min="1"
              step="0.1"
              placeholder={t("calculator.placeholder")}
              className="w-full px-5 py-4 text-lg border-2 border-stone-800 rounded-xl bg-stone-950/50 text-white placeholder-stone-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
              {...register("tons", {
                required: "Please enter the quantity",
                min: {
                  value: 1,
                  message: "Minimum order is 1 ton",
                },
              })}
            />
          </div>
          {errors?.tons?.message && (
            <p className="text-sm font-medium text-red-400 flex items-center gap-1">
              ⚠ {errors.tons.message}
            </p>
          )}
          <p className="text-sm text-stone-500">
            {t("calculator.basePrice")}{" "}
            <span className="text-orange-500 font-semibold">
              €{PRICE_PER_TON}/ton
            </span>
          </p>
        </div>

        {/* Live Preview */}
        {tons && Number(tons) >= 1 && (
          <div className="bg-stone-950/30 border border-stone-800 rounded-xl p-4 space-y-2">
            <p className="text-stone-400 text-sm">Preview:</p>
            <p className="text-stone-200 text-lg">
              {tons} tons × €{PRICE_PER_TON} ={" "}
              <span className="text-orange-500 font-bold">
                €{(Number(tons) * PRICE_PER_TON).toFixed(2)}
              </span>
            </p>
          </div>
        )}

        {/* Calculate Button */}
        <div className="pt-2">
          <Button type="primary" className="w-full text-lg">
            {t("calculator.calculateButton")}
          </Button>
        </div>
      </form>

      {/* Result Section */}
      {showResult && (
        <div ref={resultRef} className="mt-8 bg-linear-to-br from-orange-500/10 to-amber-600/5 backdrop-blur-sm rounded-3xl shadow-2xl border-2 border-orange-500/30 p-6 sm:p-10 space-y-6 transition-all duration-500 ease-out opacity-0">
          <div className="flex items-center gap-3 mb-6">
            <CheckCircle2 className="w-8 h-8 text-green-500" />
            <h3 className="text-2xl sm:text-3xl font-bold text-orange-500">
              {t("calculator.breakdown")}
            </h3>
          </div>

          <div className="space-y-4">
            {/* Subtotal */}
            <div className="flex justify-between items-center pb-3 border-b border-stone-700">
              <span className="text-stone-300 text-lg">
                {t("calculator.subtotal")}
              </span>
              <span className="text-white text-2xl font-bold price-number">
                €{subtotal.toFixed(2)}
              </span>
            </div>

            {/* Delivery */}
            <div className="flex justify-between items-center pb-3 border-b border-stone-700">
              <div className="flex items-center gap-2">
                <Truck className="w-5 h-5 text-green-500" />
                <span className="text-stone-300 text-lg">
                  {t("calculator.delivery")}
                </span>
              </div>
              <span className="text-green-500 font-bold text-lg flex items-center gap-2">
                {t("calculator.freeDelivery")}
              </span>
            </div>

            {/* Total */}
            <div className="flex justify-between items-center pt-4">
              <span className="text-orange-400 text-2xl font-bold">
                {t("calculator.total")}
              </span>
              <span className="text-orange-500 text-3xl sm:text-4xl font-bold">
                €{subtotal.toFixed(2)}
              </span>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 pt-6 border-t border-stone-700/50 space-y-2">
            <p className="text-stone-400 text-sm">✓ {t("calculator.vat")}</p>
            <p className="text-stone-400 text-sm">
              ✓ {t("calculator.polkowice")}
            </p>
            <p className="text-stone-500 text-xs mt-3">
              {t("calculator.note")}
            </p>
          </div>
        </div>
      )}

      {/* Info Note */}
      <div className="mt-8 text-center space-y-2">
        <p className="text-sm text-stone-400">
          {t("calculator.help")}{" "}
          <Link
            to="/contact"
            className="text-orange-500 hover:text-orange-400 underline"
          >
            {t("calculator.contact")}
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Calculator;
