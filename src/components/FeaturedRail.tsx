import type { Project } from "@/data/site";
import { ProjectCard } from "./ProjectCard";
import styles from "./ui.module.css";

const accents = ["#6a9eff", "#34d399", "#f59e0b", "#a78bfa"] as const;

export function FeaturedRail({ projects }: { projects: Project[] }) {
  return (
    <div className={styles.lineupGrid}>
      {projects.slice(0, 4).map((project, i) => (
        <ProjectCard
          key={project.slug}
          project={project}
          variant="lineup"
          index={i}
          accent={accents[i % accents.length]}
        />
      ))}
    </div>
  );
}

