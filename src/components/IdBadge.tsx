import Image from "next/image";
import { site } from "@/data/site";
import styles from "./ui.module.css";

/**
 * Lanyard ID badge. The whole card hangs from a clip and swings level on
 * hover or keyboard focus — transform-origin sits well above the card so it
 * pivots from the clip rather than its own centre.
 */
export function IdBadge() {
  return (
    <div className={styles.badgeWrap}>
      <div className={styles.badgeSwing}>
        <span className={styles.badgeClip} aria-hidden />
        <div className={styles.idCard}>
          <div className={styles.badgePhoto}>
            <Image
              src={site.avatar}
              alt=""
              fill
              sizes="220px"
              style={{ objectFit: "cover", objectPosition: "center top" }}
            />
          </div>

          <div className={styles.badgeMeta}>
            <div>
              <b>{site.name}</b>
              <small>{site.role}</small>
            </div>
            <span className={styles.badgeId}>LD-2026</span>
          </div>

          <div className={styles.badgeBars} aria-hidden>
            {Array.from({ length: 28 }, (_, i) => (
              <i key={i} />
            ))}
          </div>

          <div className={styles.badgeStripe} aria-hidden>
            <i />
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>
    </div>
  );
}
