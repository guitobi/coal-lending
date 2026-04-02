import { Link } from "react-router";
import { scrollToElement } from "../utils/scrollUtils";

function NavButtonLink({ type, children, to, onClick }) {
  const styles = {
    primary:
      " px-3 py-2 lg:px-5 lg:py-3 rounded-lg transition-all hover:bg-neutral-700 hover:text-amber-600",
    logo: " flex h-full items-center gap-2 sm:gap-3 hover:scale-105 transition-all duration-300 group",
    mobile:
      " block py-3 px-4 transition-all hover:bg-neutral-700 hover:text-yellow-300",
  };
  const handleClick = (event) => {
    // Call the original onClick if provided
    if (onClick) {
      onClick(event);
    }

    // Check if this is a FAQ link and we're on the homepage
    if (to === "/faq") {
      const isOnHomePage =
        window.location.pathname === "/" ||
        window.location.pathname === "/index.html";

      if (isOnHomePage) {
        // Prevent default navigation
        event.preventDefault();

        // Scroll to the FAQ section
        scrollToElement("#faq", 100); // 100px offset to account for fixed header
      }
    }
  };

  return (
    <Link to={to} className={styles[type]} onClick={handleClick}>
      {children}
    </Link>
  );
}

export default NavButtonLink;
