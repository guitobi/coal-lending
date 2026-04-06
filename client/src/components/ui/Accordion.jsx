import React, { createContext, useContext, useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import gsap from "gsap";

const AccordionContext = createContext();

const Accordion = ({
  children,
  className = "",
  type = "single",
  collapsible = true,
}) => {
  const [activeItems, setActiveItems] = useState([]);

  const toggleItem = (value) => {
    if (collapsible && activeItems.includes(value)) {
      setActiveItems(activeItems.filter((item) => item !== value));
    } else {
      if (type === "single") {
        setActiveItems([value]);
      } else {
        setActiveItems((prev) => [
          ...prev.filter((item) => item !== value),
          value,
        ]);
      }
    }
  };

  return (
    <AccordionContext.Provider value={{ activeItems, toggleItem }}>
      <div className={className}>{children}</div>
    </AccordionContext.Provider>
  );
};

const AccordionItem = ({ children, value, className = "" }) => {
  return (
    <div
      className={`border border-stone-700 rounded-xl bg-stone-900/50 backdrop-blur-sm overflow-hidden transition-all duration-300 ${className}`}
    >
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { value }),
      )}
    </div>
  );
};

const AccordionTrigger = ({ children, className = "", value }) => {
  const { activeItems, toggleItem } = useContext(AccordionContext);

  return (
    <button
      className={`flex justify-between items-center w-full p-5 text-left font-medium text-stone-200 hover:bg-stone-800/30 transition-colors duration-200 ${className}`}
      onClick={() => toggleItem(value)}
      aria-expanded={activeItems.includes(value)}
    >
      <span className="text-lg font-semibold">{children}</span>
      <ChevronDown
        className={`h-5 w-5 text-orange-500 shrink-0 ml-2 transition-transform duration-200 ${
          activeItems.includes(value) ? "rotate-180" : ""
        }`}
      />
    </button>
  );
};

const AccordionContent = ({ children, className = "", value }) => {
  const { activeItems } = useContext(AccordionContext);
  const contentRef = useRef(null);
  const innerRef = useRef(null);

  const isVisible = activeItems.includes(value);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!contentRef.current || !innerRef.current) return;

    if (prefersReducedMotion) {
      // Fallback for reduced motion
      if (isVisible) {
        contentRef.current.style.height = 'auto';
        contentRef.current.style.opacity = '1';
      } else {
        contentRef.current.style.height = '0';
        contentRef.current.style.opacity = '0';
      }
      return;
    }

    if (isVisible) {
      // Opening animation
      const height = innerRef.current.offsetHeight;
      gsap.to(contentRef.current, {
        height: height,
        opacity: 1,
        duration: 0.4,
        ease: 'power2.out',
      });
    } else {
      // Closing animation
      gsap.to(contentRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
      });
    }
  }, [isVisible]);

  return (
    <div
      ref={contentRef}
      className="overflow-hidden"
      style={{ height: 0, opacity: 0 }}
    >
      <div
        ref={innerRef}
        className={`p-5 pt-0 text-stone-400 border-t border-stone-800 ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
