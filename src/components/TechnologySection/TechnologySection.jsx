import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Braces,
  Cloud,
  Code2,
  Cpu,
  Database,
  FileCode2,
  GitBranch,
  Github,
  Layers3,
  Search,
  Sparkles,
  Wifi,
} from "lucide-react";

const skills = [
  { title: "HTML5", icon: FileCode2, tone: "bg-orange-50 text-orange-600" },
  { title: "CSS3", icon: Code2, tone: "bg-sky-50 text-sky-600" },
  { title: "JavaScript", icon: Braces, tone: "bg-amber-50 text-amber-600" },
  { title: "React", icon: Layers3, tone: "bg-cyan-50 text-cyan-600" },
  { title: "Python", icon: Code2, tone: "bg-indigo-50 text-indigo-600" },
  { title: "Java", icon: Code2, tone: "bg-rose-50 text-rose-600" },
  { title: "SQL", icon: Database, tone: "bg-violet-50 text-violet-600" },
  { title: "MySQL", icon: Database, tone: "bg-blue-50 text-blue-600" },
  { title: "Git", icon: GitBranch, tone: "bg-orange-50 text-orange-600" },
  { title: "GitHub", icon: Github, tone: "bg-slate-100 text-slate-700" },
  { title: "Machine Learning", icon: BrainCircuit, tone: "bg-fuchsia-50 text-fuchsia-600" },
  { title: "Data Analytics", icon: BarChart3, tone: "bg-emerald-50 text-emerald-600" },
  { title: "Cloud", icon: Cloud, tone: "bg-sky-50 text-sky-600" },
  { title: "IoT", icon: Wifi, tone: "bg-amber-50 text-amber-600" },
  { title: "Embedded Systems", icon: Cpu, tone: "bg-violet-50 text-violet-600" },
];

const journey = [
  {
    title: "Discover",
    detail: "Explore career paths based on your education and interests.",
    icon: Search,
  },
  {
    title: "Learn",
    detail: "Build the technical and professional skills required for your target role.",
    icon: Braces,
  },
  {
    title: "Prepare",
    detail: "Improve your resume, coding skills and interview preparation.",
    icon: Sparkles,
  },
  {
    title: "Get Hired",
    detail: "Discover opportunities and confidently apply for suitable jobs.",
    icon: ArrowRight,
  },
];

function TechnologySection() {
  return (
    <>
      <section id="technologies" className="section-padding bg-white">
        <div className="section-shell">
          <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-end">
            <div>
              <span className="eyebrow">Build in-demand skills</span>
              <h2 className="heading-font mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                Skills That Open Career Opportunities
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-slate-600 md:justify-self-end">
              Explore technologies and practical skills used across software, data, AI, connected devices, and modern engineering.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map(({ title, icon: Icon, tone }) => (
              <article
                key={title}
                className="lift-card flex min-h-[110px] items-center gap-4 rounded-[1.4rem] border border-slate-100 bg-white p-5 shadow-[0_8px_30px_rgba(48,35,92,0.055)]"
              >
                <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${tone}`}>
                  <Icon size={23} strokeWidth={1.8} />
                </span>
                <h3 className="heading-font text-base font-extrabold text-ink">{title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="career-journey" className="section-padding bg-[#faf9ff]">
        <div className="section-shell">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">A clear next step</span>
            <h2 className="heading-font mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Your Career Journey
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Move from exploring your options to taking confident steps toward a role that fits.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {journey.map(({ title, detail, icon: Icon }, index) => (
              <article
                key={title}
                className="lift-card rounded-[1.4rem] border border-slate-100 bg-white p-5 shadow-[0_8px_30px_rgba(48,35,92,0.055)] sm:p-6"
              >
                <div className="flex items-start justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-violet-50 text-violet-600">
                    <Icon size={22} strokeWidth={1.8} />
                  </span>
                  <span className="heading-font text-sm font-extrabold text-slate-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="heading-font mt-6 text-lg font-extrabold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default TechnologySection;
