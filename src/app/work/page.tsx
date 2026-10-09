import type { Metadata } from "next";
import { WorkFilters } from "@/components/WorkFilters";
import { projects } from "@/data/site";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected AI products, automation systems, motion pipelines, and Shopify work by Saad Fazal.",
};

export default function WorkPage() {
  return (
    <div className="page">
      <div className="shell sectionPad">
        <div className="sectionRail">
          <p className="kicker">
            <span className="kickerDot" aria-hidden />
            01 / Work
          </p>
          <p className="kicker">{projects.length} projects · curated</p>
        </div>
        <h1 className="h1">
          Work <span className="accent">library.</span>
        </h1>
        <p className="lede" style={{ marginTop: 16 }}>
          Filter by category. Every card opens a full project page with context, impact,
          and outputs when available.
        </p>
        <div style={{ marginTop: 32 }}>
          <WorkFilters projects={projects} />
        </div>
      </div>
    </div>
  );
}
