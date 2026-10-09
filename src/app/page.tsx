import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { FeaturedRail } from "@/components/FeaturedRail";
import { HeroLinks } from "@/components/HeroLinks";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionNav } from "@/components/SectionNav";
import { Stamp } from "@/components/Stamp";
import styles from "@/components/ui.module.css";
import { projects, site } from "@/data/site";

const iconTiles = [
  { code: "EC", label: "EasyCloud", href: "/work/easycloudapi", accent: "#7a9eff", mark: "◈" },
  { code: "YT", label: "YT factory", href: "/work/yt-content-factory", accent: "#c4a574", mark: "▶" },
  { code: "SH", label: "Shopify", href: "/work/shopify-apps", accent: "#8fbc8f", mark: "▣" },
  { code: "CB", label: "CodeBuddy", href: "/work/codebuddy", accent: "#9a8fc4", mark: "⌘" },
  { code: "VX", label: "Voice AI", href: "/work/voice-ai-saas", accent: "#6aada0", mark: "◎" },
  { code: "RG", label: "RAG", href: "/work/rag-systems", accent: "#c4a35a", mark: "⇄" },
] as const;

const proofFrames = [
  {
    src: "/work/easycloud/inbox.png",
    cap: "EasyCloud · team inbox",
  },
  {
    src: "/work/generated/yt-ui-1.png",
    cap: "YouTube factory · wizard",
  },
  {
    src: "/work/shopify/automation.png",
    cap: "Shopify · merchant tooling",
  },
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
              <Stamp size="sm" />
              Portfolio
            </p>
            <p className="kicker">Open to remote · 6+ years</p>
          </div>

          <div className={styles.heroSplit}>
            <div className={`${styles.heroCopy} rise`}>
              <p className={styles.heroEyebrow}>{site.role}</p>
              <h1 id="home-title" className={styles.heroTitle}>
                Hi — I&apos;m <span className="displayName">Saad.</span>
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

            <div className={styles.heroPanel}>
              <div className={styles.heroPanelFrame}>
                <Image
                  src="/work/easycloud/inbox.png"
                  alt="EasyCloudAPI inbox interface"
                  fill
                  sizes="(max-width: 900px) 100vw, 40vw"
                  priority
                />
              </div>
              <div className={styles.heroPanelCaption}>
                <span>Live frame · EasyCloudAPI</span>
                <Stamp size="sm" />
              </div>
            </div>
          </div>

          <p className={styles.studioNote}>
            <strong>Studio note —</strong> Built between client Shopify tickets and late
            WhatsApp deploys. This site is the short version of what I actually ship.
          </p>

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
          <div className={styles.frameSection} style={{ borderTop: 0, paddingBottom: 0 }}>
            <div className={styles.chapterHead}>
              <Stamp size="md" />
              <div>
                <p className="kicker">Selected work</p>
                <h2 id="featured-title" className="h2">
                  Things I&apos;ve shipped.
                </h2>
                <p className={styles.chapterAside}>
                  One big plate first — then quieter case studies. Open any for the
                  pipeline.
                </p>
              </div>
            </div>
          </div>
          <FeaturedRail projects={featured} />
          <div className={styles.proofStrip} aria-label="Proof frames">
            {proofFrames.map((frame) => (
              <div key={frame.cap} className={styles.proofItem}>
                <div className={styles.proofThumb}>
                  <Image
                    src={frame.src}
                    alt=""
                    fill
                    sizes="(max-width: 900px) 100vw, 25vw"
                  />
                </div>
                <span className={styles.proofCap}>{frame.cap}</span>
              </div>
            ))}
          </div>
        </section>

        <aside className={styles.deskQuote}>
          <p>
            “Shopify wouldn&apos;t give us custom product reordering — so we built the
            cart reconstruct ourselves.”
          </p>
          <cite>— From the Vulgrco reorder build</cite>
        </aside>

        <section
          id="library"
          className={styles.frameSection}
          aria-labelledby="more-title"
        >
          <div className={styles.lineupHead}>
            <div className={styles.chapterHead} style={{ paddingBottom: 0 }}>
              <Stamp size="md" />
              <div>
                <p className="kicker">Also</p>
                <h2 id="more-title" className="h2">
                  Worth a second look.
                </h2>
              </div>
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
                <Stamp size="sm" />
                Hire
              </p>
              <h2 id="cta-title" className={styles.hireTitle}>
                Got a messy problem to ship?
              </h2>
              <p className={styles.hireLede}>
                I&apos;m strongest when the work spans backend, integrations, and the
                product surface — Shopify, WhatsApp, automations, or retrieval that has to
                cite sources.
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
                src="/work/easycloud/feature.jpg"
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
