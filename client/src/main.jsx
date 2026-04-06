import "./utils/i18n";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import { registerServiceWorker } from "./utils/registerServiceWorker.js";

// Register GSAP plugins globally
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Configure GSAP for mobile devices
if (window.innerWidth < 768) {
  gsap.config({
    force3D: true, // Use GPU acceleration
    nullTargetWarn: false,
  });

  ScrollTrigger.config({
    limitCallbacks: true,
    syncInterval: 150, // Less frequent updates on mobile
  });
}

import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
);

// Register service worker for PWA functionality
registerServiceWorker();
