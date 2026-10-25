import { useEffect, useMemo, useRef, useState } from "react";

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
  0: { bg: "rgba(255,255,255,0.07)", shadow: "none" },
  1: { bg: "#1e3a8a", shadow: "none" },
  2: { bg: "#1d4ed8", shadow: "none" },
  3: { bg: "#3b82f6", shadow: "none" },
  4: { bg: "#60a5fa", shadow: "none" },
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
  const gridWrapRef = useRef<HTMLDivElement>(null);
  const [gridWidth, setGridWidth] = useState(0);

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

  useEffect(() => {
    const el = gridWrapRef.current;
    if (!el) return;

    const observer = new ResizeObserver((entries) => {
      const width = entries[0]?.contentRect.width;
      if (width) setGridWidth(width);
    });
    observer.observe(el);
    setGridWidth(el.getBoundingClientRect().width);

    return () => observer.disconnect();
  }, [status]);

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
    return <p className="text-[15px] text-white/55">Loading contribution graph…</p>;
  }

  if (status === "error" || !data) {
    return (
      <p className="text-[15px] text-white/55">
        Couldn't load GitHub contributions right now.
      </p>
    );
  }

  // Fill the available width: solve for a cell size where
  // width = weeks*cellSize + (weeks-1)*gap, with gap = cellSize * GAP_RATIO
  const GAP_RATIO = 0.28;
  const numWeeks = Math.max(weeks.length, 1);
  const rawCellSize =
    gridWidth > 0
      ? gridWidth / (numWeeks + (numWeeks - 1) * GAP_RATIO)
      : 12;
  const cellSize = Math.min(Math.max(rawCellSize, 3), 22);
  const cellGap = cellSize * GAP_RATIO;
  const labelColWidth = 32;

  return (
    <div style={{ fontFamily: "'Inter Tight', system-ui, sans-serif" }}>
      {totalCount !== null && (
        <p className="mb-5 flex items-baseline gap-3">
          <span className="text-[44px] font-medium leading-none tracking-[-0.03em] text-[#3b82f6]">
            {totalCount}
          </span>
          <span className="text-[15px] text-white/55">contributions</span>
        </p>
      )}

      <div className="flex w-full gap-3">
        {/* Day-of-week labels */}
        <div
          className="flex flex-shrink-0 flex-col text-[12px] text-white/45"
          style={{
            width: labelColWidth,
            gap: cellGap,
            marginTop: cellSize + cellGap + 4,
          }}
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

        <div className="min-w-0 flex-1" ref={gridWrapRef}>
          {/* Month labels */}
          <div
            className="relative mb-1 text-[12px] text-white/45"
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
                      className="rounded-[4px] transition-transform duration-150 hover:scale-125 hover:z-10"
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
      <div className="mt-4 flex items-center justify-end gap-1.5 text-[12px] text-white/45">
        <span>Less</span>
        {[0, 1, 2, 3, 4].map((level) => (
          <div
            key={level}
            className="rounded-[4px]"
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
