import { Earth, Users, Lightbulb } from "lucide-react";
import { useTranslation } from "react-i18next";

function OurMission() {
  const { t } = useTranslation();

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-orange-500">
        {t("about.ourMission.title")}
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="group bg-stone-900/40 rounded-lg p-6 border border-stone-800 backdrop-blur-sm transition-all duration-300 hover:bg-stone-900/80 hover:border-orange-500/50 hover:-translate-y-1 hover:shadow-lg">
          <div className="mb-4">
            <Earth className="w-10 h-10 mb-4 text-stone-500 group-hover:text-orange-500 transition-colors duration-300" />
          </div>
          <h3 className="text-xl font-semibold mb-3 text-amber-600 group-hover:text-white transition-colors">
            {t("about.ourMission.firstCard.title")}
          </h3>
          <p className="text-stone-300">
            {t("about.ourMission.firstCard.description")}
          </p>
        </div>
        <div className="group bg-stone-900/40 rounded-lg p-6 border border-stone-800 backdrop-blur-sm transition-all duration-300 hover:bg-stone-900/80 hover:border-orange-500/50 hover:-translate-y-1 hover:shadow-lg">
          <div className="mb-4">
            <Users className="w-10 h-10 mb-4 text-stone-500 group-hover:text-orange-500 transition-colors duration-300" />
          </div>
          <h3 className="text-xl font-semibold mb-3 text-amber-600 group-hover:text-white transition-colors">
            {t("about.ourMission.secondCard.title")}
          </h3>
          <p className="text-stone-300">
            {t("about.ourMission.secondCard.description")}
          </p>
        </div>
        <div className="group bg-stone-900/40 rounded-lg p-6 border border-stone-800 backdrop-blur-sm transition-all duration-300 hover:bg-stone-900/80 hover:border-orange-500/50 hover:-translate-y-1 hover:shadow-lg">
          <div className="mb-4">
            <Lightbulb className="w-10 h-10 mb-4 text-stone-500 group-hover:text-orange-500 transition-colors duration-300" />
          </div>
          <h3 className="text-xl font-semibold mb-3 text-amber-600 group-hover:text-white transition-colors">
            {t("about.ourMission.thirdCard.title")}
          </h3>
          <p className="text-stone-300">
            {t("about.ourMission.thirdCard.description")}
          </p>
        </div>
      </div>
    </section>
  );
}

export default OurMission;
