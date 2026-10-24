import { Database } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
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
  [7, 34], // Languages
  [37, 31], // Frontend
  [73, 47], // Backend
  [62, 61], // Databases
  [8, 88], // Auth & Cloud
  [64, 83], // Tools & DevOps
];
const ROT = [-5, 3, -2, 5, -4, 2, -3];
const DY = [0, -4, 3, -2, 4, -1, 2];
const GREEN = "#16a34a";
const SCRIPT = "'Mrs Saint Delafield', 'Brush Script MT', cursive";

const Scale = ({ children = "scale." }: { children?: string }) => (
  <span className="relative inline-block" style={{ transform: "rotate(-5deg) translateY(0.04em)", marginLeft: "0.05em" }}>
    <span style={{ fontFamily: SCRIPT, color: GREEN, fontSize: "2.1em", lineHeight: 0.6, letterSpacing: "0.01em" }}>{children}</span>
  </span>
);

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
        className="mx-auto max-w-[1000px] rounded-[2.5rem] bg-white px-4 pb-8 pt-8 text-[#161616] sm:px-10 lg:rounded-[5rem] lg:px-[9%] lg:pb-16 lg:pt-10"
        style={{ fontFamily: "'Inter Tight', system-ui, sans-serif" }}
      >
        {/* heading */}
        <div className="flex flex-col items-center text-center">
          <SectionHeading title="Skills" dark />
          <p className="mt-4 text-sm text-black/45 sm:text-base">
            <span className="hidden lg:inline">Hover a topic to pull its stack out of the folder.</span>
            <span className="lg:hidden">Tap a topic to see its stack.</span>
          </p>
        </div>

        {/* ===== desktop: the folder ===== */}
        <div className="mx-auto mt-12 hidden w-full max-w-[1054px] lg:block">
          <div
            className="relative w-full"
            style={{ containerType: "inline-size", aspectRatio: "1054 / 662" } as CSSProperties}
          >
            <div className="absolute inset-0" style={{ fontSize: "1.35cqw" }}>
              {/* back plate */}
              <div
                className="absolute inset-0 rounded-[3.2em] shadow-[0_30px_60px_-30px_rgba(20,20,40,0.35)]"
                style={{ background: "linear-gradient(180deg,#dcdce3,#ececf2)" }}
              />
              <div
                className="absolute inset-x-[1.9%] top-[2.8%] rounded-[2.4em]"
                style={{ height: "19.8cqw", background: "linear-gradient(180deg,#d3d3db,#e2e2e9)" }}
              />

              {/* decorative cards peeking out (sink away on hover) */}
              <div
                className="absolute left-0 top-0 w-full transition-all duration-500 motion-reduce:transition-none"
                style={{
                  height: "66.1cqw",
                  transform: active === null ? "none" : "translateY(18%)",
                  opacity: active === null ? 1 : 0,
                }}
                aria-hidden
              >
                {/* mcp servers (right, pokes above the folder) */}
                <div
                  className="absolute overflow-hidden rounded-[1.3em] border-[0.25em] border-white bg-white shadow-[0_12px_28px_-8px_rgba(20,20,40,0.5)]"
                  style={{ left: "68%", top: "-3%", width: "28%", aspectRatio: "1.5/1", transform: "rotate(5deg)", borderRightColor: "#7c3aed", borderRightWidth: "1.4em" }}
                >
                  <div className="px-[1em] pt-[0.9em] font-mono text-[0.8em] leading-[2] text-[#161616]">
                    <div className="mb-[0.2em] font-sans text-[0.9em] font-bold uppercase tracking-[0.12em] text-black/40">mcp servers</div>
                    {[
                      ["figma", "connected"],
                      ["github", "connected"],
                      ["postgres", "connected"],
                    ].map(([n, st]) => (
                      <div key={n} className="flex items-center gap-[0.7em]">
                        <span className="h-[0.6em] w-[0.6em] rounded-full bg-[#16a34a]" />
                        <span className="font-semibold">{n}</span>
                        <span className="text-black/35">{st}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* system diagram (left) */}
                <div
                  className="absolute overflow-hidden rounded-[1.3em] border-[0.25em] border-white bg-white shadow-[0_12px_28px_-8px_rgba(20,20,40,0.5)]"
                  style={{ left: "3%", top: "5%", width: "29%", aspectRatio: "1.5/1", transform: "rotate(-5deg)" }}
                >
                  <div className="px-[1em] pt-[0.9em] text-[0.75em] font-bold uppercase tracking-[0.12em] text-black/40">mcp architecture</div>
                  <div className="mt-[0.8em] flex items-center justify-center gap-[0.4em]">
                    {["LLM", "MCP", "API"].map((n, i) => (
                      <div key={n} className="flex items-center gap-[0.4em]">
                        <span
                          className={`rounded-[0.5em] border px-[0.9em] py-[0.6em] text-[0.85em] font-bold ${
                            i === 1 ? "border-[#16a34a] bg-[#16a34a] text-white" : "border-black/15 bg-white text-[#161616]"
                          }`}
                        >
                          {n}
                        </span>
                        {i < 2 && <span className="text-[0.9em] font-bold text-black/30">→</span>}
                      </div>
                    ))}
                  </div>
                  <div className="mt-[0.7em] flex justify-center gap-[0.5em] text-[0.7em] font-semibold text-black/40">
                    <span className="rounded-full border border-black/10 px-[0.8em] py-[0.3em]">tools</span>
                    <span className="rounded-full border border-black/10 px-[0.8em] py-[0.3em]">resources</span>
                    <span className="rounded-full border border-black/10 px-[0.8em] py-[0.3em]">prompts</span>
                  </div>
                </div>

                {/* {API} card */}
                <div
                  className="absolute overflow-hidden rounded-[1.3em] shadow-[0_12px_28px_-8px_rgba(20,20,40,0.5)]"
                  style={{
                    left: "27%", top: "8%", width: "28%", aspectRatio: "1.5/1", transform: "rotate(-3deg)",
                    background: "linear-gradient(135deg,#1fe06e,#0c9a49)",
                  }}
                >
                  <span className="absolute left-[8%] top-[6%] whitespace-nowrap text-[5.6em] font-black italic leading-none tracking-tighter text-white/90">
                    {"{API}"}
                  </span>
                </div>

                {/* terminal (sits in the notch) */}
                <div
                  className="absolute overflow-hidden rounded-[1.5em] border-[0.25em] border-white bg-white font-mono shadow-[0_14px_30px_-8px_rgba(20,20,40,0.6)]"
                  style={{ left: "52%", top: "13%", width: "33%", aspectRatio: "1.5/1", transform: "rotate(1deg)" }}
                >
                  <div
                    className="absolute inset-0"
                    style={{ background: "radial-gradient(ellipse at 50% 110%,rgba(34,197,94,0.14),transparent 65%)" }}
                  />
                  <div className="relative flex items-center gap-[0.4em] border-b border-black/10 px-[0.9em] py-[0.6em]">
                    <i className="h-[0.6em] w-[0.6em] rounded-full bg-black/15" />
                    <i className="h-[0.6em] w-[0.6em] rounded-full bg-black/15" />
                    <i className="h-[0.6em] w-[0.6em] rounded-full bg-black/15" />
                    <span className="ml-[0.6em] text-[0.7em] text-black/40">~/api</span>
                  </div>
                  <pre className="relative px-[1em] pt-[0.7em] text-[0.82em] leading-[1.7] text-[#374151]">
                    <span className="text-[#16a34a]">$</span> curl -X POST /v1/messages{"\n"}
                    <span className="text-black/40">{"{"} "status": "ok" {"}"}</span>{"\n"}
                    <span className="text-[#16a34a]">✔</span> 200 OK{"  "}<span className="text-black/40">142ms</span>{"\n"}
                    <span className="text-[#16a34a]">✔</span> mcp{"     "}<span className="text-black/40">3 tools</span>
                  </pre>
                </div>
              </div>

              {/* skill cards that rise out of the folder */}
              <div className="pointer-events-none absolute inset-x-[4%] top-0" style={{ height: "17.8cqw" }}>
                {domains.map((d, di) => (
                  <div key={d.title} className="absolute inset-0 flex items-end justify-center gap-[1.2em]">
                    {d.skills.map(({ name, Icon }, i) => {
                      const on = active === di;
                      return (
                        <div
                          key={name}
                          className="flex flex-col items-center gap-[0.8em] rounded-[1.3em] border border-black/5 bg-white pt-[1.7em] shadow-[0_10px_24px_-6px_rgba(20,20,40,0.28)] motion-reduce:transition-none"
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
                          <Icon className="text-[#161616]" style={{ width: "5.28cqw", height: "5.28cqw" } as CSSProperties} />
                          <span className="px-1 text-center font-semibold leading-tight text-[#161616]" style={{ fontSize: "1.44cqw" }}>
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
                viewBox="0 0 1054 505"
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
                  d="M0 44C0 18 18 0 44 0L505 0C535 0 548 14 556 40C566 74 586 90 620 90L818 90C852 90 872 74 882 40C890 14 903 0 933 0L1010 0C1036 0 1054 18 1054 44L1054 461C1054 487 1036 505 1010 505L44 505C18 505 0 487 0 461Z"
                  fill="url(#folderFront)"
                  stroke="#fff"
                  strokeOpacity="0.8"
                  strokeWidth="2"
                />
              </svg>

              {/* tagline */}
              <p
                className="absolute font-medium leading-[1.1] tracking-[-0.035em]"
                style={{ left: "8%", top: "47%", width: "50%", fontSize: "4cqw" }}
              >
                Languages, frameworks
                <br />
                and tools I
                <br />
                <span className="whitespace-nowrap"><Scale>build with.</Scale></span>
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
            Languages, frameworks
            <br />
            and tools I
            <br />
            <span className="whitespace-nowrap"><Scale>build with.</Scale></span>
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
                  <Icon className="h-[2.4rem] w-[2.4rem] text-[#161616]" />
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
