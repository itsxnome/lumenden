import Link from "next/link";
import { nav, site } from "@/data/site";
import styles from "./ui.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className="shell">
        <div className={styles.footerGrid}>
          <div>
            <div className={styles.footerBrand}>
              Lumen<span className={styles.brandMark}>den</span>
            </div>
            <p className="muted" style={{ marginTop: 12, maxWidth: "34ch" }}>
              {site.name}&apos;s portfolio — backend, Shopify, WhatsApp, and automation
              work from client jobs and my own products.
            </p>
          </div>
          <div className={styles.footerLinks}>
            <strong>Navigate</strong>
            {nav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <Link href="/contact">Contact</Link>
          </div>
          <div className={styles.footerLinks}>
            <strong>Connect</strong>
            <a href={site.links.email}>{site.email}</a>
            <a href={site.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={site.links.kaggle} target="_blank" rel="noreferrer">
              Kaggle
            </a>
          </div>
        </div>
        <div className={styles.footerMeta}>
          <span>
            © {new Date().getFullYear()} {site.brand}
          </span>
          <span>{site.location}</span>
        </div>
      </div>
    </footer>
  );
}
