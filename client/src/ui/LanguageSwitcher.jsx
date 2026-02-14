import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown, Check, Globe } from "lucide-react";

const LanguageSwitcher = ({ isMobile = false }) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLang = (i18n.language || "en").toLowerCase();
  const isPolish = currentLang.includes("pl");

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  const optionClass = `w-full text-left px-4 py-3 text-sm flex items-center justify-between transition-colors
    ${isMobile ? "hover:bg-stone-700 rounded-lg" : "hover:bg-stone-800"}`;

  return (
    <div
      className={`relative ${
        isMobile ? "w-full border-t border-stone-800 pt-4 mt-auto" : "z-50"
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-between transition-all duration-300
          ${
            isMobile
              ? "w-full px-4 py-3 bg-stone-800/50 hover:bg-stone-800 text-stone-200 rounded-xl border border-stone-700/50"
              : "gap-2 px-3 py-2 text-stone-400 hover:text-orange-500 hover:bg-stone-800 rounded-lg border border-transparent hover:border-stone-700"
          }
        `}
      >
        <div className="flex items-center gap-3">
          <Globe
            className={`w-5 h-5 ${isMobile ? "text-orange-500" : "w-4 h-4"}`}
          />
          <span className="font-medium">
            {isMobile
              ? isPolish
                ? "Język: Polski"
                : "Language: English"
              : isPolish
                ? "PL"
                : "EN"}
          </span>
        </div>

        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {!isMobile && isOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
      )}

      {isMobile && isOpen && (
        <div className="w-full mt-2 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
          {/* English */}
          <button
            onClick={() => changeLanguage("en")}
            className={`${optionClass} ${
              !isPolish
                ? "text-orange-500 bg-stone-800 font-bold border border-stone-700"
                : "text-stone-400"
            }`}
          >
            <span className="flex items-center gap-2">English</span>
            {!isPolish && <Check className="w-4 h-4" />}
          </button>

          {/* Polish */}
          <button
            onClick={() => changeLanguage("pl")}
            className={`${optionClass} ${
              isPolish
                ? "text-orange-500 bg-stone-800 font-bold border border-stone-700"
                : "text-stone-400"
            }`}
          >
            <span className="flex items-center gap-2">Polski</span>
            {isPolish && <Check className="w-4 h-4" />}
          </button>
        </div>
      )}

      {/* 2. DESKTOP VERSION  */}
      {!isMobile && isOpen && (
        <div className="absolute right-0 top-full mt-2 w-40 bg-stone-900 border border-stone-800 rounded-xl shadow-xl z-50 overflow-hidden">
          <button
            onClick={() => changeLanguage("en")}
            className={`${optionClass} ${
              !isPolish ? "text-orange-500 font-semibold" : "text-stone-400"
            }`}
          >
            <span className="flex items-center gap-2">English</span>
            {!isPolish && <Check className="w-4 h-4" />}
          </button>

          <div className="h-px bg-stone-800 mx-2" />

          <button
            onClick={() => changeLanguage("pl")}
            className={`${optionClass} ${
              isPolish ? "text-orange-500 font-semibold" : "text-stone-400"
            }`}
          >
            <span className="flex items-center gap-2">Polski</span>
            {isPolish && <Check className="w-4 h-4" />}
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
