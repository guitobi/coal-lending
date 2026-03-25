import { useEffect, useRef, useState } from "react";

function DeferredSection({ children, rootMargin = "200px 0px" }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const target = ref.current;

    if (!target || isVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, [isVisible, rootMargin]);

  return (
    <div
      ref={ref}
      style={{ contentVisibility: "auto", containIntrinsicSize: "1000px" }}
    >
      {isVisible ? children : null}
    </div>
  );
}

export default DeferredSection;
