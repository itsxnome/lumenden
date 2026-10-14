import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { Button } from "@/components/Button";
import { HeroLinks } from "@/components/HeroLinks";
import { HeroWord } from "@/components/HeroWord";
import { IdBadge } from "@/components/IdBadge";
import { InfoColumns } from "@/components/InfoColumns";
import { OutlinedWord } from "@/components/OutlinedWord";
import { ProjectColumn } from "@/components/ProjectColumn";
import styles from "@/components/ui.module.css";
import { projects, site } from "@/data/site";

/** Notion marks — same set as the project columns, shown full (no crop). */
const proofFrames = [
  {
    src: "/work/icons/ec.png",
    cap: "EasyCloudAPI — multi-tenant WhatsApp inbox",
  },
  {
    src: "/work/icons/sh.png",
    cap: "Shopify reorder — cart reconstruct outside the defaults",
  },
  {
    src: "/work/icons/yt.png",
    cap: "YouTube factory — topic in, episode assets out",
  },
] as const;

/** Where each numeral sits over the outlined word, as % of the box. */
const NUM_POS = [
  { left: "8%", top: "62%" },
  { left: "27%", top: "6%" },
  { left: "52%", top: "74%" },
  { left: "70%", top: "30%" },
  { left: "88%", top: "4%" },
] as const;

/** Draft copy — rewrite in your own words if any of it reads off. */
const steps = [
  {
    title: "Find out what actually breaks",
    body: "Before I design a schema I want the failure cases: the webhook that arrives twice, the token that expires at 2am, the merchant with 400 variants. Those decide the shape far more than the happy path does.",
  },
  {
    title: "Keep the slow work off the request path",
    body: "Webhooks get a fast acknowledgement and a queue. Meta gets its 200 in milliseconds, the worker takes as long as it needs, and a retry is a normal event rather than an incident.",
  },
  {
    title: "Build the ops surface, not just the endpoint",
    body: "An integration nobody can inspect becomes someone's 3am problem. Inbox, logs, usage, manual retry — the boring screens are what make a system supportable after handover.",
  },
  {
    title: "Hand it over so it survives me",
    body: "Config over hardcoding, error paths that say what went wrong, and a merchant or ops person who can run it without opening a terminal.",
  },
] as const;

