import { GithubIcon } from "@/components/icons/SocialIcons";
import PixelBlast from "@/components/PixelBlast";

export default function Footer() {
  return (
    <footer className="relative flex h-72 w-full flex-col bg-white md:flex-row">
      <div className="relative z-[1001] flex flex-1 flex-col items-center justify-center gap-3 p-8 text-center sm:p-10 lg:p-12">
        <div>
          <span className="block text-3xl font-extrabold tracking-[-1px] text-black sm:text-4xl">
            parinith
          </span>
          <span className="block text-sm text-gray-400">
            Creative developer
          </span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/parinith-web"
            target="_blank"
            rel="noopener noreferrer"
            className="flex cursor-pointer items-center justify-center rounded-lg border border-black/10 bg-white p-2 text-black shadow-[inset_0_-1px_2px_rgba(0,0,0,0.04),inset_0_-4px_10px_rgba(0,0,0,0.02)] transition-colors hover:bg-gray-100/30"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex cursor-pointer items-center justify-center rounded-lg border border-black/10 bg-white px-3 py-2 text-xs font-medium text-black shadow-[inset_0_-1px_2px_rgba(0,0,0,0.04),inset_0_-4px_10px_rgba(0,0,0,0.02)] transition-colors hover:bg-gray-100/30"
          >
            Resume
          </a>
        </div>
      </div>

      <div className="inset-0 z-[1000] overflow-hidden md:w-[75%]">
        <PixelBlast
          variant="square"
          pixelSize={4}
          color="#000000"
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
