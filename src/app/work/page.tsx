import type { Metadata } from "next";
import { WorkFilters } from "@/components/WorkFilters";
import { projects, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Work",
  description: `Selected projects by ${site.name} — Shopify, WhatsApp, automation, and product work.`,
};

export default function WorkPage() {
  return (
    <div className="page">
      <div className="shell sectionPad">
        <div className="sectionRail">
          <p className="kicker">
            <span className="kickerDot" aria-hidden />
            Work
          </p>
          <p className="kicker">{projects.length} projects</p>
        </div>
        <h1 className="h1">
          Project <span className="accent">index.</span>
        </h1>
        <p className="lede" style={{ marginTop: 16 }}>
          Filter by type. Each card opens a write-up with what I built and how it hangs
          together.
        </p>
        <div style={{ marginTop: 32 }}>
          <WorkFilters projects={projects} />
        </div>
      </div>
    </div>
  );
}
