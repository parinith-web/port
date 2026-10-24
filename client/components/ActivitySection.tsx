import { ArrowUpRight } from "lucide-react";
import SectionHeading, { GREEN, PANEL_CLASS } from "@/components/SectionHeading";
import GithubActivityCalendar from "@/components/GithubActivityCalendar";

const FONT = "'Inter Tight', system-ui, sans-serif";
const GITHUB_USERNAME = "parinith-web";

function Block({
  title,
  subtitle,
  href,
  children,
}: {
  title: string;
  subtitle: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ fontFamily: FONT }}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-2 text-[24px] font-medium leading-tight tracking-[-0.02em] text-white sm:text-[26px]"
      >
        {title}
        <ArrowUpRight
          className="h-5 w-5 text-white/40 transition-colors group-hover:text-white"
          strokeWidth={2}
        />
      </a>
      <p className="mt-1 text-[15px] text-white/55">{subtitle}</p>
      <div className="mt-8">{children}</div>
    </div>
  );
}

export default function ActivitySection() {
  return (
    <section id="activity" className="mt-28 scroll-mt-24 lg:mt-40">
      <div className={PANEL_CLASS} style={{ fontFamily: FONT }}>
        <SectionHeading title="Activity" />

        <div className="mt-12 flex flex-col gap-16 lg:mt-16">
          <Block
            title="GitHub"
            subtitle="Contributions over the last year"
            href={`https://github.com/${GITHUB_USERNAME}`}
          >
            <div className="overflow-x-auto">
              <GithubActivityCalendar username={GITHUB_USERNAME} />
            </div>
          </Block>
        </div>
      </div>
    </section>
  );
}
