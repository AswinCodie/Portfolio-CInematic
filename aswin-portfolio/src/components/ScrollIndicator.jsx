
import { useEffect, useState } from "react";
import "./ScrollIndicator.css";

const TICK_COUNT = 48;

export default function ScrollIndicator() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frameId = 0;

    const updateProgress = () => {
      if (frameId) return;

      frameId = requestAnimationFrame(() => {
        frameId = 0;

        const root = document.documentElement;
        const scrollHeight = root.scrollHeight - window.innerHeight;
        const nextProgress =
          scrollHeight > 0
            ? Math.min(1, Math.max(0, window.scrollY / scrollHeight))
            : 0;

        setProgress(nextProgress);
      });
    };

    updateProgress();

    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    const observer = new ResizeObserver(updateProgress);
    observer.observe(document.documentElement);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      observer.disconnect();
    };
  }, []);

  const activeTick = Math.round(progress * (TICK_COUNT - 1));

  return (
    <>
      <aside className="scroll-ruler" aria-hidden="true">
        <div className="scroll-ruler__ticks">
          {Array.from({ length: TICK_COUNT }, (_, index) => (
            <span
              key={index}
              className={`scroll-ruler__tick ${
                index === activeTick ? "scroll-ruler__tick--active" : ""
              }`}
            />
          ))}
        </div>

        <span
          className="scroll-ruler__marker"
          style={{ top: `${progress * 100}%` }}
        />
      </aside>

      <div
        className="page-progress"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />
    </>
  );
}
