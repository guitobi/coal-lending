import { useTranslation } from "react-i18next";
import Button from "../../ui/Button";
import { ChevronRight } from "lucide-react";

function Testimonials() {
  const { t } = useTranslation();

  const reviews = [
    {
      text: "testimonials.first.text",
      author: "testimonials.first.author",
      role: "testimonials.first.role",
    },
    {
      text: "testimonials.second.text",
      author: "testimonials.second.author",
      role: "testimonials.second.role",
    },
    {
      text: "testimonials.third.text",
      author: "testimonials.third.author",
      role: "testimonials.third.role",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
      <div className="text-center mb-8 sm:mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-300">
          {t("testimonials.title")}
        </h2>
        <p className="text-stone-300 mt-3 max-w-2xl mx-auto">
          {t("testimonials.subtitle")}
        </p>
      </div>

      <div className="md:hidden flex items-center justify-end mb-3 text-xs text-stone-400 pr-1">
        <span>Swipe</span>
        <ChevronRight size={14} className="ml-1 text-orange-500" />
        <ChevronRight size={14} className="-ml-1 text-orange-500/80" />
      </div>

      <div className="flex md:grid md:grid-cols-3 gap-5 sm:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory px-1 -mx-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {reviews.map((review, index) => (
          <article
            key={index}
            className="bg-stone-900/40 border border-stone-700 rounded-xl p-6 text-left hover:border-amber-600 transition-all duration-300 snap-start min-w-[82%] md:min-w-0"
          >
            <div className="text-amber-500 mb-3">★★★★★</div>
            <p className="text-stone-200 leading-relaxed mb-5">
              “{t(review.text)}”
            </p>
            <div>
              <p className="font-semibold text-stone-100">{t(review.author)}</p>
              <p className="text-sm text-stone-400">{t(review.role)}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 sm:mt-10 text-center">
        <Button type="primary" to="/order">
          {t("productPackages.orderNow")}
        </Button>
      </div>
    </section>
  );
}

export default Testimonials;
