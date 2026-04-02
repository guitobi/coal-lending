import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

function TestimonialsSlider({ testimonials = [], className = "" }) {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Default testimonials if none provided
  const defaultTestimonials = [
    {
      id: 1,
      name: t("testimonials.first.author", "Marek K."),
      role: t("testimonials.first.role", "Restaurant owner"),
      text: t(
        "testimonials.first.text",
        "Stable quality every time. Lights quickly and keeps heat for a long session.",
      ),
      rating: 5,
      avatar: "MK",
    },
    {
      id: 2,
      name: t("testimonials.second.author", "Anna W."),
      role: t("testimonials.second.role", "Private customer"),
      text: t(
        "testimonials.second.text",
        "Delivery was on time and the packaging was perfect. Definitely ordering again.",
      ),
      rating: 5,
      avatar: "AW",
    },
    {
      id: 3,
      name: t("testimonials.third.author", "Piotr L."),
      role: t("testimonials.third.role", "Event organizer"),
      text: t(
        "testimonials.third.text",
        "Very low ash compared to other brands. Great for weekend BBQ events.",
      ),
      rating: 4,
      avatar: "PL",
    },
    {
      id: 4,
      name: t("testimonials.fourth.author", "Tomasz M."),
      role: t("testimonials.fourth.role", "Grill master"),
      text: t(
        "testimonials.fourth.text",
        "Excellent heat output and consistent size. Perfect for professional events.",
      ),
      rating: 5,
      avatar: "TM",
    },
    {
      id: 5,
      name: t("testimonials.fifth.author", "Katarzyna S."),
      role: t("testimonials.fifth.role", "Home chef"),
      text: t(
        "testimonials.fifth.text",
        "The best charcoal I've tried. Burns evenly and lasts much longer than others.",
      ),
      rating: 5,
      avatar: "KS",
    },
    {
      id: 6,
      name: t("testimonials.sixth.author", "Michał P."),
      role: t("testimonials.sixth.role", "BBQ enthusiast"),
      text: t(
        "testimonials.sixth.text",
        "Impressed with the quality and fast delivery. Will recommend to friends.",
      ),
      rating: 4,
      avatar: "MP",
    },
  ];

  const testimonialsData =
    testimonials.length > 0 ? testimonials : defaultTestimonials;

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex(
          (prevIndex) => (prevIndex + 1) % testimonialsData.length,
        );
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonialsData.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1,
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={`${i < rating ? "text-orange-500 fill-orange-500" : "text-stone-600"} shrink-0`}
      />
    ));
  };

  return (
    <div className={`relative ${className}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-orange-500 mb-4">
            {t("testimonials.sliderTitle", "What Our Clients Say")}
          </h2>
          <p className="text-stone-400 text-base sm:text-lg max-w-2xl mx-auto">
            {t(
              "testimonials.sliderSubtitle",
              "Real feedback from people who already grill with our premium charcoal",
            )}
          </p>
        </div>

        <div className="relative overflow-hidden group">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonialsData.map((testimonial) => (
              <div key={testimonial.id} className="w-full shrink-0 px-4">
                <div className="bg-stone-900/50 backdrop-blur-sm border border-stone-700 rounded-2xl p-8 max-w-4xl mx-auto">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="shrink-0">
                      <div className="w-20 h-20 rounded-full bg-linear-to-br from-orange-600 to-amber-600 flex items-center justify-center text-white text-xl font-bold">
                        {testimonial.avatar}
                      </div>
                    </div>

                    <div className="grow text-center md:text-left">
                      <div className="flex justify-center md:justify-start mb-4">
                        <div className="flex">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>

                      <blockquote className="text-stone-300 text-lg mb-6 italic">
                        "{testimonial.text}"
                      </blockquote>

                      <div>
                        <cite className="font-semibold text-stone-200 not-italic">
                          {testimonial.name}
                        </cite>
                        <div className="text-stone-500 text-sm">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-stone-800/80 hover:bg-stone-700/80 backdrop-blur-sm border border-stone-700 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} className="text-stone-300" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-stone-800/80 hover:bg-stone-700/80 backdrop-blur-sm border border-stone-700 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} className="text-stone-300" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentIndex
                  ? "bg-orange-500"
                  : "bg-stone-700 hover:bg-stone-600"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-play Toggle */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-sm text-stone-500 hover:text-stone-300 transition-colors flex items-center gap-2"
          >
            <div
              className={`w-2 h-2 rounded-full ${isAutoPlaying ? "bg-orange-500 animate-pulse" : "bg-stone-600"}`}
            ></div>
            {isAutoPlaying
              ? t("testimonials.pause", "Auto-rotate")
              : t("testimonials.play", "Paused")}
          </button>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsSlider;
