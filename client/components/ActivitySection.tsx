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
    <div className="rounded-md border border-white/10 bg-[#0a0a0a] px-3 py-2 text-xs text-white shadow-lg">
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
    return <p className="text-sm text-white/50">Loading rating history…</p>;
  }

  if (status === "error" || contests.length === 0) {
    return (
      <p className="text-sm text-white/50">
        Couldn't load Codeforces rating history right now.
      </p>
    );
  }

  const latest = contests[contests.length - 1];
  const color = ratingColor(latest.newRating);

  return (
    <div>
      <div className="mb-4 flex items-baseline gap-2">
        <span className="text-2xl font-extrabold" style={{ color }}>
          {latest.newRating}
        </span>
        <span className="text-sm text-white/50">
          current rating · {contests.length} contests
        </span>
      </div>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={contests}
            margin={{ top: 8, right: 8, left: -20, bottom: 0 }}
          >
            <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
            <XAxis
              dataKey="ratingUpdateTimeSeconds"
              tick={false}
              axisLine={{ stroke: "rgba(255,255,255,0.1)" }}
            />
            <YAxis
              tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              width={40}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="newRating"
              stroke={color}
              strokeWidth={2}
              dot={{ r: 3, strokeWidth: 0, fill: color }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default function ActivitySection() {
  return (
    <section id="activity" className="mt-20 scroll-mt-24 lg:mt-28">
      <h2 className="text-3xl font-extrabold tracking-[-1px] text-white sm:text-4xl lg:text-5xl">
        Activity
      </h2>

      <div className="mt-10 flex flex-col gap-6 lg:mt-12 lg:gap-8">
        {/* GitHub Activity */}
        <div className="overflow-hidden rounded-md border border-white/10 bg-white/[0.03]">
          <h3 className="border-b border-white/10 px-5 py-4 text-sm font-semibold uppercase tracking-[1px] text-white/50 sm:px-6">
            GitHub Activity
          </h3>
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block overflow-x-auto p-5 sm:p-6"
          >
            <img
              src={`https://ghchart.rshah.org/00d67a/${GITHUB_USERNAME}`}
              alt={`${GITHUB_USERNAME}'s GitHub contribution graph`}
              className="w-full min-w-[640px]"
              loading="lazy"
            />
          </a>
        </div>

        {/* Codeforces Contest Rating */}
        <div className="overflow-hidden rounded-md border border-white/10 bg-white/[0.03]">
          <a
            href={`https://codeforces.com/profile/${CODEFORCES_HANDLE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block border-b border-white/10 px-5 py-4 text-sm font-semibold uppercase tracking-[1px] text-white/50 transition-colors hover:text-white/80 sm:px-6"
          >
            Codeforces Contest Rating
          </a>
          <div className="p-5 sm:p-6">
            <CodeforcesChart />
          </div>
        </div>
      </div>
    </section>
  );
}
