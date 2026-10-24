import { ArrowUpRight } from "lucide-react";
import SectionHeading, { GREEN, PANEL_CLASS } from "@/components/SectionHeading";
import { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import GithubActivityCalendar from "@/components/GithubActivityCalendar";

const FONT = "'Inter Tight', system-ui, sans-serif";
const GITHUB_USERNAME = "parinith-web";
const CODEFORCES_HANDLE = "parinithreddymavurapu";

interface CfContest {
  contestId: number;
  contestName: string;
  rank: number;
  ratingUpdateTimeSeconds: number;
  oldRating: number;
  newRating: number;
}

function ratingColor(rating: number) {
  if (rating >= 2400) return "#ff3333";
  if (rating >= 2300) return "#ff8c00";
  if (rating >= 2100) return "#ff8c00";
  if (rating >= 1900) return "#aa00aa";
  if (rating >= 1600) return "#0000ff";
  if (rating >= 1400) return "#03a89e";
  if (rating >= 1200) return "#00a000";
  return "#808080";
}

function CustomTooltip({ active, payload }: any) {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload as CfContest;
  const date = new Date(
    d.ratingUpdateTimeSeconds * 1000,
  ).toLocaleDateString();
  const delta = d.newRating - d.oldRating;
  return (
    <div className="rounded-xl border border-white/15 bg-[#0a0a0a] px-3 py-2 text-xs text-white shadow-lg" style={{ fontFamily: FONT }}>
      <p className="font-semibold">{d.contestName}</p>
      <p className="mt-1 text-white/60">{date}</p>
      <p className="mt-1">
        Rating: <span className="font-semibold">{d.newRating}</span>{" "}
        <span className={delta >= 0 ? "text-emerald-400" : "text-red-400"}>
          ({delta >= 0 ? "+" : ""}
          {delta})
        </span>
      </p>
      <p className="text-white/60">Rank: {d.rank}</p>
    </div>
  );
}

function CodeforcesChart() {
  const [contests, setContests] = useState<CfContest[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "error">(
    "loading",
  );

  useEffect(() => {
    let cancelled = false;

    fetch(
      `https://codeforces.com/api/user.rating?handle=${CODEFORCES_HANDLE}`,
    )
      .then((res) => res.json())
      .then((data) => {
        if (cancelled) return;
        if (data.status !== "OK") throw new Error(data.comment);
        setContests(data.result as CfContest[]);
        setStatus("ready");
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (status === "loading") {
    return <p className="text-[15px] text-white/55">Loading rating history…</p>;
  }

  if (status === "error" || contests.length === 0) {
    return (
      <p className="text-[15px] text-white/55">
        Couldn't load Codeforces rating history right now.
      </p>
    );
  }

  const latest = contests[contests.length - 1];
  const color = ratingColor(latest.newRating);

  return (
    <div>
      <div className="mb-5 flex items-baseline gap-3">
        <span
          className="text-[44px] font-medium leading-none tracking-[-0.03em]"
          style={{ color }}
        >
          {latest.newRating}
        </span>
        <span className="text-[15px] text-white/55">
          current rating · {contests.length} contests
        </span>
      </div>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={contests}
            margin={{ top: 8, right: 8, left: 0, bottom: 0 }}
          >
            <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
            <XAxis
              dataKey="ratingUpdateTimeSeconds"
              tick={false}
              axisLine={{ stroke: "rgba(255,255,255,0.12)" }}
            />
            <YAxis
              domain={[(min: number) => Math.floor((min - 100) / 100) * 100, (max: number) => Math.ceil((max + 100) / 100) * 100]}
              tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 12, fontFamily: FONT }}
              axisLine={false}
              tickLine={false}
              width={48}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              isAnimationActive={false}
              type="monotone"
              dataKey="newRating"
              stroke={color}
              strokeWidth={2.5}
              dot={{ r: 3, strokeWidth: 0, fill: color }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

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

          <Block
            title="Codeforces"
            subtitle="Contest rating history"
            href={`https://codeforces.com/profile/${CODEFORCES_HANDLE}`}
          >
            <CodeforcesChart />
          </Block>
        </div>
      </div>
    </section>
  );
}
