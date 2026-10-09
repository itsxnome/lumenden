import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { FeaturedRail } from "@/components/FeaturedRail";
import { HeroLinks } from "@/components/HeroLinks";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionNav } from "@/components/SectionNav";
import styles from "@/components/ui.module.css";
import { projects, site } from "@/data/site";

/** Craft monograms — one visual system, no AI mascots / random screenshots */
const iconTiles = [
  { code: "EC", label: "EasyCloud", href: "/work/easycloudapi", accent: "#6a9eff", mark: "◈" },
  { code: "YT", label: "YT factory", href: "/work/yt-content-factory", accent: "#f87171", mark: "▶" },
  { code: "SH", label: "Shopify", href: "/work/shopify-apps", accent: "#34d399", mark: "▣" },
  { code: "CB", label: "CodeBuddy", href: "/work/codebuddy", accent: "#a78bfa", mark: "⌘" },
  { code: "VX", label: "Voice AI", href: "/work/voice-ai-saas", accent: "#2dd4bf", mark: "◎" },
  { code: "RG", label: "RAG", href: "/work/rag-systems", accent: "#fbbf24", mark: "⇄" },
] as const;

export default function HomePage() {
  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured).slice(0, 3);

  return (
    <div className={styles.craftPage}>
      <div className={styles.craftFrame}>
        <section id="intro" className={styles.hero} aria-labelledby="home-title">
          <div className={styles.heroTop}>
            <p className="kicker">
              <span className="kickerDot" aria-hidden />
              Portfolio
            </p>
            <p className="kicker">Open to remote · 6+ years</p>
          </div>

          <div className={`${styles.heroCopy} rise`}>
            <p className={styles.heroEyebrow}>{site.role}</p>
            <h1 id="home-title" className={styles.heroTitle}>
              Hi — I&apos;m <em>Saad.</em>
            </h1>
            <p className={styles.heroRole}>
              I build backends, Shopify apps, WhatsApp systems, and automations that stay
              up after launch. Recent work includes Vulgrco&apos;s custom product reorder
              (Shopify has no native path for that), EasyCloudAPI, and delivery for Flaxen
              Media and Disruptive Brain.
            </p>
            <div className={styles.heroActions}>
              <Button href="/work" variant="primary">
                See my work
              </Button>
              <Button href="/contact" variant="secondary">
                Email me
              </Button>
            </div>
            <HeroLinks />
          </div>

          <div className={styles.iconRail} aria-label="Selected projects">
            {iconTiles.map((tile) => (
              <Link
                key={tile.code}
                href={tile.href}
                className={styles.iconTile}
                style={{ ["--tile-accent" as string]: tile.accent }}
              >
                <span className={styles.iconTileMark} aria-hidden>
                  <span className={styles.iconTileGlyph}>{tile.mark}</span>
                  <span className={styles.iconTileCode}>{tile.code}</span>
                </span>
                <span className={styles.iconTileName}>{tile.label}</span>
              </Link>
            ))}
          </div>
        </section>

        <section
          id="lineup"
          className={styles.lineupSection}
          aria-labelledby="featured-title"
        >
          <div className={styles.lineupHead}>
            <div>
              <p className="kicker">
                <span className="kickerDot" aria-hidden />
                Selected work
              </p>
              <h2 id="featured-title" className="h2" style={{ marginTop: 14 }}>
                Things I&apos;ve shipped.
              </h2>
            </div>
            <p className={styles.lineupAside}>
              Real projects with pipelines, not slide decks. Open a card for how it was
              built.
            </p>
          </div>
          <FeaturedRail projects={featured} />
        </section>

        <section
          id="library"
          className={styles.frameSection}
          aria-labelledby="more-title"
        >
          <div className={styles.lineupHead}>
            <div>
              <p className="kicker">
                <span className="kickerDot" aria-hidden />
                More
              </p>
              <h2 id="more-title" className="h2" style={{ marginTop: 14 }}>
                Also worth a look.
              </h2>
            </div>
            <Button href="/work" variant="secondary">
              All projects
            </Button>
          </div>
          <div className={styles.libraryGrid}>
            {more.map((project, i) => (
              <ProjectCard
                key={project.slug}
                project={{ ...project, size: "sm" }}
                index={i}
                sized={false}
              />
            ))}
          </div>
        </section>

        <section
          id="hire"
          className={styles.frameSection}
          aria-labelledby="cta-title"
        >
          <div className={styles.hirePanel}>
            <div className={styles.hireCopy}>
              <p className="kicker">
                <span className="kickerDot" aria-hidden />
                Hire
              </p>
              <h2 id="cta-title" className={styles.hireTitle}>
                Got a messy problem to ship?
              </h2>
              <p className={styles.hireLede}>
                I&apos;m strongest when the work spans backend, integrations, and the
                product surface — Shopify, WhatsApp, automations, or AI that has to cite
                sources.
              </p>
              <div className={styles.heroActions}>
                <Button href="/contact" variant="primary">
                  Get in touch
                </Button>
                <Button href="/experience" variant="secondary">
                  Experience
                </Button>
              </div>
            </div>
            <div className={styles.hireVisual} aria-hidden>
              <Image
                src="/work/easycloud/inbox.png"
                alt=""
                fill
                sizes="(max-width: 900px) 100vw, 42vw"
                style={{ objectFit: "cover", objectPosition: "top left" }}
              />
            </div>
          </div>
        </section>
      </div>
      <SectionNav />
    </div>
  );
}
