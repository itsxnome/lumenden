"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, type CSSProperties } from "react";
import type { Project } from "@/data/site";
import styles from "./ui.module.css";

const spanClass: Record<Project["size"], string> = {
  xl: "span8",
  lg: "span4",
  md: "span6",
  sm: "span4",
};

export function ProjectCard({
  project,
  sized = true,
  index,
  variant = "grid",
  accent = "#6a9eff",
}: {
  project: Project;
  sized?: boolean;
  index?: number;
  variant?: "grid" | "slide" | "lineup";
  accent?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const num = typeof index === "number" ? String(index + 1).padStart(2, "0") : null;
  const isLineup = variant === "lineup";

  return (
    <Link
      href={`/work/${project.slug}`}
      className={[
        isLineup
          ? styles.lineupCard
          : variant === "slide"
            ? styles.slideCard
            : sized
              ? spanClass[project.size]
              : styles.libraryCard,
        styles.card,
        isLineup ? styles.cardLineup : "",
        "rise",
      ]
        .filter(Boolean)
        .join(" ")}
      style={isLineup ? ({ ["--card-accent"]: accent } as CSSProperties) : undefined}
      onMouseEnter={() => void videoRef.current?.play().catch(() => undefined)}
      onMouseLeave={() => {
        if (!videoRef.current) return;
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }}
      onFocus={() => void videoRef.current?.play().catch(() => undefined)}
      onBlur={() => {
        if (!videoRef.current) return;
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }}
    >
      {isLineup ? (
        <div className={styles.lineupLabel}>
          <span className={styles.lineupNum}>{num}</span>
          <span className={styles.lineupCat}>{project.eyebrow}</span>
        </div>
      ) : null}

      <div className={styles.cardMedia}>
        {project.video ? (
          <video
            ref={videoRef}
            src={project.video}
            poster={project.poster || project.image}
            muted
            loop
            playsInline
            preload="metadata"
          />
        ) : project.image ? (
          <Image
            src={project.image}
            alt=""
            fill
            sizes={isLineup ? "(max-width: 900px) 100vw, 25vw" : "(max-width: 900px) 100vw, 33vw"}
            style={{ objectFit: "cover", objectPosition: "center center" }}
          />
        ) : (
          <div className={styles.cardMediaFallback} />
        )}
      </div>

      <div className={styles.cardBody}>
        {!isLineup ? (
          <div className={styles.cardMeta}>
            {num ? <span className={styles.cardIndex}>{num}</span> : null}
            <span className={styles.badge}>{project.category}</span>
            <span className={`${styles.badge} ${styles.badgeAccent}`}>{project.status}</span>
          </div>
        ) : (
          <div className={styles.cardMeta}>
            <span className={styles.badge}>{project.category}</span>
            <span className={`${styles.badge} ${styles.badgeAccent}`}>{project.status}</span>
          </div>
        )}
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardSummary}>{project.summary}</p>
        <p className={styles.cardImpact}>{project.impact}</p>
        <span className={styles.cardCta}>
          Explore {isLineup ? project.title.split(" ")[0] : "case"}{" "}
          <span aria-hidden>↗</span>
        </span>
      </div>
    </Link>
  );
}
