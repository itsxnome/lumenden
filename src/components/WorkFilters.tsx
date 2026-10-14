"use client";

import { useMemo, useState } from "react";
import { categories, type Project } from "@/data/site";
import { ProjectCard } from "./ProjectCard";
import styles from "./ui.module.css";

export function WorkFilters({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  /** Counts sit on the chips, so you can see what a filter holds before using it. */
  const counts = useMemo(() => {
    const map = new Map<string, number>([["All", projects.length]]);
    for (const p of projects) map.set(p.category, (map.get(p.category) ?? 0) + 1);
    return map;
  }, [projects]);

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active, projects],
  );

  return (
    <>
      {/* role="group", not "toolbar" — toolbar owes the user arrow-key
          navigation; these are plain tabbable toggle buttons. */}
      <div className={styles.filters} role="group" aria-label="Filter work by category">
        {categories.map((cat) => {
          const n = counts.get(cat) ?? 0;
          if (n === 0) return null;
          return (
            <button
              key={cat}
              type="button"
              className={[styles.filter, active === cat ? styles.filterActive : ""]
                .filter(Boolean)
                .join(" ")}
              aria-pressed={active === cat}
              onClick={() => setActive(cat)}
            >
              {cat}
              <span className={styles.filterCount}>{n}</span>
            </button>
          );
        })}
      </div>

      <p className={styles.resultCount} role="status">
        {active === "All"
          ? `Showing all ${filtered.length} projects`
          : `Showing ${filtered.length} in ${active}`}
      </p>

      <h2 className="srOnly">
        {active === "All" ? "All projects" : `${active} projects`}
      </h2>

      <div className={styles.cardStack}>
        {filtered.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </>
  );
}
