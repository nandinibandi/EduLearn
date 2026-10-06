import { ArrowUpRight, BookOpen, Github, Instagram, Linkedin, Youtube } from "lucide-react";

const footerLinks = {
  "Quick Links": [
    ["Home", "#home"],
    ["Why EduLearn", "#why-us"],
    ["Learning roadmap", "#courses"],
    ["Placements", "#placements"],
  ],
  Courses: [
    ["Full Stack Development", "#courses"],
    ["Frontend Development", "#courses"],
    ["Backend Development", "#courses"],
    ["Career paths", "#career-paths"],
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
              Learn the skills to build what&apos;s next. Your journey into full stack development starts here.
            </p>
            <div className="mt-5 flex gap-2.5">
              {[
                { label: "LinkedIn", icon: Linkedin },
                { label: "Instagram", icon: Instagram },
                { label: "YouTube", icon: Youtube },
                { label: "GitHub", icon: Github },
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
            <h3 className="text-sm font-bold text-white">Let&apos;s connect</h3>
            <p className="mt-4 text-sm leading-6 text-slate-400">Have a question about the course? We&apos;re happy to help.</p>
            <a href="mailto:hello@edulearn.example" className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-violet-300 hover:text-white">
              hello@edulearn.example <ArrowUpRight size={14} />
            </a>
            <a href="#contact" className="mt-5 block text-sm font-bold text-white underline decoration-violet-500 decoration-2 underline-offset-4 hover:text-violet-200">
              Request a callback
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} EduLearn. All rights reserved.</p>
          <p>Made for your next big thing.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
