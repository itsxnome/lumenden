import type { Metadata } from "next";
import { Button } from "@/components/Button";
import styles from "@/components/ui.module.css";
import { education, site, stack } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name} — backend, Shopify, WhatsApp, and automation.`,
};

export default function AboutPage() {
  return (
    <div className="page">
      <div className="shell sectionPad">
        <div className="sectionRail">
          <p className="kicker">
            <span className="kickerDot" aria-hidden />
            About
          </p>
          <p className="kicker">{site.location}</p>
        </div>
        <h1 className="h1">
          Saad <span className="accent">Fazal.</span>
        </h1>
        <p className="lede" style={{ marginTop: 16 }}>
          {site.role}. Based remote. Six-plus years shipping for clients and my own products.
        </p>

        <div className={`${styles.split2} section`}>
          <div>
            <div className="prose">
              <p>
                I started as a web intern at Flaxen Media, moved into backend and
                automations, and now split time between Shopify work at Disruptive Brain
                and building products like EasyCloudAPI.
              </p>
              <p>
                The work people hire me for is usually messy: store data that has to leave
                Shopify, WhatsApp that has to hit CRM on time, or a reorder flow the
                platform doesn&apos;t support (Vulgrco). I like owning that end-to-end.
              </p>
              <p>
                <strong>{site.brand}</strong> is this portfolio — named after a prompt
                library I built. It&apos;s here so hiring managers can see the systems,
                not just a résumé list.
              </p>
              <div className="stack" style={{ marginTop: 8 }}>
                <Button href="/work" variant="primary">
                  See selected work
                </Button>
                <Button
                  href={site.links.linkedin}
                  variant="secondary"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>

          <div>
            <h2 className="h3">Education</h2>
            <ul className={styles.list} style={{ marginTop: 16 }}>
              {education.map((item) => (
                <li key={item.school} className={styles.listItem}>
                  <div className={styles.listTop}>
                    <strong>{item.detail}</strong>
                    <span className={styles.period}>{item.period}</span>
                  </div>
                  <p className="muted">{item.school}</p>
                </li>
              ))}
            </ul>
            <h3 className="h3" style={{ marginTop: 28, fontSize: "1.15rem" }}>
              Tools I use most
            </h3>
            <div className="stack" style={{ marginTop: 12 }}>
              {stack.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
