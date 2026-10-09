import styles from "./ui.module.css";

/** Lumenden craft stamp — square + corner tick. Reuse as a signature motif. */
export function Stamp({
  size = "md",
  className = "",
}: {
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  return (
    <span
      className={[styles.stamp, styles[`stamp_${size}`], className].filter(Boolean).join(" ")}
      aria-hidden
    />
  );
}
