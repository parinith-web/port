export const GREEN = "#16a34a";
export const SECTION_FONT = "'Inter Tight', system-ui, sans-serif";
export const PANEL_CLASS = "w-full text-white";

export default function SectionHeading({
  title,
  lead,
  dark = false,
}: {
  title: string;
  /** optional leading word(s) in the normal heading colour; `title` then turns green */
  lead?: string;
  dark?: boolean;
}) {
  return (
    <h2
      className={`text-center text-lg font-bold uppercase leading-[1.02] tracking-tight sm:text-xl lg:text-[1.6rem] ${
        dark ? "text-[#161616]" : "text-white"
      }`}
    >
      {lead && <>{lead} </>}
      {lead ? <span style={{ color: GREEN }}>{title}</span> : title}
      <span style={{ color: GREEN }}>.</span>
    </h2>
  );
}
