import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { DisplayWord } from "@/components/DisplayWord";
import styles from "@/components/ui.module.css";
import { experience, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Experience",
  description: `Work experience for ${site.name}: Flaxen Media, Disruptive Brain, EasyCloudAPI, and AI systems.`,
};

const employed = experience.filter((j) => !/own|independent|easycloud/i.test(j.org));
const own = experience.filter((j) => /own|independent|easycloud/i.test(j.org));

function ExperienceList({ items }: { items: typeof experience }) {
  return (
    <ol className={styles.list}>
      {items.map((job) => (
        <li key={`${job.org}-${job.role}-${job.track}`} className={styles.listItem}>
          <div className={styles.listTop}>
            <div>
              <p className={styles.period} style={{ marginBottom: 6 }}>
                {job.track}
              </p>
              <h2 className="h3">{job.role}</h2>
              <p className="muted">{job.org}</p>
            </div>
            <span className={styles.period}>{job.period}</span>
          </div>
          <ul
            style={{
              paddingLeft: 18,
              color: "var(--text-soft)",
              display: "grid",
              gap: 8,
              marginTop: 12,
            }}
          >
            {job.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}

export default function ExperiencePage() {
  return (
    <div className="page">
      <div className="shell sectionPad">
        <div className="railRow">
          <p className="kicker">
            Experience
          </p>
          <p className="kicker">6+ years</p>
        </div>
        <div className="displayHead">
          <h1 className="display">
            <DisplayWord>RESUME</DisplayWord>
          </h1>
          <p className="lede">
            Where the hours went — same companies, different kinds of work, plus the
            products I built myself.
          </p>
        </div>

        <div className={`${styles.panel} section`}>
          <p className="kicker" style={{ marginBottom: 16 }}>
            Employment
          </p>
          <ExperienceList items={employed} />
        </div>

        <div className={`${styles.panel} section`} style={{ marginTop: 24 }}>
          <p className="kicker" style={{ marginBottom: 16 }}>
            Own products · Independent
          </p>
          <ExperienceList items={own} />
        </div>

        <div className="section" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Button href="/work" variant="primary">
            See projects
          </Button>
          <Button href="/contact" variant="secondary">
            Hire {site.name.split(" ")[0]}
          </Button>
        </div>
      </div>
    </div>
  );
}
