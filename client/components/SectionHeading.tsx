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
      className={`text-center text-xl font-bold uppercase leading-[1.02] tracking-tight sm:text-2xl lg:text-[2rem] ${
        dark ? "text-[#161616]" : "text-white"
      }`}
    >
      {title}
      <span style={{ color: GREEN }}>.</span>
    </h2>
  );
}
