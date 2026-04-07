import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Device detection utilities
 */
export function isMobileDevice() {
  return window.innerWidth < 768;
}

export function getDevicePerformance() {
  const cores = navigator.hardwareConcurrency || 2;
  const memory = navigator.deviceMemory || 4;
  const isMobile = isMobileDevice();

  if (!isMobile && cores >= 4 && memory >= 8) return 'high';
  if (isMobile && cores >= 4 && memory >= 4) return 'medium';
  return 'low';
}

/**
 * Adjust animation parameters based on device
 */
function getResponsiveValue(desktopValue, mobileValue) {
  return isMobileDevice() ? mobileValue : desktopValue;
}

/**
 * Fade in with slide up animation
 */
export function fadeInUp(element, options = {}) {
  const {
    duration = getResponsiveValue(0.8, 0.6),
    delay = 0,
    y = getResponsiveValue(60, 30),
    opacity = 0,
    ease = 'power2.out',
    scrollTrigger = null,
  } = options;

  return gsap.from(element, {
    y,
    opacity,
    duration,
    delay,
    ease,
    scrollTrigger,
    immediateRender: false,
  });
}

/**
 * Stagger animation for multiple elements
 */
export function staggerFadeIn(elements, options = {}) {
  const {
    duration = getResponsiveValue(0.6, 0.5),
    stagger = getResponsiveValue(0.1, 0.08),
    y = getResponsiveValue(40, 25),
    opacity = 0,
    ease = 'power2.out',
    scrollTrigger = null,
  } = options;

  return gsap.from(elements, {
    y,
    opacity,
    duration,
    stagger,
    ease,
    scrollTrigger,
    immediateRender: false,
  });
}

/**
 * Parallax effect for images
 */
export function parallaxImage(element, options = {}) {
  const { speed = 0.5, start = 'top bottom', end = 'bottom top' } = options;
  const isMobile = isMobileDevice();
  const performance = getDevicePerformance();

  // Disable parallax on low-performance devices
  if (performance === 'low') {
    return null;
  }

  // Reduce parallax intensity on mobile
  const adjustedSpeed = isMobile ? speed * 0.5 : speed;

  return gsap.to(element, {
    y: () => window.innerHeight * adjustedSpeed,
    ease: 'none',
    scrollTrigger: {
      trigger: element,
      start,
      end,
      scrub: isMobile ? 1 : true, // Add slight delay on mobile for better performance
    },
  });
}

/**
 * Split text animation (simple word-by-word)
 */
export function splitTextAnimation(element, options = {}) {
  const {
    duration = 0.8,
    stagger = 0.05,
    ease = 'power3.out',
  } = options;

  // Split text into words
  const text = element.textContent;
  const words = text.split(' ');

  element.innerHTML = words
    .map(word => `<span class="inline-block" style="opacity: 0;">${word}</span>`)
    .join(' ');

  const wordElements = element.querySelectorAll('span');

  return gsap.to(wordElements, {
    y: 0,
    opacity: 1,
    duration,
    stagger,
    ease,
    delay: 0.2,
  });
}

/**
 * Number counter animation
 */
export function counterAnimation(element, options = {}) {
  const {
    target = 100,
    duration = getResponsiveValue(2, 1.5),
    ease = 'power2.out',
    scrollTrigger = null,
  } = options;

  const obj = { value: 0 };

  return gsap.to(obj, {
    value: target,
    duration,
    ease,
    scrollTrigger,
    onUpdate: () => {
      element.textContent = Math.round(obj.value);
    },
  });
}

/**
 * Scale in animation
 */
export function scaleIn(element, options = {}) {
  const {
    duration = getResponsiveValue(0.8, 0.6),
    scale = getResponsiveValue(0.8, 0.9),
    opacity = 0,
    ease = 'back.out(1.4)',
    scrollTrigger = null,
  } = options;

  return gsap.from(element, {
    scale,
    opacity,
    duration,
    ease,
    scrollTrigger,
    immediateRender: false,
  });
}

/**
 * Reveal animation (clip-path)
 */
export function revealAnimation(element, options = {}) {
  const {
    duration = 1,
    ease = 'power3.inOut',
    direction = 'left',
    scrollTrigger = null,
  } = options;

  const clipPaths = {
    left: ['inset(0 100% 0 0)', 'inset(0 0% 0 0)'],
    right: ['inset(0 0 0 100%)', 'inset(0 0 0 0)'],
    top: ['inset(0 0 100% 0)', 'inset(0 0 0% 0)'],
    bottom: ['inset(100% 0 0 0)', 'inset(0% 0 0 0)'],
  };

  return gsap.fromTo(
    element,
    { clipPath: clipPaths[direction][0] },
    {
      clipPath: clipPaths[direction][1],
      duration,
      ease,
      scrollTrigger,
      immediateRender: false,
    }
  );
}

/**
 * Floating animation (continuous loop)
 */
export function floatingAnimation(element, options = {}) {
  const {
    duration = getResponsiveValue(3, 4),
    y = getResponsiveValue(20, 10),
    ease = 'sine.inOut'
  } = options;

  const performance = getDevicePerformance();

  // Disable on low-performance devices to save battery
  if (performance === 'low') {
    return null;
  }

  return gsap.to(element, {
    y,
    duration,
    ease,
    repeat: -1,
    yoyo: true,
    immediateRender: false,
  });
}

/**
 * Rotate in animation
 */
export function rotateIn(element, options = {}) {
  const {
    duration = getResponsiveValue(0.8, 0.6),
    rotation = getResponsiveValue(180, 90),
    opacity = 0,
    scale = getResponsiveValue(0.5, 0.7),
    ease = 'back.out(1.7)',
    scrollTrigger = null,
  } = options;

  return gsap.from(element, {
    rotation,
    opacity,
    scale,
    duration,
    ease,
    scrollTrigger,
    immediateRender: false,
  });
}

/**
 * Create scroll trigger configuration
 */
export function createScrollTrigger(trigger, options = {}) {
  const {
    start = 'top 80%',
    end = 'bottom 20%',
    scrub = false,
    markers = false,
    once = true,
  } = options;

  return {
    trigger,
    start,
    end,
    scrub,
    markers,
    once,
  };
}
