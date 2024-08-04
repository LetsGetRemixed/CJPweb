import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        const yOffset = -80; // Adjust this based on your fixed navbar height
        const yPosition =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: yPosition, behavior: "smooth" });
      }
    }
  }, [pathname, hash]);

  return null;
}

export default ScrollToTop;
