import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";

interface Project {
  name: string;
  description: string;
  cover: string;
  github: string;
  live: string;
}

const projects: Project[] = [
  {
    name: "Feather",
    description:
      "An AI-powered background remover built with React and Express. Upload a photo, cut the background out in seconds with ClipDrop's AI, swap in a new one, and export — with Google sign-in, a history gallery, and a one-time Pro upgrade via Paddle.",
    cover: "/projects/feather-cover.png",
    github: "https://github.com/parinith-web/feather",
    live: "https://feather-bg.vercel.app/",
  },
  {
    name: "Nest",
    description:
      'A browser extension that organizes Reddit saved posts into custom collections, enabling efficient categorization, faster retrieval, and a clutter-free knowledge management experience.',
    cover: "/projects/nest-cover.png",
    github: "https://github.com/parinith-web/nest",
    live: "https://nest-organizer.vercel.app/",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-md border border-white/10 bg-white/[0.03]">
      <div className="group relative w-full overflow-hidden bg-black">
        <img
          src={project.cover}
          alt={`${project.name} cover`}
          className="block w-full"
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

      <div className="flex flex-col gap-3 p-5 sm:p-6">
        <h3 className="text-xl font-extrabold tracking-[-0.5px] text-white sm:text-2xl">
          {project.name}
        </h3>
        <p className="text-sm leading-relaxed text-white/70">
          {project.description}
        </p>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="mt-20 scroll-mt-24 lg:mt-28">
      <h2 className="text-3xl font-extrabold tracking-[-1px] text-white sm:text-4xl lg:text-5xl">
        Projects
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-12 lg:gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
