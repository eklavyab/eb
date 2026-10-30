import type { Metadata } from "next";
import { RevealLines } from "@/components/motion/Reveal";
import { ProjectIndex } from "@/components/work/ProjectIndex";
import { SectionLabel } from "@/components/ui/primitives";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Selected Work",
  description: "Case studies in social media management, brand communication and content strategy.",
};

export default function WorkPage() {
  return (
    <section className="bg-ivory pt-32 pb-[var(--section)] md:pt-44">
      <div className="container-luxe">
        <SectionLabel index="Archive" className="text-taupe-deep">
          Case Studies
        </SectionLabel>
        <RevealLines
          as="h1"
          className="display mt-10 text-[clamp(3.2rem,11vw,12rem)]"
          lines={["The Work", <span key="i" className="pl-[12vw] italic text-taupe-deep">Archive.</span>]}
        />
        <div className="mt-20 md:mt-32">
          <ProjectIndex projects={projects} />
        </div>
      </div>
    </section>
  );
}
