import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { FeaturedRail } from "@/components/FeaturedRail";
import { HeroLinks } from "@/components/HeroLinks";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionNav } from "@/components/SectionNav";
import styles from "@/components/ui.module.css";
import { projects, site } from "@/data/site";

const iconTiles = [
  {
    code: "YT",
    label: "YouTube factory",
    icon: "/work/icons/yt.jpg",
    href: "/work/yt-content-factory",
  },
  {
    code: "CB",
    label: "CodeBuddy",
    icon: "/work/icons/cb.jpg",
    href: "/work/codebuddy",
  },
  {
    code: "RG",
    label: "RAG systems",
    icon: "/work/icons/rg.jpg",
    href: "/work/rag-systems",
  },
  {
    code: "VX",
    label: "Voice AI",
    icon: "/work/icons/vx.jpg",
    href: "/work/voice-ai-saas",
  },
  {
    code: "WA",
    label: "WhatsApp bots",
    icon: "/work/generated/whatsapp-bots.jpg",
    href: "/work/whatsapp-bots",
  },
  {
    code: "LM",
    label: "Lumenden",
    icon: "/work/lumenden/avatar.jpg",
    href: "/work/lumenden",
  },
  {
    code: "EC",
    label: "EasyCloud",
    icon: "/work/easycloud/feature.jpg",
    href: "/work/easycloudapi",
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
              <span className="kickerDot" aria-hidden />
              01 / Lumenden
            </p>
            <p className="kicker">
              {site.name.split(" ")[0]} · 6+ yrs · Remote · AI systems
            </p>
          </div>

          <div className={`${styles.heroCopy} rise`}>
            <h1 id="home-title" className={styles.heroTitle}>
              Systems that <em>ship.</em>
            </h1>
            <p className={styles.heroRole}>
              YouTube factories, RAG systems, WhatsApp bots, voice agents, and the
              automation glue that keeps them shipping. Built for teams that need
              proof, not slides.
            </p>
            <div className={styles.heroActions}>
              <Button href="/work" variant="primary">
                Explore work
              </Button>
              <Button href="/contact" variant="secondary">
                Start a conversation
              </Button>
            </div>
            <HeroLinks />
          </div>

        <div className={styles.iconRail} aria-label="Selected systems">
          {iconTiles.map((tile) => (
            <Link key={tile.code} href={tile.href} className={styles.iconTile}>
              <span className={styles.iconTileMark}>
                <Image src={tile.icon} alt="" width={80} height={80} />
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
                02 / The lineup
              </p>
              <h2 id="featured-title" className="h2" style={{ marginTop: 14 }}>
                Featured systems.
              </h2>
            </div>
            <p className={styles.lineupAside}>
              Pick a system to explore. Media above, story below. Open any case
              for the full pipeline.
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
                03 / Library
              </p>
              <h2 id="more-title" className="h2" style={{ marginTop: 14 }}>
                From the library.
              </h2>
            </div>
            <Button href="/work" variant="secondary">
              View all work
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
                04 / Hire
              </p>
              <h2 id="cta-title" className={styles.hireTitle}>
                Need AI systems that actually run?
              </h2>
              <p className={styles.hireLede}>
                RAG pipelines, WhatsApp bots, voice agents, and automation. Backend
                through product surface.
              </p>
              <div className={styles.heroActions}>
                <Button href="/contact" variant="primary">
                  Start a conversation
                </Button>
                <Button href="/experience" variant="secondary">
                  See experience
                </Button>
              </div>
            </div>
            <div className={styles.hireVisual} aria-hidden>
              <Image
                src="/work/generated/hire-visual.jpg"
                alt=""
                fill
                sizes="(max-width: 900px) 100vw, 42vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </section>
      </div>
      <SectionNav />
    </div>
  );
}
