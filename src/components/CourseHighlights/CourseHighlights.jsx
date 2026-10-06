import { ArrowRight, Braces, CalendarDays, Code2, Database, GitBranch, Globe2, Layers3, Route } from "lucide-react";

const modules = [
  { title: "HTML & CSS", subtitle: "Design the web", icon: Globe2, tone: "bg-orange-50 text-orange-600", index: "01" },
  { title: "JavaScript", subtitle: "Bring ideas to life", icon: Braces, tone: "bg-amber-50 text-amber-600", index: "02" },
  { title: "React.js", subtitle: "Build modern interfaces", icon: Layers3, tone: "bg-sky-50 text-sky-600", index: "03" },
  { title: "Python", subtitle: "Powerful backend logic", icon: Code2, tone: "bg-rose-50 text-rose-600", index: "04" },
  { title: "MySQL", subtitle: "Work with real data", icon: Database, tone: "bg-indigo-50 text-indigo-600", index: "05" },
  { title: "Git & GitHub", subtitle: "Collaborate with confidence", icon: GitBranch, tone: "bg-violet-50 text-violet-600", index: "06" },
];

const roadmap = ["Foundations", "Hands-on practice", "Portfolio projects", "Career preparation"];

function CourseHighlights() {
  return (
    <section id="courses" className="section-padding bg-[#faf9ff]">
      <div className="section-shell">
        <div className="grid gap-6 md:grid-cols-[0.85fr_1.15fr] md:items-end">
          <div>
            <span className="eyebrow">Course curriculum</span>
            <h2 className="heading-font mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              The full stack,{" "}
              <span className="text-violet-600">step by step.</span>
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-slate-600 md:justify-self-end">
            Start with the building blocks, then connect every layer into complete web applications. No experience required.
          </p>
        </div>

        <div className="mt-9 grid gap-4 md:grid-cols-2">
          <article className="flex min-h-[176px] flex-col justify-between rounded-3xl border border-violet-100 bg-white p-5 shadow-[0_8px_30px_rgba(48,35,92,0.045)] sm:p-6">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-violet-50 text-violet-600">
                <CalendarDays size={20} />
              </span>
              <p className="text-xs font-extrabold uppercase tracking-[0.13em] text-slate-500">Course duration</p>
            </div>
            <p className="heading-font mt-5 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              6 <span className="text-violet-600">months</span>
            </p>
          </article>

          <article className="min-h-[176px] rounded-3xl border border-violet-100 bg-white p-5 shadow-[0_8px_30px_rgba(48,35,92,0.045)] sm:p-6">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-fuchsia-50 text-fuchsia-600">
                <Route size={20} />
              </span>
              <p className="text-xs font-extrabold uppercase tracking-[0.13em] text-slate-500">Learning roadmap</p>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-2.5">
              {roadmap.map((step, index) => (
                <div key={step} className="flex min-w-0 items-center gap-2 rounded-xl bg-[#faf9ff] px-2.5 py-2">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white text-[10px] font-extrabold text-violet-600 shadow-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xs font-semibold leading-4 text-ink">{step}</span>
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="mt-11 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map(({ title, subtitle, icon: Icon, tone, index }) => (
            <article
              key={title}
              className="lift-card flex min-h-[160px] items-center gap-5 rounded-[1.4rem] border border-white bg-white p-5 shadow-[0_8px_30px_rgba(48,35,92,0.055)] sm:p-6"
            >
              <span className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl ${tone}`}>
                <Icon size={25} strokeWidth={1.8} />
              </span>
              <div className="min-w-0 flex-1">
                <span className="text-[10px] font-extrabold tracking-[0.15em] text-violet-400">MODULE {index}</span>
                <h3 className="heading-font mt-1 text-lg font-extrabold text-ink">{title}</h3>
                <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
              </div>
              <ArrowRight size={17} className="shrink-0 text-slate-300" />
            </article>
          ))}
        </div>
        <a
          href="#contact"
          className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-violet-700 transition hover:gap-3"
        >
          Get the complete course outline <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}

export default CourseHighlights;
