import { useEffect, useMemo, useState } from "react";

interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

interface ContributionsResponse {
  total: Record<string, number>;
  contributions: ContributionDay[];
}

const LEVEL_STYLES: Record<number, { bg: string; shadow: string }> = {
  0: {
    bg: "rgba(255,255,255,0.06)",
    shadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
  },
  1: {
    bg: "#0e4429",
    shadow: "0 1px 2px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
  },
  2: {
    bg: "#006d32",
    shadow: "0 1px 3px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.08)",
  },
  3: {
    bg: "#26a641",
    shadow: "0 1px 4px rgba(0,214,122,0.35), inset 0 1px 0 rgba(255,255,255,0.12)",
  },
  4: {
    bg: "#39d353",
    shadow: "0 1px 6px rgba(57,211,83,0.55), inset 0 1px 0 rgba(255,255,255,0.18)",
  },
};

const MONTH_NAMES = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const DAY_LABELS = ["", "Mon", "", "Wed", "", "Fri", ""];

function buildWeeks(contributions: ContributionDay[]) {
  if (contributions.length === 0) return [];

  const firstDate = new Date(contributions[0].date + "T00:00:00");
  const leadingEmpty = firstDate.getDay();

  const cells: (ContributionDay | null)[] = [
    ...Array(leadingEmpty).fill(null),
    ...contributions,
  ];

  const weeks: (ContributionDay | null)[][] = [];
  for (let i = 0; i < cells.length; i += 7) {
    weeks.push(cells.slice(i, i + 7));
  }
  return weeks;
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function GithubActivityCalendar({
  username,
}: {
  username: string;
}) {
  const [data, setData] = useState<ContributionsResponse | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">(
    "loading",
  );

  useEffect(() => {
    let cancelled = false;

    fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`)
      .then((res) => {
        if (!res.ok) throw new Error("bad response");
        return res.json();
      })
      .then((json: ContributionsResponse) => {
        if (cancelled) return;
        setData(json);
        setStatus("ready");
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, [username]);

  const weeks = useMemo(
    () => (data ? buildWeeks(data.contributions) : []),
    [data],
  );

  const monthLabels = useMemo(() => {
    const labels: { weekIndex: number; label: string }[] = [];
    let lastMonth = -1;
    weeks.forEach((week, weekIndex) => {
      const firstRealDay = week.find((d) => d !== null);
      if (!firstRealDay) return;
      const month = new Date(firstRealDay.date + "T00:00:00").getMonth();
      if (month !== lastMonth) {
        labels.push({ weekIndex, label: MONTH_NAMES[month] });
        lastMonth = month;
      }
    });
    return labels;
  }, [weeks]);

  const totalCount = data
    ? Object.values(data.total).reduce((a, b) => a + b, 0)
    : null;

  if (status === "loading") {
    return <p className="text-sm text-white/50">Loading contribution graph…</p>;
  }

  if (status === "error" || !data) {
    return (
      <p className="text-sm text-white/50">
        Couldn't load GitHub contributions right now.
      </p>
    );
  }

  const cellSize = 11;
  const cellGap = 3;

  return (
    <div>
      {totalCount !== null && (
        <p className="mb-4 text-sm text-white/50">
          <span className="font-semibold text-white/80">{totalCount}</span>{" "}
          contributions in the last year
        </p>
      )}

      <div className="inline-flex min-w-full gap-3">
        {/* Day-of-week labels */}
        <div
          className="flex flex-col text-[11px] text-white/40"
          style={{ gap: cellGap, marginTop: cellSize + cellGap + 4 }}
        >
          {DAY_LABELS.map((label, i) => (
            <div
              key={i}
              style={{ height: cellSize }}
              className="flex items-center"
            >
              {label}
            </div>
          ))}
        </div>

        <div>
          {/* Month labels */}
          <div
            className="relative mb-1 text-[11px] text-white/40"
            style={{ height: 14 }}
          >
            {monthLabels.map(({ weekIndex, label }) => (
              <span
                key={weekIndex}
                className="absolute top-0"
                style={{ left: weekIndex * (cellSize + cellGap) }}
              >
                {label}
              </span>
            ))}
          </div>

          {/* Weeks grid */}
          <div className="flex" style={{ gap: cellGap }}>
            {weeks.map((week, weekIndex) => (
              <div
                key={weekIndex}
                className="flex flex-col"
                style={{ gap: cellGap }}
              >
                {week.map((day, dayIndex) =>
                  day ? (
                    <div
                      key={dayIndex}
                      title={`${day.count} contribution${day.count === 1 ? "" : "s"} on ${formatDate(day.date)}`}
                      className="rounded-[3px] transition-transform duration-150 hover:scale-125 hover:z-10"
                      style={{
                        width: cellSize,
                        height: cellSize,
                        background: LEVEL_STYLES[day.level].bg,
                        boxShadow: LEVEL_STYLES[day.level].shadow,
                      }}
                    />
                  ) : (
                    <div
                      key={dayIndex}
                      style={{ width: cellSize, height: cellSize }}
                    />
                  ),
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-4 flex items-center justify-end gap-1.5 text-[11px] text-white/40">
        <span>Less</span>
        {[0, 1, 2, 3, 4].map((level) => (
          <div
            key={level}
            className="rounded-[3px]"
            style={{
              width: cellSize,
              height: cellSize,
              background: LEVEL_STYLES[level].bg,
              boxShadow: LEVEL_STYLES[level].shadow,
            }}
          />
        ))}
        <span>More</span>
      </div>
    </div>
  );
}
