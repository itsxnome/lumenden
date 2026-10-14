import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/site";
import styles from "./ui.module.css";

/**
 * Typographic index of projects. Each row carries the project's own mark —
 * either its square product icon or a frame from its real screenshot — so the
 * list reads as work rather than a table of contents. Projects with neither
 * fall back to the index number, which is a deliberate blank, not a gap.
 */
export function ProjectIndex({ projects }: { projects: Project[] }) {
  return (
    <ol className={styles.index}>
      {projects.map((project, i) => {
        const mark = project.icon ?? project.image ?? project.poster;
        return (
          <li key={project.slug}>
            <Link href={`/work/${project.slug}`} className={styles.indexRow}>
              <span className={styles.indexMark} aria-hidden>
                {mark ? (
                  <Image src={mark} alt="" fill sizes="56px" />
                ) : (
                  <span className={styles.indexNum}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                )}
              </span>
              <span className={styles.indexTitle}>{project.title}</span>
              <span className={styles.indexNote}>{project.eyebrow}</span>
              <span className={styles.indexStatus}>{project.status}</span>
              <span className={styles.indexArrow} aria-hidden>
                →
              </span>
            </Link>
          </li>
        );
      })}
    </ol>
  );
}
