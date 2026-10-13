import { useEffect, useState } from "react";
import "./Loader.css";

function getReducedMotionPreference() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function Loader({ onComplete }) {
  const [isExiting, setIsExiting] = useState(false);
  const [prefersReducedMotion] = useState(getReducedMotionPreference);

  useEffect(() => {
    const exitTimer = window.setTimeout(() => {
      setIsExiting(true);
    }, prefersReducedMotion ? 200 : 900);

    const completeTimer = window.setTimeout(
      onComplete,
      prefersReducedMotion ? 200 : 1180
    );

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(completeTimer);
    };
  }, [onComplete, prefersReducedMotion]);

  return (
    <div
      className={`portfolio-loader${isExiting ? " portfolio-loader--exiting" : ""}`}
      role="status"
      aria-label="Loading portfolio"
    >
      <div className="portfolio-loader__prompt" aria-hidden="true">
        <span className="portfolio-loader__prompt-mark">&gt;</span>
        <span>loading</span>
        <span className="portfolio-loader__cursor" />
      </div>
    </div>
  );
}
