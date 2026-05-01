import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls to the element matching the URL hash on route change.
 * Fixes React Router eating anchor links (e.g. /#cta).
 */
export function useHashScroll() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    // Small delay to let React render the target element
    const timer = setTimeout(() => {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [hash]);
}
