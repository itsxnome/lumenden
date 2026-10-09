"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/data/site";
import styles from "./ui.module.css";

const items = [
  { label: "LinkedIn", href: site.links.linkedin, external: true },
  { label: "Kaggle", href: site.links.kaggle, external: true },
  { label: "Work", href: "/work", external: false },
  { label: "Contact", href: "/contact", external: false },
] as const;

export function HeroLinks() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className={styles.heroLinks} aria-label="Quick links">
      <span className={styles.heroLinksLabel}>Reach</span>
      <button type="button" className={styles.heroLink} onClick={copyEmail}>
        {copied ? "Copied" : "Copy email"}
      </button>
      <a href={site.links.email} className={styles.heroLink}>
        Email
      </a>
      {items.map((item) =>
        item.external ? (
          <a
            key={item.label}
            href={item.href}
            className={styles.heroLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.label}
          </a>
        ) : (
          <Link key={item.label} href={item.href} className={styles.heroLink}>
            {item.label}
          </Link>
        ),
      )}
    </div>
  );
}
