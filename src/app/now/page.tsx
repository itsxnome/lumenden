import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { ProjectCard } from "@/components/ProjectCard";
import styles from "@/components/ui.module.css";
import { focusItems, getProject, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Now",
  description: `What ${site.name} is shipping: YouTube factories, RAG, WhatsApp bots, voice AI.`,
};

export default function NowPage() {
  const shipping = ["yt-content-factory", "codebuddy", "rag-systems", "whatsapp-bots"]
    .map((slug) => getProject(slug))
    .filter(Boolean);

  return (
    <div className="page">
      <div className="shell sectionPad">
        <div className="sectionRail">
          <p className="kicker">
            <span className="kickerDot" aria-hidden />
            01 / Now
          </p>
          <p className="kicker">Active work</p>
        </div>
        <h1 className="h1">
          Now <span className="accent">shipping.</span>
        </h1>
        <p className="lede" style={{ marginTop: 16 }}>
          What I&apos;m building across content factories, RAG, and bots. Not archive work.
        </p>

        <div className={`${styles.split2} section`}>
          <div className={styles.panelInk}>
            <p className="kicker" style={{ color: "var(--text-on-ink-soft)" }}>
              <span className="kickerDot" aria-hidden />
              Focus
            </p>
            <h2 className="h3" style={{ marginTop: 10 }}>
              Currently in motion
            </h2>
            <ul className={styles.list} style={{ marginTop: 18 }}>
              {focusItems.map((item) => (
                <li key={item.title} className={styles.listItem}>
                  <strong>{item.title}</strong>
                  <p>{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.panel}>
            <h2 className="h3">Why it matters</h2>
            <div className="prose" style={{ marginTop: 12 }}>
              <p>
                Full pipelines, not demos: topic→video factories, retrieval that cites
                sources, WhatsApp bots with ACL, and voice products with real dashboards.
              </p>
              <p>
                If you need someone who owns AI + automation end-to-end, this is the current
                proof stream.
              </p>
            </div>
            <div style={{ marginTop: 20 }}>
              <Button href="/contact" variant="accent">
                Talk about a build
              </Button>
            </div>
          </div>
        </div>

        <section className="section" aria-labelledby="now-projects">
          <div className="sectionHead">
            <h2 id="now-projects" className="h2">
              Related project pages
            </h2>
            <Button href="/work" variant="secondary">
              Full library
            </Button>
          </div>
          <div className="bento">
            {shipping.map(
              (project) => project && <ProjectCard key={project.slug} project={project} />,
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
