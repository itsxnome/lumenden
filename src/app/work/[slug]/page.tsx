import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { ProjectCard } from "@/components/ProjectCard";
import styles from "@/components/ui.module.css";
import { getProject, projects } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project" };
  return { title: project.title, description: project.summary };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <div className="page">
      <article className="shell">
        <p className="kicker">
          <span className="kickerDot" aria-hidden />
          <Link href="/work">Work</Link>
          <span className="faint"> / {project.category}</span>
        </p>

        <div className={styles.detailHero}>
          <div>
            <div className={styles.cardMeta} style={{ marginTop: 14 }}>
              <span className={styles.badge}>{project.eyebrow}</span>
              <span className={`${styles.badge} ${styles.badgeAccent}`}>{project.status}</span>
            </div>
            <h1 className="h1" style={{ marginTop: 14, fontSize: "var(--fs-4xl)" }}>
              {project.title}
            </h1>
            <p className="lede" style={{ marginTop: 14 }}>
              {project.summary}
            </p>
          </div>

          <div className={styles.detailMedia}>
            {project.video ? (
              <video
                src={project.video}
                poster={project.poster || project.image}
                controls
                playsInline
                preload="metadata"
              />
            ) : project.image ? (
              <Image
                src={project.image}
                alt={`${project.title} visual`}
                fill
                sizes="100vw"
                style={{ objectFit: "cover" }}
                priority
              />
            ) : null}
          </div>
        </div>

        <div className={styles.overviewBlock}>
          <div>
            <p className="kicker">
              <span className="kickerDot" aria-hidden />
              High-level
            </p>
            <h2 className="h2" style={{ marginTop: 10 }}>
              What I built
            </h2>
            <p className={styles.overviewText}>{project.overview}</p>
          </div>
          <ol className={styles.pipeline}>
            {project.pipeline.map((step, i) => (
              <li key={step} className={styles.pipelineStep}>
                <span className={styles.pipelineNum}>{String(i + 1).padStart(2, "0")}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className={styles.detailGrid}>
          <div className="prose">
            {project.body.map((para) => (
              <p key={para}>{para}</p>
            ))}
            {project.gallery && project.gallery.length > 0 ? (
              <div className={styles.gallery} aria-label="Project gallery">
                {project.gallery.map((src) => (
                  <div key={src} className={styles.galleryItem}>
                    <Image
                      src={src}
                      alt=""
                      fill
                      sizes="(max-width: 900px) 100vw, 40vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          <aside className={styles.panel}>
            <h2 className="h3">Impact</h2>
            <p style={{ marginTop: 10, fontWeight: 600 }}>{project.impact}</p>
            <h3 className="h3" style={{ marginTop: 24, fontSize: "1.15rem" }}>
              Stack
            </h3>
            <div className="stack" style={{ marginTop: 12 }}>
              {project.stack.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
            <h3 className="h3" style={{ marginTop: 24, fontSize: "1.15rem" }}>
              Tags
            </h3>
            <div className="stack" style={{ marginTop: 12 }}>
              {project.tags.map((tag) => (
                <span key={tag} className="chip">
                  {tag}
                </span>
              ))}
            </div>
            <div style={{ marginTop: 28, display: "grid", gap: 10 }}>
              <Button href="/contact" variant="primary">
                Discuss this work
              </Button>
              <Button href="/work" variant="secondary">
                Back to library
              </Button>
            </div>
          </aside>
        </div>

        <section className="section" aria-labelledby="related-title">
          <div className="sectionHead">
            <h2 id="related-title" className="h2">
              Related
            </h2>
          </div>
          <div className="bento">
            {related.map((item) => (
              <ProjectCard key={item.slug} project={item} />
            ))}
          </div>
        </section>
      </article>
    </div>
  );
}
