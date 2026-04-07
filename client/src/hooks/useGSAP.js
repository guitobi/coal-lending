import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Device performance detection
 */
export function getDevicePerformance() {
  const cores = navigator.hardwareConcurrency || 2;
  const memory = navigator.deviceMemory || 4;
  const isMobile = window.innerWidth < 768;

  if (!isMobile && cores >= 4 && memory >= 8) return "high";
  if (isMobile && cores >= 4 && memory >= 4) return "medium";
  return "low";
}

/**
 * Configure ScrollTrigger based on device
 */
export function configureScrollTrigger() {
  const isMobile = window.innerWidth < 768;

  ScrollTrigger.config({
    limitCallbacks: true,
    syncInterval: isMobile ? 150 : 16,
  });
}

/**
 * Custom hook for GSAP animations with automatic cleanup
 * @param {Function} animationFn - Function that creates GSAP animations
 */
export function useGSAPAnimation(animationFn) {
  const contextRef = useRef();

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    // Create GSAP context for automatic cleanup
    contextRef.current = gsap.context(() => {
      animationFn();
    });

    return () => {
      // Cleanup all animations in this context
      contextRef.current?.revert();
    };
  }, [animationFn]);

  return contextRef;
}

/**
 * Hook for scroll-triggered animations
 */
export function useScrollAnimation(elementRef, options = {}) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || !elementRef.current) {
      return;
    }

    const element = elementRef.current;
    const {
      start = "top 80%",
      end = "bottom 20%",
      scrub = false,
      markers = false,
      ...animationProps
    } = options;

    const animation = gsap.from(element, {
      ...animationProps,
      scrollTrigger: {
        trigger: element,
        start,
        end,
        scrub,
        markers,
      },
    });

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, [elementRef, options]);
}

export default useGSAPAnimation;
