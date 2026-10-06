import {
  ArrowDown,
  ArrowRight,
  BrainCircuit,
  BriefcaseBusiness,
  Check,
  Database,
  Sparkles,
  Workflow,
} from "lucide-react";

const stats = [
  { value: "10+", label: "Career Domains" },
  { value: "50+", label: "Job Roles" },
  { value: "100+", label: "Skills & Technologies" },
];

function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#faf9ff]">
      <div className="pointer-events-none absolute -right-32 -top-40 h-[520px] w-[520px] rounded-full bg-violet-100/80 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-56 left-[-100px] h-[420px] w-[420px] rounded-full bg-fuchsia-100/60 blur-3xl" />
      <div className="section-shell relative grid min-h-[660px] items-center gap-12 px-5 pb-16 pt-14 sm:px-8 md:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:pb-20 lg:pt-20">
        <div className="relative z-10 max-w-2xl">
          <div className="eyebrow">
            <Sparkles size={14} /> Find your place in a growing industry
          </div>
          <h1 className="heading-font mt-6 text-[clamp(2.7rem,5.4vw,4.7rem)] font-extrabold leading-[1.08] tracking-[-0.055em] text-ink">
            Build Your Career in{" "}
            <span className="relative text-violet-600">
              Engineering &amp; Technology
              <svg
                aria-hidden="true"
                viewBox="0 0 325 16"
                className="absolute -bottom-2 left-0 w-full text-violet-200"
              >
                <path d="M4 11C82 3 234 1 320 8" fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Explore career paths, job roles and technology opportunities across software, data, AI, electronics, engineering and other growing industries.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#career-paths"
              className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5 hover:bg-violet-700"
            >
              Explore Career Paths <ArrowRight size={17} />
            </a>
            <a
              href="#job-roles"
              className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white px-6 py-3.5 text-sm font-bold text-ink transition hover:border-violet-400 hover:bg-violet-50"
            >
              View Job Roles
            </a>
          </div>
          <div className="mt-11 flex max-w-md divide-x divide-violet-200">
            {stats.map((stat) => (
              <div key={stat.label} className="flex-1 px-4 first:pl-0">
                <p className="heading-font text-2xl font-extrabold text-ink">{stat.value}</p>
                <p className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[520px]">
          <div className="absolute inset-8 rounded-[42%] bg-violet-200/60 blur-2xl" />
          <div className="relative rounded-[2rem] border border-white/80 bg-white/75 p-4 shadow-[0_28px_80px_rgba(67,47,133,0.16)] backdrop-blur sm:p-6">
            <div className="flex items-center justify-between px-1 pb-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-violet-600">Career explorer</p>
                <p className="heading-font mt-1 text-lg font-extrabold text-ink">Your next opportunity</p>
              </div>
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-violet-50 text-violet-600">
                <BrainCircuit size={21} />
              </span>
            </div>
            <div className="overflow-hidden rounded-2xl bg-[#201a32] shadow-xl">
              <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
                <i className="h-2.5 w-2.5 rounded-full bg-[#ff8f8f]" />
                <i className="h-2.5 w-2.5 rounded-full bg-[#ffd36f]" />
                <i className="h-2.5 w-2.5 rounded-full bg-[#78d9a2]" />
                <span className="ml-auto text-[10px] font-medium text-slate-400">career-match</span>
              </div>
              <div className="grid min-h-[235px] grid-cols-[1.2fr_0.8fr]">
                <div className="space-y-3 px-4 py-5 font-mono text-[11px] leading-5 sm:px-6 sm:text-xs">
                  <p><span className="text-[#c792ea]">career</span> = {"{"}</p>
                  <p className="pl-4"><span className="text-[#c3e88d]">background</span>: <span className="text-[#f78c6c]">&quot;Your degree&quot;</span>,</p>
                  <p className="pl-4"><span className="text-[#c3e88d]">interests</span>: [</p>
                  <p className="pl-8 text-[#f78c6c]">&quot;Technology&quot;, &quot;Growth&quot;</p>
                  <p className="pl-4">],</p>
                  <p className="pl-4"><span className="text-[#c3e88d]">nextStep</span>: <span className="text-[#f78c6c]">&quot;Explore roles&quot;</span></p>
                  <p>{"}"}</p>
                  <p className="pt-1 text-[#c792ea]">findYourPath<span className="text-white">();</span><span className="ml-1 inline-block h-3 w-1.5 animate-pulse bg-violet-300 align-middle" /></p>
                </div>
                <div className="flex items-center justify-center border-l border-white/10 bg-white/[0.03] p-3">
                  <div className="relative grid h-28 w-28 place-items-center rounded-[2rem] bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-lg shadow-violet-950/40">
                    <Workflow size={52} strokeWidth={1.5} className="text-white" />
                    <span className="absolute -right-3 -top-2 grid h-9 w-9 place-items-center rounded-xl bg-white text-violet-600 shadow-lg">
                      <Database size={18} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between rounded-2xl bg-violet-50 px-4 py-3.5">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-violet-600 shadow-sm">
                  <Check size={17} />
                </span>
                <div>
                  <p className="text-xs font-bold text-ink">Your background has potential</p>
                  <p className="mt-0.5 text-[11px] text-slate-500">Find a role that fits you</p>
                </div>
              </div>
              <ArrowDown size={16} className="text-violet-500" />
            </div>
          </div>
          <div className="float-slow absolute -left-5 top-[28%] hidden items-center gap-2 rounded-2xl border border-violet-100 bg-white px-3 py-2.5 shadow-soft sm:flex">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-amber-50 text-amber-500"><BriefcaseBusiness size={16} /></span>
            <span className="text-xs font-bold text-ink">Explore real job roles</span>
          </div>
          <div className="float-slow absolute -right-4 bottom-[20%] hidden items-center gap-2 rounded-2xl border border-violet-100 bg-white px-3 py-2.5 shadow-soft sm:flex [animation-delay:1s]">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-emerald-50 text-emerald-600">
              <Check size={16} />
            </span>
            <span className="text-xs font-bold text-ink">Build your career path</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
