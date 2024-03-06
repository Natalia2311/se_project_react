
import { useEffect } from "react";

export function useEscape() {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
     
      }
    };

    document.addEventListener("keydown", handleEscape);

   
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };

  }, []);
}
