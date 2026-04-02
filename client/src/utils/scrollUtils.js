/**
 * Utility function for smooth scrolling to an element
 * @param {string} selector - CSS selector of the target element
 * @param {number} offset - Offset from the top (optional)
 */
export const scrollToElement = (selector, offset = 0) => {
  const element = document.querySelector(selector);

  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

/**
 * Check if we're on the homepage and the target element exists
 * @param {string} targetPath - The path/route being navigated to
 * @param {string} targetSelector - The selector to scroll to
 * @returns {boolean} - Whether to perform scroll instead of navigation
 */
export const shouldScrollInsteadOfNavigate = (targetPath, targetSelector) => {
  // Check if we're currently on the homepage and navigating to the same page
  const isHomePage =
    window.location.pathname === "/" ||
    window.location.pathname === "/index.html";
  const isSamePageNavigation =
    targetPath === "/" || targetPath === "/index.html" || targetPath === "#faq";

  if (isHomePage && isSamePageNavigation) {
    const targetElement = document.querySelector(targetSelector);
    return !!targetElement;
  }

  return false;
};
