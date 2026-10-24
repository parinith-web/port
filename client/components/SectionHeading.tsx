export const GREEN = "#16a34a";
export const SECTION_FONT = "'Inter Tight', system-ui, sans-serif";
export const PANEL_CLASS = "w-full text-white";

export default function SectionHeading({
  title,
  dark = false,
}: {
  title: string;
  dark?: boolean;
}) {
  return (
    <h2
      className={`text-center text-[1.75rem] font-bold uppercase leading-[1.02] tracking-tight sm:text-4xl lg:text-5xl ${
        dark ? "text-[#161616]" : "text-white"
      }`}
    >
      {title}
      <span style={{ color: GREEN }}>.</span>
    </h2>
  );
}
