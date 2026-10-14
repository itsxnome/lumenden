import styles from "./ui.module.css";

/** Lumenden monogram — the rounded-square mark used in the header and footer. */
export function Stamp({ className = "" }: { className?: string }) {
  return (
    <span className={[styles.stamp, className].filter(Boolean).join(" ")} aria-hidden>
      LD
    </span>
  );
}
