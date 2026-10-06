import { ArrowUpRight, BookOpen, Github, Instagram, Linkedin, MapPin, Phone } from "lucide-react";

const footerLinks = {
  "Quick Links": [
    ["Home", "#home"],
    ["Career Paths", "#career-paths"],
    ["Job Roles", "#job-roles"],
    ["Technologies", "#technologies"],
    ["Why Us", "#why-us"],
    ["Career Resources", "#resources"],
    ["Contact", "#contact"],
  ],
  "Career Domains": [
    ["Software & IT", "#career-paths"],
    ["Data & AI", "#career-paths"],
    ["Electronics & Embedded", "#career-paths"],
    ["Electrical & Automation", "#career-paths"],
    ["Mechanical & Robotics", "#career-paths"],
    ["Civil & Construction", "#career-paths"],
    ["Aerospace", "#career-paths"],
    ["Chemical Engineering", "#career-paths"],
  ],
};

function Footer() {
  return (
    <footer className="bg-[#211b36] px-5 pb-6 pt-14 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-white/10 pb-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">
          <div>
            <a href="#home" className="inline-flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-[14px] bg-violet-500 text-white">
                <BookOpen size={21} strokeWidth={2.2} />
              </span>
              <span className="heading-font text-[19px] font-extrabold tracking-tight">
                Edu<span className="text-violet-300">Learn</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
              EduLearn helps students and graduates explore engineering careers, technology roles and professional opportunities across multiple industries.
            </p>
            <div className="mt-5 flex gap-2.5">
              {[
                { label: "LinkedIn", icon: Linkedin },
                { label: "GitHub", icon: Github },
                { label: "Instagram", icon: Instagram },
              ].map(({ label, icon: Icon }) => (
                <a key={label} href="#contact" aria-label={label} className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 text-slate-300 transition hover:border-violet-400 hover:bg-violet-500 hover:text-white">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-sm font-bold text-white">{heading}</h3>
              <ul className="mt-4 space-y-3">
                {links.map(([label, href]) => (
                  <li key={label}>
                    <a href={href} className="text-sm text-slate-400 transition hover:text-violet-300">{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="text-sm font-bold text-white">Contact</h3>
            <a href="mailto:careers@edulearn.com" className="mt-4 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-violet-300">
              careers@edulearn.com <ArrowUpRight size={14} />
            </a>
            <a href="tel:+919000000000" className="mt-3 flex items-center gap-2 text-sm text-slate-400 transition hover:text-violet-300">
              <Phone size={14} /> +91 90000 00000
            </a>
            <p className="mt-3 flex items-center gap-2 text-sm text-slate-400">
              <MapPin size={14} /> India
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 EduLearn. All rights reserved.</p>
          <p>Find a career path that fits.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
