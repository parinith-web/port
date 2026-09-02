import { GithubIcon } from "@/components/icons/SocialIcons";
import PixelBlast from "@/components/PixelBlast";

export default function Footer() {
  return (
    <footer className="relative flex h-72 w-full flex-col bg-black md:flex-row">
      <div className="relative z-[1001] flex flex-1 flex-col items-center justify-center gap-3 p-8 text-center sm:p-10 lg:p-12">
        <div>
          <span className="block text-3xl font-extrabold tracking-[-1px] text-white sm:text-4xl">
            parinith
          </span>
          <span className="block text-sm text-white/60">
            Creative developer
          </span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/parinith-web"
            target="_blank"
            rel="noopener noreferrer"
            className="flex cursor-pointer items-center justify-center rounded-lg border border-white/15 bg-white/5 p-2 text-white transition-colors hover:bg-white/10"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex cursor-pointer items-center justify-center rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs font-medium text-white transition-colors hover:bg-white/10"
          >
            Resume
          </a>
        </div>
      </div>

      <div className="inset-0 z-[1000] overflow-hidden md:w-[75%]">
        <PixelBlast
          variant="square"
          pixelSize={4}
          color="#ffffff"
          patternScale={2}
          patternDensity={1}
          enableRipples
          rippleSpeed={0.3}
          rippleThickness={0.1}
          rippleIntensityScale={1}
          speed={0.3}
          transparent
          edgeFade={0.25}
        />
      </div>
    </footer>
  );
}
