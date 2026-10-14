import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { ProjectIndex } from "@/components/ProjectIndex";
import { DisplayWord } from "@/components/DisplayWord";
import styles from "@/components/ui.module.css";
import { focusItems, getProject, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Now",
  description: `What ${site.name} is working on right now.`,
};

export default function NowPage() {
  const shipping = ["yt-content-factory", "codebuddy", "rag-systems", "whatsapp-bots"]
    .map((slug) => getProject(slug))
    .filter((p) => p !== undefined);

  return (
    <div className="page">
      <div className="shell sectionPad">
        <div className="railRow">
          <p className="kicker">
            Now
          </p>
          <p className="kicker">This week</p>
        </div>
        <div className="displayHead">
          <h1 className="display">
            <DisplayWord>NOW</DisplayWord>
          </h1>
          <p className="lede">
            What&apos;s actually open on my desk this month — active builds and client
            work, not an archive.
          </p>
        </div>

        <div className={`${styles.split2} section`}>
          <div className={styles.panelInk}>
            <p className="kicker">
                Focus
            </p>
            <h2 className="h3" style={{ marginTop: 10 }}>
              On my plate
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
            <h2 className="h3">How I like to work</h2>
            <div className="prose" style={{ marginTop: 12 }}>
              <p>
                I&apos;d rather own a full pipeline than polish a demo. If something has
                to talk to Shopify, WhatsApp, a CRM, and a dashboard, that&apos;s usually
                where I fit.
              </p>
              <p>
                If that sounds like your problem, email me — I read every note.
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
          <div className="railRow">
            <h2 id="now-projects" className="h2">
              Related write-ups
            </h2>
            <Button href="/work" variant="secondary">
              All projects
            </Button>
          </div>
          <ProjectIndex projects={shipping} />
        </section>
      </div>
    </div>
  );
}
