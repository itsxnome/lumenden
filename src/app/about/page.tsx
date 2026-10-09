import type { Metadata } from "next";
import { Button } from "@/components/Button";
import styles from "@/components/ui.module.css";
import { education, site, stack } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name} - automation, backend, AI systems, and Shopify development.`,
};

export default function AboutPage() {
  return (
    <div className="page">
      <div className="shell sectionPad">
        <div className="sectionRail">
          <p className="kicker">
            <span className="kickerDot" aria-hidden />
            01 / About
          </p>
          <p className="kicker">{site.location}</p>
        </div>
        <h1 className="h1">
          Saad <span className="accent">Fazal.</span>
        </h1>
        <p className="lede" style={{ marginTop: 16 }}>
          {site.role}. {site.location}.
        </p>

        <div className={`${styles.split2} section`}>
          <div>
            <div className="prose">
              <p>
                I&apos;m an automation and backend developer with 6+ years shipping web apps,
                Shopify tooling, workflow systems, and AI products that businesses actually
                run on.
              </p>
              <p>
                Day-to-day: YouTube content factories (topic→script→media→song→video), RAG
                systems, WhatsApp bots (including CodeBuddy), voice agents, GHL flows, and
                Claude motion skills.
              </p>
              <p>
                This site is branded <strong>{site.brand}</strong>, named after the prompt
                library project, and collects the systems that matter for hiring.
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
              Toolkit
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
