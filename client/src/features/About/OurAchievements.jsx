import { useTranslation } from "react-i18next";

function OurAchievements() {
  const { t } = useTranslation();

  return (
    <section className="bg-stone-900/50 border border-stone-950 rounded-3xl py-16 ">
      <div className="max-w-7xl mx-auto px-4 ">
        <h2 className="text-3xl font-bold text-center mb-12 text-stone-100">
          {t("about.achievements.title")}
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8 hover:outline hover:outline-amber-600 duration-300 min-h-40 flex flex-col justify-center items-center gap-2">
            <div className="text-5xl md:text-6xl font-bold text-orange-400 leading-none">
              {t("about.achievements.firstCard.title")}
            </div>
            <p className="text-base md:text-xl text-stone-200">
              {t("about.achievements.firstCard.description")}
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8 hover:outline hover:outline-amber-600 duration-300 min-h-40 flex flex-col justify-center items-center gap-2">
            <div className="text-5xl md:text-6xl font-bold text-orange-400 leading-none">
              {t("about.achievements.secondCard.title")}
            </div>
            <p className="text-base md:text-xl text-stone-200">
              {t("about.achievements.secondCard.description")}
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8 hover:outline hover:outline-amber-600 duration-300 min-h-40 flex flex-col justify-center items-center gap-2">
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
