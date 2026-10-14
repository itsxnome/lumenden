import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import type { Project } from "@/data/site";
import styles from "./ui.module.css";

/** Five hues, cycled by position so no two neighbours share a colour. */
const ACCENTS = ["c1", "c2", "c3", "c4", "c5"] as const;

export function accentFor(index: number) {
  return ACCENTS[index % ACCENTS.length];
}

/**
 * A project as a two-part plate: a colour field carrying the artwork on the
 * left, the facts on the right. The screenshot floats on the colour with its
 * own shadow rather than being cropped into a frame — which is what lets a
 * dense product UI still read as a designed object at this size.
 */
export function ProjectCard({
  project,
  index,
  compact = false,
}: {
  project: Project;
  index: number;
  compact?: boolean;
}) {
  const c = accentFor(index);
  // Prefer the square Notion mark so /work stays consistent; covers are for
  // case pages / galleries where full UI reads better at larger size.
  const shot = project.icon ?? project.image ?? project.poster ?? project.gallery?.[0];
  const isIcon = Boolean(project.icon) || (!project.image && !project.poster && Boolean(shot));

  const style = {
    "--accent": `var(--${c})`,
    "--accent-ink": `var(--${c}-ink)`,
    "--accent-soft": `var(--${c}-soft)`,
  } as CSSProperties;

  return (
    <Link
      href={`/work/${project.slug}`}
      className={[styles.card, compact ? styles.cardCompact : ""]
        .filter(Boolean)
        .join(" ")}
      style={style}
    >
      <div
        className={[styles.cardPanel, shot ? "" : styles.cardPanelBare]
          .filter(Boolean)
          .join(" ")}
      >
        <span className={styles.cardNum} aria-hidden>
          {String(index + 1).padStart(2, "0")}
        </span>
        {shot ? (
          <div
            className={[styles.cardShot, isIcon ? styles.cardShotIcon : ""]
              .filter(Boolean)
              .join(" ")}
          >
            <Image
              src={shot}
              alt=""
              fill
              sizes={compact ? "(max-width: 900px) 90vw, 260px" : "(max-width: 900px) 90vw, 420px"}
            />
          </div>
        ) : null}
      </div>

      <div className={styles.cardBody}>
        <p className={styles.cardEyebrow}>
          <span className={styles.cardDot} aria-hidden />
          {String(index + 1).padStart(2, "0")} / {project.category}
        </p>

        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardSummary}>{project.summary}</p>

        {!compact ? (
          <>
            <dl className={styles.cardFacts}>
              <div>
                <dt>Stack</dt>
                <dd>{project.stack.slice(0, 3).join(", ")}</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd>{project.status}</dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd>{project.eyebrow}</dd>
              </div>
            </dl>

            <p className={styles.cardImpact}>
              <span className={styles.cardPill}>{project.status}</span>
              {project.impact}
            </p>
          </>
        ) : null}

        <span className={styles.cardCta}>
          Read the case <span aria-hidden>→</span>
        </span>
      </div>
    </Link>
  );
}