export default function HomePage() {
  const featured = projects.filter((p) => p.featured).slice(0, 5);
  const live = projects.filter((p) => p.status === "Live").length;

  return (
    <div className={styles.craftPage}>
      <div className={styles.craftFrame}>
        {/* ── Hero ─────────────────────────────────────────── */}
        <section className={styles.hero} aria-labelledby="home-title">
          <div className={styles.heroStage}>
            <h1 id="home-title" className={styles.heroWord}>
              <span className="srOnly">Portfolio</span>
              <HeroWord />
            </h1>

            <div className={styles.heroPortrait}>
              <Image
                src={site.portrait}
                alt=""
                fill
                priority
                sizes="(max-width: 700px) 55vw, 380px"
                style={{ objectFit: "contain", objectPosition: "bottom center" }}
              />
            </div>

            <p className={styles.heroName}>{site.name}</p>

            <a className={styles.heroScroll} href="#systems">
              See the work <i aria-hidden>↓</i>
            </a>
          </div>
        </section>

        {/* ── Intro: badge + greeting + stats ──────────────── */}
        <section className={styles.introSection} aria-labelledby="intro-title">
          <div className={styles.introGrid}>
            <IdBadge />

            <div className={styles.introCopy}>
              <h2 id="intro-title" className={styles.introTitle}>
                Hi, I&apos;m <span className="accent">Saad.</span>
              </h2>
              <p className="lede" style={{ marginTop: "var(--s-5)" }}>
                Shopify apps, WhatsApp platforms on Meta Cloud API, Node backends, n8n
                automation. Client delivery for Disruptive Brain and Flaxen Media;
                EasyCloudAPI is my own.
              </p>
              <p className="lede" style={{ marginTop: "var(--s-4)" }}>
                The work I get called for is usually the part with no documented path —
                a reorder flow the platform does not support, a queue that has to hold
                at 2am, an inbox someone has to run on Monday.
              </p>

              <div className={styles.heroActions} style={{ marginTop: "var(--s-6)" }}>
                <Button href="/work" variant="primary">
                  Browse the work
                </Button>
                <Button href="/contact" variant="secondary">
                  Get in touch
                </Button>
              </div>

              <div style={{ marginTop: "var(--s-6)" }}>
                <HeroLinks />
              </div>

              <dl className={styles.stats}>
                <div className={styles.stat}>
                  <strong>6+ years</strong>
                  <span>Building backends, integrations and automation for clients</span>
                </div>
                <div className={styles.stat}>
                  <strong>{projects.length}</strong>
                  <span>Systems written up here, with the pipeline for each</span>
                </div>
                <div className={styles.stat}>
                  <strong>{live} live</strong>
                  <span>Running in production rather than sitting in a repo</span>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* ── Three hairline columns ───────────────────────── */}
        <section className={styles.frameSection} aria-label="Experience, current work and contact">
          <InfoColumns />
        </section>

        {/* ── Outlined word + numbered project columns ─────── */}
        <section id="systems" className={styles.frameSection} aria-labelledby="systems-title">
          <h2 id="systems-title" className="srOnly">
            Selected systems
          </h2>

          <div className={styles.indexHead}>
            <OutlinedWord>SYSTEMS</OutlinedWord>
            {featured.map((project, i) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className={styles.wordNum}
                style={NUM_POS[i] as CSSProperties}
                aria-label={`${String(i + 1).padStart(2, "0")} — ${project.title}`}
              >
                <span aria-hidden>{String(i + 1).padStart(2, "0")}</span>
              </Link>
            ))}
          </div>

          <div className={styles.indexIntro}>
            <p>
              Five systems, numbered in the order I would walk you through them. Each
              one starts with the problem and ends with what shipped.
            </p>
            <Button href="/work" variant="secondary">
              All {projects.length} projects
            </Button>
          </div>

          <div className={styles.columns}>
            {featured.map((project, i) => (
              <ProjectColumn key={project.slug} project={project} index={i} />
            ))}
          </div>
        </section>

        {/* ── Process ──────────────────────────────────────── */}
        <section className={styles.frameSection} aria-labelledby="process-title">
          <div className={styles.lineupHead}>
            <div>
              <p className="kicker">How I work</p>
              <h2 id="process-title" className="h2">
                What I do before writing the schema
              </h2>
            </div>
          </div>
          <div className={styles.steps}>
            {steps.map((step, i) => (
              <div key={step.title} className={styles.step}>
                <span className={styles.stepNum} aria-hidden>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className={styles.stepBody}>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Proof ────────────────────────────────────────── */}
        <section className={styles.frameSection} aria-labelledby="proof-title">
          <p className="kicker">From the products</p>
          <h2 id="proof-title" className="srOnly">
            Screenshots
          </h2>
          <div className={styles.proofStrip} style={{ marginTop: "var(--s-6)" }}>
            {proofFrames.map((frame) => (
              <figure key={frame.cap} className={styles.proofItem}>
                <div className={styles.proofThumb}>
                  <Image
                    src={frame.src}
                    alt={frame.cap}
                    fill
                    sizes="(max-width: 900px) 90vw, 46vw"
                  />
                </div>
                <figcaption className={styles.proofCap}>{frame.cap}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <aside className={styles.deskQuote}>
          <p>
            “Shopify wouldn&apos;t give us custom product reordering — so we built the
            cart reconstruct ourselves.”
          </p>
          <cite>— From the VulgrCo reorder build</cite>
        </aside>

        {/* ── Hire ─────────────────────────────────────────── */}
        <section className={styles.hirePanel} aria-labelledby="cta-title">
          <div className={styles.hireVisual} aria-hidden>
            <span className={`${styles.blob} ${styles.blob1}`} />
            <span className={`${styles.blob} ${styles.blob2}`} />
            <span className={`${styles.blob} ${styles.blob3}`} />
            <span className={`${styles.blob} ${styles.blob4}`} />
            <span className={`${styles.blob} ${styles.blob5}`} />
          </div>
          <div className={styles.hireCopy}>
            <h2 id="cta-title" className={styles.hireTitle}>
              Got a messy problem to ship?
            </h2>
            <p className={styles.hireLede}>
              I&apos;m strongest when the work spans backend, integrations and the product
              surface — Shopify, WhatsApp, automations, or retrieval that has to cite
              sources.
            </p>
            <div className={styles.heroActions}>
              <Button href="/contact" variant="primary">
                Start a project
              </Button>
              <Button href="/experience" variant="secondary">
                Read the resume
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
