import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import type { Project } from "@/data/site";
import { accentFor } from "./ProjectCard";
import styles from "./ui.module.css";

/**
 * The tall colour column used in the home row: a portrait card filled with the
 * project's accent, the artwork floating on it, a large numeral sunk behind
 * everything, and a circular "go" button that scales in on hover.
 */
export function ProjectColumn({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const c = accentFor(index);
  const shot = project.icon ?? project.image ?? project.poster ?? project.gallery?.[0];
  const isIcon = Boolean(project.icon);

  const style = {
    "--accent": `var(--${c})`,
    "--accent-ink": `var(--${c}-ink)`,
    "--accent-soft": `var(--${c}-soft)`,
  } as CSSProperties;

  return (
    <article className={styles.colItem}>
      {/* One link around card and caption together. Two links to the same place
          would double every project in the tab order, and the caption on its own
          is a 17px-tall target. aria-label keeps the announced name short. */}
      <Link
        href={`/work/${project.slug}`}
        className={styles.colLink}
        style={style}
        aria-label={project.title}
      >
        <span className={styles.col}>
          <span className={styles.colBig} aria-hidden>
            {index + 1}
          </span>
          {shot ? (
            <span
              className={[styles.colDev, isIcon ? styles.colDevIcon : ""]
                .filter(Boolean)
                .join(" ")}
            >
              <Image src={shot} alt="" fill sizes="(max-width: 700px) 60vw, 220px" />
            </span>
          ) : null}
          <span className={styles.colGo} aria-hidden>
            →
          </span>
        </span>

        <span className={styles.colMeta}>
          {String(index + 1).padStart(2, "0")} / {project.category}
        </span>
        <h3 className={styles.colTitle}>{project.title}</h3>
        <span className={styles.colSummary}>{project.summary}</span>
      </Link>
    </article>
  );
}
