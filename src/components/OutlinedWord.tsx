import styles from "./ui.module.css";

/**
 * The oversized outlined word that sits behind the project numbers.
 *
 * This is an SVG <text> rather than CSS: it needs a paper fill with a visible
 * stroke on top (`paint-order: stroke fill`) and a stroke that can be drawn on
 * via stroke-dashoffset. CSS `-webkit-text-stroke` paints the stroke under the
 * fill and cannot be animated that way.
 *
 * Decorative — the section's real heading is a visually hidden <h2>.
 */
export function OutlinedWord({ children }: { children: string }) {
  // Rough advance width per character for the viewBox, so long and short
  // words both sit flush to the edges.
  const width = Math.max(children.length * 62, 240);
  return (
    <svg
      className={styles.outlinedWord}
      viewBox={`0 0 ${width} 92`}
      role="presentation"
      aria-hidden
      focusable="false"
    >
      <text x="50%" y="72" textAnchor="middle">
        {children}
      </text>
    </svg>
  );
}
