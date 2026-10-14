import type { CSSProperties } from "react";

/** Per-letter tilt and lift. Fixed values, not random, so the server and the
 *  client render the same markup and the word never shifts on hydration. */
const TILT = [-5, 7, -9, 4, -3, 8, -6, 5, -4, 6];
const LIFT = [0, -0.05, 0.04, -0.03, 0.05, -0.04, 0.02, -0.05, 0.03, -0.02];

/**
 * The oversized page word. Letters are individually rotated so it reads as
 * drawn rather than typed — the single biggest cue that carries the playful
 * tone. Spaces are preserved as real gaps.
 */
export function DisplayWord({ children }: { children: string }) {
  return (
    <>
      {children.split("").map((ch, i) => {
        if (ch === " ") return <span key={i}>&nbsp;</span>;
        const style = {
          "--tilt": `${TILT[i % TILT.length]}deg`,
          "--lift": `${LIFT[i % LIFT.length]}em`,
        } as CSSProperties;
        return (
          <span key={i} style={style}>
            {ch}
          </span>
        );
      })}
    </>
  );
}
