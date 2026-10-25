import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";
import SectionHeading, { PANEL_CLASS, SECTION_FONT } from "@/components/SectionHeading";

interface Project {
  name: string;
  description: string;
  cover: string;
  /** shown as one uppercase label above the title, joined with " | " */
  categories: string[];
  github: string;
  live: string;
}

const projects: Project[] = [
  {
    name: "Orbital Games",
    categories: ["Gaming", "Real-time", "Full-stack"],
    description:
      "Voice rooms & party games",
    cover: "/projects/orbital-cover.png",
    github: "https://github.com/parinith-web/orbital",
    live: "https://orbital-games.vercel.app/",
  },
  {
    name: "GATEquest",
    categories: ["EdTech", "Community", "Full-stack"],
    description:
      "GATE prep, ranked live",
    cover: "/projects/gatequest-cover.png",
    github: "https://github.com/parinith-web/GATEquest",
    live: "https://gatequest.vercel.app/",
  },
  {
    name: "Feather",
    categories: ["AI", "Image tool", "Web app"],
    description:
      "AI background remover",
    cover: "/projects/feather-cover.png",
    github: "https://github.com/parinith-web/feather",
    live: "https://feather-bg.vercel.app/",
  },
  {
    name: "Nest",
    categories: ["Extension", "Productivity"],
    description:
      "Reddit saves, organized",
    cover: "/projects/nest-cover.png",
    github: "https://github.com/parinith-web/nest",
    live: "https://nest-organizer.vercel.app/",
  },
];

const FONT = SECTION_FONT;

/* Card styling, matched to the reference portfolio.
   Measured from the reference at 125% display scaling, then converted to CSS px:
     title  - Funnel Display 400, 17px, -0.03em tracking, white
     label  - Funnel Display 400, 12px, +0.03em tracking, UPPERCASE, #a0a0a0
     corner - 13px radius (was 24px) */
const CARD_FONT = "'Funnel Display', 'Inter Tight', system-ui, sans-serif";

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col" style={{ fontFamily: CARD_FONT }}>
      <div className="group relative w-full overflow-hidden rounded-[13px] bg-page">
        <img
          src={project.cover}
          alt={`${project.name} cover`}
          className="block aspect-video w-full object-cover"
        />

        {/* Hover bar with Live / GitHub links */}
        <div className="absolute inset-x-0 bottom-0 flex translate-y-full items-stretch divide-x divide-white/15 bg-page/75 backdrop-blur-sm transition-transform duration-300 ease-out group-hover:translate-y-0">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            <ArrowUpRight className="h-4 w-4" strokeWidth={2.25} />
            Live
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            <GithubIcon className="h-4 w-4" />
            Github
          </a>
        </div>
      </div>

      <div className="mt-[18px]">
        <p className="text-[12px] font-normal uppercase leading-[1.2] tracking-[0.03em] text-[#a0a0a0]">
          {project.categories.join(" | ")}
        </p>
        <h3 className="mt-[3px] text-[17px] font-normal leading-[1.25] tracking-[-0.02em] text-white [text-wrap:balance]">
          {project.name}: {project.description}
        </h3>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="mt-28 scroll-mt-24 lg:mt-40">
      <div className={`${PANEL_CLASS} mx-auto max-w-[1000px]`} style={{ fontFamily: FONT }}>
        <SectionHeading title="Projects" />

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-[54px] sm:grid-cols-2 lg:mt-16 lg:gap-x-10">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
