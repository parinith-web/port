import { Database } from "lucide-react";
import { ComponentType, SVGProps } from "react";
import {
  SiCplusplus,
  SiPython,
  SiGo,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiFlask,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiClerk,
  SiFirebase,
  SiSupabase,
  SiConvex,
  SiGit,
  SiGithub,
  SiDocker,
  SiKubernetes,
  SiLinux,
  SiFigma,
  SiVercel,
} from "react-icons/si";

type IconType = ComponentType<{ className?: string }> | ComponentType<SVGProps<SVGSVGElement>>;

interface Skill {
  name: string;
  Icon: IconType;
}

interface Domain {
  title: string;
  skills: Skill[];
}

const domains: Domain[] = [
  {
    title: "Languages",
    skills: [
      { name: "C++", Icon: SiCplusplus },
      { name: "Python", Icon: SiPython },
      { name: "Go", Icon: SiGo },
      { name: "JavaScript", Icon: SiJavascript },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "SQL", Icon: Database },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", Icon: SiReact },
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "HTML5", Icon: SiHtml5 },
      { name: "CSS3", Icon: SiCss },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
      { name: "Framer Motion", Icon: SiFramer },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "Express.js", Icon: SiExpress },
      { name: "FastAPI", Icon: SiFastapi },
      { name: "Flask", Icon: SiFlask },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", Icon: SiPostgresql },
      { name: "MongoDB", Icon: SiMongodb },
      { name: "MySQL", Icon: SiMysql },
    ],
  },
  {
    title: "Authentication & Cloud",
    skills: [
      { name: "Clerk", Icon: SiClerk },
      { name: "Firebase", Icon: SiFirebase },
      { name: "Supabase", Icon: SiSupabase },
      { name: "Convex", Icon: SiConvex },
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git", Icon: SiGit },
      { name: "GitHub", Icon: SiGithub },
      { name: "Docker", Icon: SiDocker },
      { name: "Kubernetes", Icon: SiKubernetes },
      { name: "Linux", Icon: SiLinux },
      { name: "Figma", Icon: SiFigma },
      { name: "Vercel", Icon: SiVercel },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="mt-20 scroll-mt-24 lg:mt-28">
      <h2 className="text-3xl font-extrabold tracking-[-1px] text-white sm:text-4xl lg:text-5xl">
        Skills
      </h2>

      <div className="mt-10 flex flex-col lg:mt-12">
        {domains.map((domain) => (
          <div
            key={domain.title}
            className="flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:gap-8 lg:py-5"
          >
            <h3 className="w-full shrink-0 text-sm font-bold uppercase leading-6 tracking-[1.6px] text-white/50 lg:w-56">
              {domain.title}
            </h3>
            <ul className="flex flex-wrap gap-3">
              {domain.skills.map(({ name, Icon }) => (
                <li
                  key={name}
                  className="flex items-center gap-2 rounded-md border border-white/15 bg-white/[0.04] px-4 py-2 text-white transition-colors hover:border-white/30 hover:bg-white/[0.08]"
                >
                  <Icon className="h-4 w-4 shrink-0 text-white" />
                  <span className="text-sm">{name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
