import { FadeUp, RevealLines } from "@/components/motion/Reveal";
import { ProjectIndex } from "@/components/work/ProjectIndex";
import { ArrowLink, SectionLabel } from "@/components/ui/primitives";
import { projects } from "@/content/projects";

const categories = [
  "Social Media Management",
  "Brand Communication",
  "Content Strategy",
  "Campaign Development",
  "Creative Direction",
  "Digital Brand Presence",
];

export function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="section-y bg-ivory">
      <div className="container-luxe">
        <div className="grid grid-cols-12 items-end gap-6">
          <div className="col-span-12 lg:col-span-8">
            <SectionLabel index="04" className="text-taupe-deep">
              Selected Work
            </SectionLabel>
            <RevealLines
              as="h2"
              className="display mt-10 text-[clamp(3rem,9vw,10rem)]"
              lines={[
                <span key="a" id="work-title">Selected</span>,
                <span key="b" className="pl-[10vw] italic text-taupe-deep">
                  Work
                </span>,
              ]}
            />
          </div>
          <FadeUp className="col-span-12 lg:col-span-4">
            <p className="text-[0.95rem] leading-relaxed text-ink/70">
              Case studies in social media, brand communication and content strategy. Projects
              marked as placeholders are awaiting real work and will be updated with confirmed details
              only.
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
              {categories.map((c) => (
                <li key={c} className="eyebrow text-[0.6rem] text-taupe-deep">
                  {c}
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>

        <div className="mt-20 md:mt-32">
          <ProjectIndex projects={projects} />
        </div>

        <div className="mt-24 flex justify-center md:mt-36">
          <ArrowLink href="/work">The Full Archive</ArrowLink>
        </div>
      </div>
    </section>
  );
}
