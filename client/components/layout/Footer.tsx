import { ArrowUpRight, Mail } from "lucide-react";
import {
  CodeforcesIcon,
  GithubIcon,
  LeetCodeIcon,
  LinkedinIcon,
} from "@/components/icons/SocialIcons";

/* ---- Edit your social links here ---- */
const SOCIALS = [
  { label: "Resume", href: "/resume.pdf", Icon: null },
  { label: "GitHub", href: "https://github.com/parinith-web", Icon: GithubIcon },
  { label: "LeetCode", href: "https://leetcode.com/u/parinith_reddy/", Icon: LeetCodeIcon },
  { label: "Codeforces", href: "https://codeforces.com/profile/parinithreddymavurapu", Icon: CodeforcesIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/parinith-reddy", Icon: LinkedinIcon },
  { label: "Mail", href: "mailto:parinithreddymav@gmail.com", Icon: Mail },
];

const WORD = "parinith";

// A few strokes drop out of the white layer (a leg of the h and n, the stem of the t, the right
// side of the a) and only their black shadow stays. Each hole is a soft elliptical fade
// (x, y, rx, ry in % of the letter box); the grain filter turns the fade into a speckled blend.
type Hole = [x: number, y: number, rx: number, ry: number];
const hole = ([x, y, rx, ry]: Hole) =>
  `radial-gradient(ellipse ${rx}% ${ry}% at ${x}% ${y}%, transparent 0%, transparent 52%, #000 100%)`;
// how far the black overlay reaches into each letter (% along the bottom-left -> top-right diagonal)
const FADE: [from: number, to: number][] = [
  [20, 62], // p
  [14, 70], // a
  [26, 72], // r
  [14, 62], // i
  [18, 76], // n
  [24, 70], // i
  [20, 86], // t
  [18, 74], // h
];
const HOLES: Hole[][] = [
  [], // p
  [[89, 47, 15, 26]], // a
  [], // r
  [], // i
  [[89, 49, 15, 27]], // n
  [], // i
  [[46, 47, 14, 24]], // t
  [[89, 49, 15, 27]], // h
];

// the grain is measured in px, so smaller screens (smaller letters) get a finer grain
const GRAIN_TIERS = [
  { id: "sm", std: 1.8, freq: 1.5 },
  { id: "md", std: 3.6, freq: 0.9 },
  { id: "lg", std: 6.5, freq: 0.8 },
];

export default function Footer() {
  return (
    <footer
      className="relative w-full overflow-hidden bg-[#0a0f11] text-white"
      style={{ fontFamily: "'Inter Tight', system-ui, sans-serif" }}
    >
      {/* grainy, spray-painted edge filter for the wordmark */}
      <svg width="0" height="0" className="absolute" aria-hidden>
        <defs>
          {GRAIN_TIERS.flatMap((t) =>
            [
              { key: "white", color: "#6e7478", std: t.std * 0.75, freq: t.freq, seed: 7, slope: 6, icpt: -2.6 },
              { key: "ink", color: "#000000", std: t.std * 0.75, freq: t.freq * 0.9, seed: 11, slope: 6, icpt: -2.6 },
              { key: "shadow", color: "#000000", std: t.std * 1.5, freq: t.freq * 0.82, seed: 3, slope: 2.6, icpt: -0.8 },
            ].map((f) => (
              <filter
                key={`${t.id}-${f.key}`}
                id={`footer-grain-${f.key}-${t.id}`}
                x="-3%"
                y="-6%"
                width="106%"
                height="124%"
                colorInterpolationFilters="sRGB"
              >
                {/* soft blur + fine noise, then hard-thresholded => speckled, spray-painted edges */}
                <feGaussianBlur in="SourceAlpha" stdDeviation={f.std} result="soft" />
                <feTurbulence type="fractalNoise" baseFrequency={f.freq} numOctaves="2" seed={f.seed} result="noise" />
                <feColorMatrix
                  in="noise"
                  type="matrix"
                  values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  1.6 0 0 0 -0.3"
                  result="noiseAlpha"
                />
                <feComposite in="soft" in2="noiseAlpha" operator="arithmetic" k1="0" k2="1" k3="0.38" k4="-0.19" result="mix" />
                <feComponentTransfer in="mix" result="cut">
                  <feFuncA type="linear" slope={f.slope} intercept={f.icpt} />
                </feComponentTransfer>
                <feFlood floodColor={f.color} result="paint" />
                <feComposite in="paint" in2="cut" operator="in" />
              </filter>
            )),
          )}
          {/* slow, low-frequency wobble over the whole word so the strokes flare like a display face */}
          {[
            { id: "sm", scale: 7 },
            { id: "md", scale: 14 },
            { id: "lg", scale: 26 },
          ].map((w) => (
            <filter key={w.id} id={`footer-warp-${w.id}`} x="-2%" y="-10%" width="104%" height="130%">
              <feTurbulence type="fractalNoise" baseFrequency="0.004 0.009" numOctaves="2" seed="5" result="w" />
              <feDisplacementMap in="SourceGraphic" in2="w" scale={w.scale} xChannelSelector="R" yChannelSelector="G" />
            </filter>
          ))}
        </defs>
      </svg>

      {/* socials */}
      <nav
        aria-label="Social links"
        className="relative z-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 px-6 pt-16 sm:gap-x-16 lg:pt-24"
      >
        {SOCIALS.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-[17px] font-medium tracking-[-0.01em] text-white/65 transition-colors hover:text-white sm:text-[20px]"
          >
            {Icon && <Icon className="h-[18px] w-[18px] sm:h-5 sm:w-5" />}
            {label}
            {!Icon && (
              <ArrowUpRight className="h-4 w-4 text-white/40 transition-colors group-hover:text-[#16a34a]" strokeWidth={2.25} />
            )}
          </a>
        ))}
      </nav>

      {/* giant wordmark */}
      <div className="relative select-none px-[2vw] pb-[1vw] pt-[3vw]" aria-hidden>
        <div
          className="footer-warp relative -mb-[0.22em] whitespace-nowrap text-center leading-[0.9] tracking-[-0.04em]"
          style={{ fontFamily: "'Archivo', 'Inter Tight', sans-serif", fontWeight: 500, fontVariationSettings: "'wdth' 125", fontSize: "clamp(70px, 23vw, 460px)" }}
        >
          {WORD.split("").map((ch, i) => {
            const mask = HOLES[i].length ? HOLES[i].map(hole).join(", ") : "none";
            return (
              <span key={i} className="relative isolate inline-block">
                {/* white letter (padded below so the p's tail is not clipped); parts are masked away */}
                <span className="footer-grain-white relative block text-white">
                  <span
                    className="block pb-[0.4em]"
                    style={{ WebkitMaskImage: mask, maskImage: mask, WebkitMaskComposite: "source-in", maskComposite: "intersect" }}
                  >
                    {ch}
                  </span>
                </span>
                {/* solid offset shadow underneath */}
                <span
                  className="footer-grain-shadow pointer-events-none absolute inset-0 -z-10 block text-black"
                  style={{ transform: "translate(-0.025em, 0.06em)" }}
                >
                  {ch}
                </span>
                {/* black overlay, strongest toward the lower-left and dithered away toward the upper-right,
                    so black and white blend into each other instead of meeting on a hard line */}
                <span
                  className="footer-grain-ink pointer-events-none absolute inset-0 block text-black"
                  style={{ transform: "translate(-0.02em, 0.045em)" }}
                >
                  <span
                    className="block pb-[0.4em]"
                    style={{
                      WebkitMaskImage: `linear-gradient(to top right, #000 ${FADE[i][0]}%, transparent ${FADE[i][1]}%)`,
                      maskImage: `linear-gradient(to top right, #000 ${FADE[i][0]}%, transparent ${FADE[i][1]}%)`,
                    }}
                  >
                    {ch}
                  </span>
                </span>
              </span>
            );
          })}
        </div>
      </div>
      <h2 className="sr-only">Parinith</h2>
    </footer>
  );
}
