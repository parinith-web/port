import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";
import SectionHeading, { GREEN, PANEL_CLASS, SECTION_FONT } from "@/components/SectionHeading";

interface Project {
  name: string;
  description: string;
  cover: string;
  tags: string[];
  github: string;
  live: string;
}

const projects: Project[] = [
  {
    name: "Orbital Games",
    tags: ["Gaming","Real-time","Full-stack"],
    description:
      "Voice rooms and party games with friends.",
    cover: "/projects/orbital-cover.png",
    github: "https://github.com/parinith-web/orbital",
    live: "https://orbital-games.vercel.app/",
  },
  {
    name: "GATEquest",
    tags: ["EdTech","Community","Full-stack"],
    description:
      "GATE prep with live leaderboards.",
    cover: "/projects/gatequest-cover.png",
    github: "https://github.com/parinith-web/GATEquest",
    live: "https://gatequest.vercel.app/",
  },
  {
    name: "Feather",
    tags: ["AI","Image tool","Web app"],
    description:
      "AI background remover in seconds.",
    cover: "/projects/feather-cover.png",
    github: "https://github.com/parinith-web/feather",
    live: "https://feather-bg.vercel.app/",
  },
  {
    name: "Nest",
    tags: ["Extension","Productivity"],
    description:
      "Organize Reddit saved posts.",
    cover: "/projects/nest-cover.png",
    github: "https://github.com/parinith-web/nest",
    live: "https://nest-organizer.vercel.app/",
  },
];

const FONT = SECTION_FONT;

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col" style={{ fontFamily: FONT }}>
      <div className="group relative w-full overflow-hidden rounded-[1.5rem] bg-black">
        <img
          src={project.cover}
          alt={`${project.name} cover`}
          className="block aspect-[1.88/1] w-full object-cover object-top"
        />

        {/* Hover bar with Live / GitHub links */}
        <div className="absolute inset-x-0 bottom-0 flex translate-y-full items-stretch divide-x divide-white/15 border-t border-white/10 bg-black/85 backdrop-blur-sm transition-transform duration-300 ease-out group-hover:translate-y-0">
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

      <div className="mt-5">
        <h3 className="text-[24px] font-medium leading-tight tracking-[-0.02em] text-white sm:text-[26px]">
          {project.name}
        </h3>
        <p className="mt-1 text-[15px] text-white/55">{project.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/15 px-3 py-1 text-[11px] font-semibold uppercase leading-none tracking-[0.08em] text-white/60"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="mt-28 scroll-mt-24 lg:mt-40">
      <div className={PANEL_CLASS} style={{ fontFamily: FONT }}>
        <SectionHeading title="Projects" />

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:mt-16">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
