"use client";

import { useEffect, useState } from "react";
import styles from "./ui.module.css";

const sections = [
  { id: "intro", label: "Lumenden" },
  { id: "lineup", label: "Lineup" },
  { id: "library", label: "Library" },
  { id: "hire", label: "Hire" },
] as const;

export function SectionNav() {
  const [active, setActive] = useState<string>("intro");
  const [show, setShow] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1500px)");
    const sync = () => setShow(mq.matches);
    sync();
    mq.addEventListener("change", sync);

    const nodes = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.2, 0.5, 1] },
    );

    nodes.forEach((n) => observer.observe(n));
    return () => {
      mq.removeEventListener("change", sync);
      observer.disconnect();
    };
  }, []);

  if (!show) return null;

  return (
    <nav className={styles.sectionNav} aria-label="On this page">
      {sections.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className={[
            styles.sectionNavLink,
            active === s.id ? styles.sectionNavActive : "",
          ].join(" ")}
        >
          {s.label}
        </a>
      ))}
    </nav>
  );
}
