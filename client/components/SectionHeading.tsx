export const GREEN = "#16a34a";
export const SECTION_FONT = "'Inter Tight', system-ui, sans-serif";
export const PANEL_CLASS = "mx-auto max-w-[1000px] text-white";

export default function SectionHeading({
  title,
  dark = false,
}: {
  title: string;
  dark?: boolean;
}) {
  return (
    <h2
      className={`text-center text-[2.5rem] font-medium leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-7xl ${
        dark ? "text-[#161616]" : "text-white"
      }`}
    >
      {title}
      <span style={{ color: GREEN }}>.</span>
    </h2>
  );
}
