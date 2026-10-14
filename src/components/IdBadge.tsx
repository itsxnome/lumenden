import Image from "next/image";
import { site } from "@/data/site";
import styles from "./ui.module.css";

/**
 * Studio-pass badge matching the Skillry / Ines reference: fabric lanyard
 * straps, metal stitch clip, slot, photo, meta, barcode bars, colour stripe.
 * The whole card swings level on hover / focus from the clip above.
 */
export function IdBadge() {
  return (
    <div className={styles.badgeWrap}>
      <div className={styles.lanyard} aria-hidden>
        <span className={styles.stitch} />
      </div>

      <div className={styles.badgeSwing}>
        <div
          className={styles.idCard}
          tabIndex={0}
          aria-label={`Studio pass for ${site.name}, ${site.role}`}
        >
          <span className={styles.badgeSlot} aria-hidden />

          <div className={styles.badgePhoto}>
            <Image
              src={site.avatar}
              alt=""
              fill
              sizes="220px"
              style={{ objectFit: "contain", objectPosition: "center bottom" }}
            />
          </div>

          <div className={styles.badgeMeta}>
            <div>
              <b>{site.name}</b>
              <small>{site.role}</small>
            </div>
            <span className={styles.badgeId}>
              LD-2026
              <br />
              All areas
            </span>
          </div>

          <div className={styles.badgeBars} aria-hidden>
            {Array.from({ length: 48 }, (_, i) => (
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
