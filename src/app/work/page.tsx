import type { Metadata } from "next";
import { WorkFilters } from "@/components/WorkFilters";
import { projects, site } from "@/data/site";
import { DisplayWord } from "@/components/DisplayWord";

export const metadata: Metadata = {
  title: "Work",
  description: `Selected projects by ${site.name} — Shopify, WhatsApp, automation, and product work.`,
};

export default function WorkPage() {
  return (
    <div className="page">
      <div className="shell">
        <p className="kicker">Work</p>

        <div className="displayHead">
          <h1 className="display">
            <DisplayWord>WORK</DisplayWord>
          </h1>
          <p className="lede">
            {projects.length} systems, from client Shopify builds to products I own.
            Each one opens a write-up with what I built and how it hangs together.
          </p>
        </div>

        <div className="section">
          <WorkFilters projects={projects} />
        </div>
      </div>
    </div>
  );
}
