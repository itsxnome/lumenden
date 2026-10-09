"use client";

import { useMemo, useState } from "react";
import { categories, type Project } from "@/data/site";
import { ProjectCard } from "./ProjectCard";
import styles from "./ui.module.css";

export function WorkFilters({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => p.category === active);
  }, [active, projects]);

  return (
    <>
      <div className={styles.filters} role="toolbar" aria-label="Filter work by category">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            className={[styles.filter, active === cat ? styles.filterActive : ""].join(" ")}
            aria-pressed={active === cat}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className={styles.panel}>
          <h2 className="h3">No projects in this category</h2>
          <p className="muted">Try another filter or view all work.</p>
        </div>
      ) : (
        <div className="bento">
          {filtered.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      )}
    </>
  );
}
