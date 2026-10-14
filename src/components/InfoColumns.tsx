import { experience, focusItems, site, stack } from "@/data/site";
import styles from "./ui.module.css";

const CONTACT = [
  { label: site.email, sub: "Usually replies the same day", href: site.links.email, mark: "@" },
  { label: "LinkedIn", sub: "Work history and recommendations", href: site.links.linkedin, mark: "in" },
  { label: "Kaggle", sub: "Notebooks and experiments", href: site.links.kaggle, mark: "k" },
] as const;

/**
 * Three hairline columns under the intro: where I've worked, what's on the
 * bench right now, and how to reach me. All three read from existing data —
 * nothing here is invented.
 */
export function InfoColumns() {
  return (
    <div className={styles.cols3}>
      <div>
        <h2 className={styles.colH}>Experience</h2>
        <ul className={styles.xp}>
          {experience.slice(0, 4).map((job) => (
            <li key={`${job.org}-${job.role}`}>
              <b>{job.role}</b>
              <span>{job.org}</span>
              <span className={styles.xpPeriod}>{job.period}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className={styles.colH}>Building now</h2>
        <ul className={styles.xp}>
          {focusItems.map((item) => (
            <li key={item.title}>
              <b>{item.title}</b>
              <span>{item.detail}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className={styles.colH}>Contact</h2>
        <ul className={styles.clist}>
          {CONTACT.map((c) => (
            <li key={c.label}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <span className={styles.sq} aria-hidden>
                  {c.mark}
                </span>
                <span>
                  <b>{c.label}</b>
                  <small>{c.sub}</small>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <h2 className={`${styles.colH} ${styles.colHTools}`}>Toolkit</h2>
        <div className={styles.toolPills}>
          {stack.map((item) => (
            <span key={item} className={styles.toolPill}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
