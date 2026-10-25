const navItems = [
  { label: "Skills", to: "/#skills" },
  { label: "Projects", to: "/#projects" },
  { label: "Activity", to: "/#activity" },
];

export default function Header() {
  return (
    <header
      className="relative z-50 w-full bg-page text-white"
      style={{ fontFamily: "'Inter Tight', system-ui, sans-serif" }}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-5 py-3 sm:px-10 lg:px-[73px]">
        <a
          href="/"
          className="text-lg font-extrabold tracking-tighter focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1fe06e]"
        >
          Parinith<span className="text-[#1fe06e]">.</span>
        </a>

        <nav aria-label="Main">
          <ul className="flex items-center gap-5 sm:gap-10">
            {navItems.map((item) => (
              <li key={item.to}>
                <a
                  href={item.to}
                  className="text-sm font-medium tracking-tight text-white/80 transition-colors hover:text-[#1fe06e] focus-visible:text-[#1fe06e] focus-visible:outline-none sm:text-base"
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
          className="rounded-md bg-[#1fe06e] px-4 py-2 text-sm font-semibold tracking-tight text-black transition-colors hover:bg-[#4dea8a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1fe06e] sm:text-base"
        >
          Resume
        </a>
      </div>
    </header>
  );
}
