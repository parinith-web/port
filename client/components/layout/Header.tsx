import { Link } from "react-router-dom";

const navItems = [
  { label: "home", to: "/" },
  { label: "skills", to: "/skills" },
  { label: "projects", to: "/projects" },
  { label: "activity", to: "/activity" },
];

export default function Header() {
  return (
    <header className="w-full">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-5 sm:px-10 lg:px-[73px] lg:py-[18px]">
        <nav>
          <ul className="flex flex-wrap items-center gap-6 sm:gap-12">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm font-normal leading-5 tracking-[-0.35px] text-white transition-colors hover:text-white/70"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="h-px w-full bg-white/80" />
    </header>
  );
}
