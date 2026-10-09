import type { Project } from "@/data/site";
import { ProjectCard } from "./ProjectCard";
import styles from "./ui.module.css";

/** Single ink accent — no rainbow card palette */
const accents = ["#7a9eff", "#7a9eff", "#7a9eff"] as const;

export function FeaturedRail({ projects }: { projects: Project[] }) {
  const list = projects.slice(0, 3);
  return (
    <div className={styles.lineupGrid}>
      {list.map((project, i) => (
        <ProjectCard
          key={project.slug}
          project={project}
          variant="lineup"
          index={i}
          accent={accents[i % accents.length]}
          featured={i === 0}
        />
      ))}
    </div>
  );
}

