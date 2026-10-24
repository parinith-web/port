import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";

/* ---- Edit your details here ---- */
const PROFILE = {
  student: "NIT DELHI",
  location: "DELHI, INDIA",
  github: "https://github.com/parinith-web",
  resume: "/resume.pdf",
};

const RED = "#1fe06e"; // accent (green)

const Tag = ({ children }: { children: ReactNode }) => (
  <div className="flex items-center text-[15px] font-bold uppercase leading-none tracking-tight text-white sm:text-[clamp(14px,2.1vw,30px)]">
    {children}
  </div>
);

export default function Hero() {
  return (
    <section
      className="relative flex flex-col overflow-hidden bg-white text-black"
      style={{ fontFamily: "'Inter Tight', system-ui, sans-serif" }}
    >
      {/* rough-edge filter for the black pedestal */}
      <svg width="0" height="0" className="absolute" aria-hidden>
        <filter id="rough" x="-5%" y="-10%" width="110%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="7" />
        </filter>
      </svg>

      {/* info row: both blocks sit the same distance from their own page edge */}
      <div className="relative z-20 flex items-start justify-between gap-x-6 px-5 pt-10 text-[15px] uppercase sm:px-10 lg:px-[17.8%] lg:pt-[72px] lg:text-[19px]">
        {[
          ["Student", PROFILE.student],
          ["Based in", PROFILE.location],
        ].map(([k, v]) => (
          <div key={k}>
            <p className="font-semibold leading-none" style={{ color: RED }}>
              <span className="text-black">\</span> {k}
            </p>
            <p className="mt-2 pl-[10px] font-medium leading-none">{v}</p>
          </div>
        ))}
      </div>

      {/* wordmark */}
      <div className="relative mt-auto flex justify-center pt-[clamp(36px,5.5vw,100px)]">
        <h1
          aria-label="Parinith"
          className="relative mb-[0.02em] flex select-none items-end leading-[0.8] tracking-[-0.04em]"
          style={{ fontFamily: "'Archivo Black', 'Inter Tight', sans-serif", fontSize: "clamp(76px, 17vw, 300px)" }}
        >
          <span className="p-wrap" aria-hidden>
            <span className="p-cut">p</span>
            <span className="p-tail"><span className="halftone">p</span></span>
          </span>
          <span className="crisp" aria-hidden>a</span>
          <span className="crisp" aria-hidden>r</span>
          <span className="crisp -ml-[0.04em]" aria-hidden>i</span>
          <span className="block-n" aria-hidden>n</span>
          <span className="halftone ml-[0.03em]" aria-hidden>i</span>
          <span className="halftone fade-far" aria-hidden>t</span>
          <span className="halftone fade-far -ml-[0.04em]" aria-hidden>h</span>
        </h1>
      </div>

      {/* pedestal */}
      <div className="relative z-0 flex flex-col items-center gap-12 pb-6 pt-[clamp(120px,13.5vw,230px)] lg:gap-[72px] lg:pb-8">
        <div className="absolute -inset-x-8 bottom-[-16px] top-0 -z-10 bg-black" style={{ filter: "url(#rough)" }} />
        <div className="absolute inset-x-0 top-[clamp(48px,5vw,84px)] flex flex-wrap items-center justify-center gap-x-6 gap-y-3 px-5 sm:gap-x-[4vw] sm:pl-[calc(20px+4vw)]">
          <Tag>
            <span>Creative</span>
            <span style={{ color: RED }}>-Developer</span>
          </Tag>
          <Tag>
            <span>Open Source</span>
            <span style={{ color: RED }}>&nbsp;Contributor</span>
          </Tag>
        </div>

        {/* actions */}
        <div className="flex flex-wrap items-center justify-center gap-3 px-5">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-white/30 hover:bg-white/[0.08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1fe06e] sm:text-base"
          >
            <GithubIcon className="h-4 w-4 sm:h-5 sm:w-5" />
            GitHub
          </a>
          <a
            href={PROFILE.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-[#1fe06e] px-5 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-[#4dea8a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1fe06e] sm:text-base"
          >
            Resume
            <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2.25} />
          </a>
        </div>
      </div>
    </section>
  );
}
