import { useState } from "react";
import { ArrowUpRight, BookOpen, Menu, X } from "lucide-react";

const links = [
  ["Home", "#home"],
  ["Career Paths", "#career-paths"],
  ["Job Roles", "#job-roles"],
  ["Technologies", "#technologies"],
  ["Why Us", "#why-us"],
  ["Career Resources", "#resources"],
  ["Contact", "#contact"],
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-violet-100/80 bg-white/90 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12"
      >
        <a href="#home" onClick={closeMenu} className="flex items-center gap-2.5">
          <span className="grid h-10 w-10 place-items-center rounded-[14px] bg-violet-600 text-white shadow-md shadow-violet-200">
            <BookOpen size={21} strokeWidth={2.2} />
          </span>
          <span className="heading-font text-[19px] font-extrabold tracking-tight text-ink">
            Edu<span className="text-violet-600">Learn</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-[13px] font-semibold text-slate-600 transition hover:text-violet-700"
            >
              {label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-white transition hover:bg-violet-700 sm:inline-flex"
        >
          Login <ArrowUpRight size={15} />
        </a>

        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="grid h-10 w-10 place-items-center rounded-xl border border-violet-100 text-ink lg:hidden"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-violet-100 bg-white px-5 py-4 shadow-soft lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={closeMenu}
                className="rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-700 hover:bg-violet-50 hover:text-violet-700"
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-ink px-4 py-3 text-sm font-bold text-white"
            >
              Login <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
