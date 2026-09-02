const navItems = [
  { label: "skills", to: "#skills" },
  { label: "projects", to: "#projects" },
  { label: "activity", to: "#activity" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-black">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-3 sm:px-10 lg:px-[73px] lg:py-3">
        <nav>
          <ul className="flex flex-wrap items-center gap-6 sm:gap-12">
            {navItems.map((item) => (
              <li key={item.to}>
                <a
                  href={item.to}
                  className="text-sm font-normal capitalize leading-5 tracking-[-0.35px] text-white transition-colors hover:text-white/70"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex cursor-pointer items-center justify-center rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs font-medium text-white transition-colors hover:bg-white/10"
        >
          Resume
        </a>
      </div>
      <div className="h-px w-full bg-white/10" />
    </header>
  );
}
