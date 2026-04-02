// Google Analytics 4 Integration

// Initialize Google Analytics with measurement ID
export const initGA = (measurementId) => {
  // Create script element for GA
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", measurementId, {
    page_path: window.location.pathname,
  });
};

// Track page views
export const trackPageView = (location, measurementId) => {
  if (window.gtag) {
    window.gtag("config", measurementId, {
      page_path: location.pathname + location.search + location.hash,
      page_title: document.title,
    });
  }
};

// Track custom events
export const trackEvent = (action, category, label, value, measurementId) => {
  if (window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
      send_to: measurementId,
    });
  }
};

// Track conversions
export const trackConversion = (conversionLabel, measurementId) => {
  if (window.gtag) {
    window.gtag("event", "conversion", {
      send_to: `${measurementId}/${conversionLabel}`,
    });
  }
};

// Custom hook to track page views automatically - REMOVED from utility file
// This should be implemented in a React component instead

// Enhanced e-commerce tracking functions
export const trackPurchase = (
  transactionId,
  value,
  currency = "USD",
  items = [],
  measurementId,
) => {
  if (window.gtag) {
    window.gtag("event", "purchase", {
      transaction_id: transactionId,
      value: value,
      currency: currency,
      items: items,
      send_to: measurementId,
    });
  }
};

export const trackAddToCart = (items = [], measurementId) => {
  if (window.gtag) {
    window.gtag("event", "add_to_cart", {
      items: items,
      send_to: measurementId,
    });
  }
};

export const trackViewItem = (items = [], measurementId) => {
  if (window.gtag) {
    window.gtag("event", "view_item", {
      items: items,
      send_to: measurementId,
    });
  }
};

export const trackBeginCheckout = (
  value,
  currency = "USD",
  items = [],
  measurementId,
) => {
  if (window.gtag) {
    window.gtag("event", "begin_checkout", {
      value: value,
      currency: currency,
      items: items,
      send_to: measurementId,
    });
  }
};
