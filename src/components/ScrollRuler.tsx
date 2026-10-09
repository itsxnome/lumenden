"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "./ui.module.css";

/* Only when side margins exist around the 1280 frame */
const DESKTOP_MIN = 1500;
const MAX_TICK = 100;
const TICK_STEP = 5;

export function ScrollRuler() {
  const [progress, setProgress] = useState(0);
  const [enabled, setEnabled] = useState(false);

  const ticks = useMemo(
    () => Array.from({ length: MAX_TICK / TICK_STEP + 1 }, (_, i) => i * TICK_STEP),
    [],
  );

  useEffect(() => {
    const root = document.documentElement;
    let frame = 0;

    const syncMode = () => {
      const desktop = window.innerWidth >= DESKTOP_MIN;
      setEnabled(desktop);
      if (desktop) root.setAttribute("data-ruler", "on");
      else root.removeAttribute("data-ruler");
    };

    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const max =
          Math.max(root.scrollHeight, document.body.scrollHeight) - window.innerHeight;
        const next = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
        setProgress(next);
      });
    };

    const onResize = () => {
      syncMode();
      update();
    };

    syncMode();
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(frame);
      root.removeAttribute("data-ruler");
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  if (!enabled) return null;

  const pct = Math.round(progress * 100);
  const label = String(pct).padStart(3, "0") + "%";

  return (
    <div className={styles.ruler} aria-hidden>
      <div className={styles.rulerScale}>
        {ticks.map((tick) => (
          <div
            key={tick}
            className={styles.rulerTick}
            style={{ top: `${tick}%` }}
            data-major={tick % 10 === 0 ? "true" : "false"}
          >
            {tick % 10 === 0 ? <span>{tick}</span> : null}
          </div>
        ))}
        <div className={styles.rulerNeedle} style={{ top: `${progress * 100}%` }}>
          <span className={styles.rulerPct}>{label}</span>
        </div>
      </div>
    </div>
  );
}
