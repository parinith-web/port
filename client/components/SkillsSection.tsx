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
      <h2 className="text-center text-3xl font-extrabold tracking-[-1px] text-white sm:text-4xl lg:text-5xl">
        Skills
      </h2>

      <div className="mt-10 flex flex-col gap-10 lg:mt-14 lg:gap-12">
        {domains.map((domain) => (
          <div key={domain.title}>
            <h3 className="mb-4 text-sm font-bold uppercase leading-6 tracking-[1.6px] text-white/50">
              {domain.title}
            </h3>
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-7">
              {domain.skills.map(({ name, Icon }) => (
                <li
                  key={name}
                  className="group flex flex-col items-center justify-center gap-4 rounded-2xl border border-white/10 border-b-[3px] border-r-[3px] border-b-white/30 border-r-white/30 bg-[#0f0f0f] px-3 py-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-b-[#1fe06e] hover:border-r-[#1fe06e] sm:py-6"
                >
                  <Icon className="h-10 w-10 shrink-0 text-white/90 transition-colors group-hover:text-white sm:h-12 sm:w-12" />
                  <span className="text-center text-xs font-medium text-white/70 transition-colors group-hover:text-white sm:text-sm">
                    {name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
