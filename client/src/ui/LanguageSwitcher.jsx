import { useState, useRef } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import { ChevronDown, Check } from "lucide-react";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);
  const [coords, setCoords] = useState({ top: 0, left: 0 });

  const isPolish = i18n.language?.toLowerCase().includes("pl");
  const currentLabel = isPolish ? "PL" : "EN";

  const toggleMenu = () => {
    if (!isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setCoords({
        top: rect.bottom + 8,
        left: rect.right - 128,
      });
    }
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (langCode) => {
    console.log("Портал спрацював! Міняю на:", langCode);
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <>
      <button
        ref={buttonRef}
        onClick={toggleMenu}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-stone-900/50 border border-stone-800 text-stone-300 hover:text-orange-500 hover:border-orange-500/50 transition-all duration-300"
      >
        <span className="font-medium text-sm">{currentLabel}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen &&
        createPortal(
          <>
            <div
              className="fixed inset-0 z-9998 cursor-default"
              onClick={() => setIsOpen(false)}
            />

            <div
              style={{
                top: coords.top,
                left: coords.left,
                position: "fixed", // Важливо: Fixed
              }}
              className="w-32 bg-stone-900 border border-stone-800 rounded-xl shadow-xl shadow-black/80 overflow-hidden z-9999"
            >
              <button
                onClick={() => handleLanguageChange("en")}
                className={`w-full text-left px-4 py-3 text-sm flex items-center justify-between hover:bg-stone-800 transition-colors ${
                  !isPolish ? "text-orange-500 font-bold" : "text-stone-400"
                }`}
              >
                <span>English</span>
                {!isPolish && <Check className="w-4 h-4" />}
              </button>

              <button
                onClick={() => handleLanguageChange("pl")}
                className={`w-full text-left px-4 py-3 text-sm flex items-center justify-between hover:bg-stone-800 transition-colors ${
                  isPolish ? "text-orange-500 font-bold" : "text-stone-400"
                }`}
              >
                <span>Polski</span>
                {isPolish && <Check className="w-4 h-4" />}
              </button>
            </div>
          </>,
          document.body,
        )}
    </>
  );
};

export default LanguageSwitcher;
