import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import styles from "@/components/ui.module.css";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name} - ${site.email}`,
};

export default function ContactPage() {
  return (
    <div className="page">
      <div className="shell sectionPad">
        <div className="sectionRail">
          <p className="kicker">
            <span className="kickerDot" aria-hidden />
            01 / Contact
          </p>
          <p className="kicker">{site.email}</p>
        </div>
        <h1 className="h1">
          Let&apos;s <span className="accent">build.</span>
        </h1>
        <p className="lede" style={{ marginTop: 16 }}>
          AI products, automations, voice agents, WhatsApp systems, Shopify apps. Tell me
          what you need shipped.
        </p>

        <div className={`${styles.split2} section`}>
          <div className={styles.panel}>
            <h2 className="h3">Send a message</h2>
            <div style={{ marginTop: 16 }}>
              <ContactForm />
            </div>
          </div>
          <aside className={styles.panelInk}>
            <h2 className="h3">Direct</h2>
            <ul className={styles.list} style={{ marginTop: 16 }}>
              <li className={styles.listItem}>
                <strong>Email</strong>
                <p>
                  <a href={site.links.email}>{site.email}</a>
                </p>
              </li>
              <li className={styles.listItem}>
                <strong>LinkedIn</strong>
                <p>
                  <a href={site.links.linkedin} target="_blank" rel="noreferrer">
                    linkedin.com/in/mrsaadfazal1
                  </a>
                </p>
              </li>
              <li className={styles.listItem}>
                <strong>Kaggle</strong>
                <p>
                  <a href={site.links.kaggle} target="_blank" rel="noreferrer">
                    kaggle.com/mrsaadfazal
                  </a>
                </p>
              </li>
              <li className={styles.listItem}>
                <strong>Availability</strong>
                <p>{site.location}</p>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </div>
  );
}
