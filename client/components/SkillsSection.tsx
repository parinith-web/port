import { Database } from "lucide-react";
import { useState } from "react";
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
    title: "Auth & Cloud",
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


/* where each topic pill floats inside the folder (% of folder width / height) */
const PILL_POS: [number, number][] = [
  [8, 34], // Languages
  [37, 30], // Frontend
  [74, 45], // Backend
  [51, 56], // Databases
  [14, 84], // Auth & Cloud
  [62, 83], // Tools & DevOps
];
const ROT = [-5, 3, -2, 5, -4, 2, -3];
const DY = [0, -4, 3, -2, 4, -1, 2];
const GREEN = "#16a34a";
const SCRIPT = "'Mrs Saint Delafield', 'Brush Script MT', cursive";

export default function SkillsSection() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [pinned, setPinned] = useState<number | null>(null);
  const active = hovered ?? pinned;

  const pillProps = (i: number) => ({
    onPointerEnter: (e: React.PointerEvent) => e.pointerType === "mouse" && setHovered(i),
    onPointerLeave: (e: React.PointerEvent) => e.pointerType === "mouse" && setHovered(null),
    onFocus: () => setHovered(i),
    onBlur: () => setHovered(null),
    onClick: () => setPinned((p) => (p === i ? null : i)),
    "aria-pressed": active === i,
  });

  const pillClass = (i: number) =>
    `relative flex items-center gap-[0.6em] whitespace-nowrap rounded-[0.7em] font-semibold uppercase tracking-[0.02em] shadow-[0_2px_10px_rgba(20,20,40,0.08)] outline-none transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#16a34a] motion-reduce:transition-none ${
      active === i
        ? "scale-110 bg-[#111] text-white"
        : "bg-white text-[#161616] hover:scale-105"
    }`;

  const Count = ({ i }: { i: number }) => (
    <span className={`text-[0.8em] font-medium ${active === i ? "text-white/50" : "text-black/35"}`}>
      {String(domains[i].skills.length).padStart(2, "0")}
    </span>
  );

  return (
    <section id="skills" className="mt-20 scroll-mt-24 lg:mt-28">
      <div
        className="mx-auto max-w-[1000px] rounded-[2.5rem] bg-white px-4 pb-8 pt-12 text-[#161616] sm:px-10 lg:rounded-[5rem] lg:px-[9%] lg:pb-20 lg:pt-20"
        style={{ fontFamily: "'Inter Tight', system-ui, sans-serif" }}
      >
        {/* heading */}
        <div className="flex flex-col items-center text-center">
          <span className="rounded-full border border-black/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[1.5px] text-black/50">
            Skills
          </span>
          <h2 className="mx-auto mt-5 max-w-[13ch] text-[2.5rem] font-medium leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
            Building <span style={{ color: GREEN }}>Reliable</span> Software.
          </h2>
          <p className="mt-4 text-sm text-black/45 sm:text-base">
            <span className="hidden lg:inline">Hover a topic to pull its stack out of the folder.</span>
            <span className="lg:hidden">Tap a topic to see its stack.</span>
          </p>
        </div>

        {/* ===== desktop: the folder ===== */}
        <div className="mx-auto mt-16 hidden w-full max-w-[1054px] lg:block">
          <div
            className="relative w-full"
            style={{ containerType: "inline-size", aspectRatio: "1054 / 697" } as CSSProperties}
          >
            <div className="absolute inset-0" style={{ fontSize: "1.35cqw" }}>
              {/* back plate */}
              <div
                className="absolute inset-0 rounded-[3.2em] shadow-[0_30px_60px_-30px_rgba(20,20,40,0.35)]"
                style={{ background: "linear-gradient(180deg,#dcdce3,#ececf2)" }}
              />
              <div
                className="absolute inset-x-[1.9%] top-[2.2%] h-[30%] rounded-[2.4em]"
                style={{ background: "linear-gradient(180deg,#d3d3db,#e2e2e9)" }}
              />

              {/* decorative cards peeking out (sink away on hover) */}
              <div
                className="absolute inset-0 transition-all duration-500 motion-reduce:transition-none"
                style={{
                  transform: active === null ? "none" : "translateY(18%)",
                  opacity: active === null ? 1 : 0,
                }}
                aria-hidden
              >
                <div
                  className="absolute overflow-hidden rounded-[1.4em] bg-white shadow-lg"
                  style={{ left: "4.5%", top: "5.5%", width: "29%", height: "22%", transform: "rotate(-4deg)" }}
                >
                  <div
                    className="absolute -bottom-[40%] left-[10%] h-[120%] w-[55%] rounded-full"
                    style={{ background: "radial-gradient(circle at 35% 30%,#1fe06e,#0a3d22 60%,#0b0b0d)" }}
                  />
                  <span className="absolute bottom-[10%] left-[8%] text-[1.6em] font-semibold text-white">stack.</span>
                </div>
                <div
                  className="absolute overflow-hidden rounded-[1.4em] shadow-lg"
                  style={{
                    left: "31%", top: "6.5%", width: "27%", height: "20%", transform: "rotate(-3deg)",
                    background: "linear-gradient(135deg,#1fe06e,#0c9a49)",
                  }}
                >
                  <span className="absolute left-[8%] top-[6%] text-[5.2em] font-black italic leading-none tracking-tighter text-white/90">
                    {"{API}"}
                  </span>
                </div>
                <div
                  className="absolute overflow-hidden rounded-[1.4em] bg-white shadow-lg"
                  style={{ left: "67%", top: "1%", width: "28%", height: "24%", transform: "rotate(4deg)", borderRight: "1.6em solid #7c3aed" }}
                >
                  <div className="m-[8%] space-y-[0.6em]">
                    <div className="h-[0.7em] w-[70%] rounded bg-black/10" />
                    <div className="h-[0.7em] w-[45%] rounded bg-black/10" />
                    <div className="h-[0.7em] w-[60%] rounded bg-black/10" />
                  </div>
                </div>
                <div
                  className="absolute overflow-hidden rounded-[1.6em] shadow-xl"
                  style={{ left: "43.5%", top: "13.5%", width: "48%", height: "26%", background: "#0b0b0d" }}
                >
                  <div
                    className="absolute left-[44%] top-0 h-full w-[3px]"
                    style={{ background: "linear-gradient(180deg,transparent,#4dea8a 70%,#3b82f6)" }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "radial-gradient(ellipse at 45% 100%,rgba(31,224,110,0.35),transparent 60%)" }}
                  />
                  <div className="absolute bottom-[8%] left-[10%] flex gap-[1em]">
                    <span className="rounded-[0.5em] bg-gradient-to-br from-[#1fe06e] to-[#0c9a49] px-[1em] py-[0.4em] text-[0.8em] font-bold text-black">DOCKER</span>
                    <span className="rounded-[0.5em] bg-gradient-to-br from-[#3b82f6] to-[#1e3a8a] px-[1em] py-[0.4em] text-[0.8em] font-bold text-white">K8S</span>
                  </div>
                </div>
              </div>

              {/* skill cards that rise out of the folder */}
              <div className="pointer-events-none absolute inset-x-[4%] top-0 h-[27%]">
                {domains.map((d, di) => (
                  <div key={d.title} className="absolute inset-0 flex items-end justify-center gap-[1.2em]">
                    {d.skills.map(({ name, Icon }, i) => {
                      const on = active === di;
                      return (
                        <div
                          key={name}
                          className="flex flex-col items-center gap-[0.8em] rounded-[1.3em] border border-black/5 bg-white pt-[1.6em] shadow-[0_10px_24px_-6px_rgba(20,20,40,0.28)] motion-reduce:transition-none"
                          style={{
                            width: "11.5cqw",
                            height: "15.5cqw",
                            transform: on
                              ? `translateY(${DY[i % 7]}%) rotate(${ROT[i % 7]}deg)`
                              : "translateY(120%) rotate(0deg)",
                            opacity: on ? 1 : 0,
                            transition: on
                              ? `transform 600ms cubic-bezier(.34,1.56,.64,1) ${i * 55}ms, opacity 200ms ease ${i * 55}ms`
                              : `transform 350ms ease-in ${i * 20}ms, opacity 300ms ease ${i * 20}ms`,
                          }}
                        >
                          <Icon className="text-[#161616]" style={{ width: "4.4cqw", height: "4.4cqw" } as CSSProperties} />
                          <span className="px-1 text-center font-semibold leading-tight text-[#161616]" style={{ fontSize: "1.2cqw" }}>
                            {name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>

              {/* folder front with the notch */}
              <svg
                viewBox="0 0 1054 540"
                className="pointer-events-none absolute bottom-0 left-0 w-full"
                style={{ filter: "drop-shadow(0 -4px 14px rgba(20,20,40,0.12))" }}
                aria-hidden
              >
                <defs>
                  <linearGradient id="folderFront" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#f6f6fa" />
                    <stop offset="0.7" stopColor="#efeff5" />
                    <stop offset="1" stopColor="#e3e5f0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 44C0 18 18 0 44 0L505 0C535 0 548 14 556 40C566 74 586 90 620 90L818 90C852 90 872 74 882 40C890 14 903 0 933 0L1010 0C1036 0 1054 18 1054 44L1054 496C1054 522 1036 540 1010 540L44 540C18 540 0 522 0 496Z"
                  fill="url(#folderFront)"
                  stroke="#fff"
                  strokeOpacity="0.8"
                  strokeWidth="2"
                />
              </svg>

              {/* tagline */}
              <p
                className="absolute font-medium leading-[1.2] tracking-[-0.02em]"
                style={{ left: "8%", top: "48%", width: "38%", fontSize: "3.1cqw" }}
              >
                Full-stack engineering for products built to{" "}
                <span style={{ fontFamily: SCRIPT, color: GREEN, fontSize: "1.7em", lineHeight: 0.8 }}>Scale.</span>
              </p>

              {/* floating topic pills */}
              {domains.map((d, i) => (
                <div
                  key={d.title}
                  className="absolute"
                  style={{
                    left: `${PILL_POS[i][0]}%`,
                    top: `${PILL_POS[i][1]}%`,
                    animation: `skill-float ${5 + i * 0.7}s ease-in-out ${i * -0.9}s infinite`,
                  }}
                >
                  <button
                    type="button"
                    className={pillClass(i)}
                    style={{ fontSize: "1.25cqw", padding: "1.05em 1.4em" }}
                    {...pillProps(i)}
                  >
                    {d.title}
                    <Count i={i} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===== mobile / tablet ===== */}
        <div
          className="mx-auto mt-10 max-w-xl rounded-[2rem] p-5 sm:p-8 lg:hidden"
          style={{ background: "linear-gradient(180deg,#e4e4ea,#f3f3f8)" }}
        >
          <p className="text-2xl font-medium leading-tight tracking-[-0.02em] sm:text-3xl">
            Full-stack engineering for products built to{" "}
            <span style={{ fontFamily: SCRIPT, color: GREEN, fontSize: "1.7em", lineHeight: 0.8 }}>Scale.</span>
          </p>
          <div className="mt-6 flex flex-wrap gap-2.5 text-xs sm:text-sm">
            {domains.map((d, i) => (
              <button
                key={d.title}
                type="button"
                className={`${pillClass(i)} px-4 py-2.5`}
                {...pillProps(i)}
              >
                {d.title}
                <Count i={i} />
              </button>
            ))}
          </div>
          {active !== null && (
            <ul key={active} className="mt-6 grid grid-cols-3 gap-3">
              {domains[active].skills.map(({ name, Icon }, i) => (
                <li
                  key={name}
                  className="flex flex-col items-center gap-2 rounded-2xl border border-black/5 bg-white px-2 py-4 shadow-[0_8px_18px_-8px_rgba(20,20,40,0.3)]"
                  style={{ animation: `skill-pop 500ms cubic-bezier(.34,1.56,.64,1) ${i * 55}ms both` }}
                >
                  <Icon className="h-8 w-8 text-[#161616]" />
                  <span className="text-center text-[11px] font-semibold leading-tight [overflow-wrap:normal] [word-break:normal]">{name}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
