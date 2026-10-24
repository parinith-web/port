import { Database } from "lucide-react";
import type { ComponentType, CSSProperties } from "react";
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

type IconType = ComponentType<{ className?: string; style?: CSSProperties }>;

interface Skill {
  name: string;
  Icon: IconType;
  color: string; // brand colour of the logo
}

interface Domain {
  title: string;
  skills: Skill[];
}

const domains: Domain[] = [
  {
    title: "Languages",
    skills: [
      { name: "C++", Icon: SiCplusplus, color: "#3C8DDB" },
      { name: "Python", Icon: SiPython, color: "#4B8BBE" },
      { name: "Go", Icon: SiGo, color: "#00ADD8" },
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3A86E0" },
      { name: "SQL", Icon: Database, color: "#4DA3FF" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", Icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "HTML5", Icon: SiHtml5, color: "#E96228" },
      { name: "CSS3", Icon: SiCss, color: "#3B82F6" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38BDF8" },
      { name: "Framer Motion", Icon: SiFramer, color: "#0AF" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", Icon: SiNodedotjs, color: "#6DB55E" },
      { name: "Express.js", Icon: SiExpress, color: "#FFFFFF" },
      { name: "FastAPI", Icon: SiFastapi, color: "#05B5A3" },
      { name: "Flask", Icon: SiFlask, color: "#FFFFFF" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", Icon: SiPostgresql, color: "#7BA4FF" },
      { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", Icon: SiMysql, color: "#00B4E6" },
    ],
  },
  {
    title: "Authentication & Cloud",
    skills: [
      { name: "Clerk", Icon: SiClerk, color: "#8B6CFF" },
      { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
      { name: "Supabase", Icon: SiSupabase, color: "#3ECF8E" },
      { name: "Convex", Icon: SiConvex, color: "#EE342F" },
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git", Icon: SiGit, color: "#F05032" },
      { name: "GitHub", Icon: SiGithub, color: "#FFFFFF" },
      { name: "Docker", Icon: SiDocker, color: "#2496ED" },
      { name: "Kubernetes", Icon: SiKubernetes, color: "#4C86F0" },
      { name: "Linux", Icon: SiLinux, color: "#FCC624" },
      { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
      { name: "Vercel", Icon: SiVercel, color: "#FFFFFF" },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="mt-12 scroll-mt-24 lg:mt-16">
      <h2 className="text-center text-3xl font-extrabold tracking-[-1px] text-white sm:text-4xl lg:text-5xl">
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
              {domain.skills.map(({ name, Icon, color }) => (
                <li
                  key={name}
                  className="flex items-center gap-2 rounded-md border border-white/15 bg-white/[0.04] px-4 py-2 text-white transition-colors hover:border-white/30 hover:bg-white/[0.08]"
                >
                  <Icon className="h-[18px] w-[18px] shrink-0" style={{ color }} />
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
