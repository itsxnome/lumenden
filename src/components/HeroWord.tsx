import type { CSSProperties } from "react";
import styles from "./ui.module.css";

type Letter = { ch: string; r: number; y: number; s: number; ym?: number };

/**
 * Per-letter rotation, vertical offset and scale, matching the Skillry
 * Playful UI/UX (Ines) reference. `ym` is the tighter mobile vertical
 * offset used below 640px so letters don't collide when the stage shrinks.
 *
 * Fixed values, never random: the server and client must render identically.
 */
const PORTFOLIO: Letter[] = [
  { ch: "P", r: -8, y: 28, s: 1 },
  { ch: "O", r: 6, y: 72, s: 0.82, ym: 30 },
  { ch: "R", r: -10, y: 12, s: 1 },
  { ch: "T", r: 4, y: -30, s: 1.7 },
  // ── the portrait sits in the gap here ──
  { ch: "F", r: -14, y: 30, s: 0.92 },
  { ch: "O", r: 8, y: 4, s: 0.78 },
  { ch: "L", r: -6, y: 50, s: 1.05 },
  { ch: "I", r: 12, y: 18, s: 0.9 },
  { ch: "O", r: -5, y: 60, s: 0.7, ym: 30 },
];

/** Index the spacer is inserted *before* — splits PORT | FOLIO. */
const GAP_BEFORE = 4;

export function HeroWord() {
  return (
    // Split into individual letters, so hidden from assistive tech — the
    // heading carries a real "Portfolio" label instead of nine stray letters.
    <span className={styles.lw} aria-hidden>
      {PORTFOLIO.map((l, i) => (
        <span key={i} style={{ display: "contents" }}>
          {i === GAP_BEFORE ? <span className={styles.lwGap} aria-hidden /> : null}
          <span
            className={styles.heroLetter}
            style={
              {
                "--r": `${l.r}deg`,
                "--y": `${l.y}px`,
                ...(l.ym != null ? { "--ym": `${l.ym}px` } : {}),
                "--s": l.s,
                "--i": i,
              } as CSSProperties
            }
          >
            {l.ch}
          </span>
        </span>
      ))}
    </span>
  );
}
