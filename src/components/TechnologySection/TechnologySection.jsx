import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  Layers3,
  ServerCog,
  TrendingUp,
} from "lucide-react";

const careerPaths = [
  {
    title: "Frontend Developer",
    description: "Build the interfaces and experiences people use every day.",
    icon: Layers3,
    color: "bg-violet-50 text-violet-600",
  },
  {
    title: "Backend Developer",
    description: "Create the server-side features, APIs, and data systems behind applications.",
    icon: ServerCog,
    color: "bg-sky-50 text-sky-600",
  },
  {
    title: "Full Stack Developer",
    description: "Work across both frontend and backend to build complete web applications.",
    icon: Code2,
    color: "bg-fuchsia-50 text-fuchsia-600",
  },
  {
    title: "Software Developer",
    description: "Apply programming skills to create, improve, and maintain software.",
    icon: BriefcaseBusiness,
    color: "bg-amber-50 text-amber-600",
  },
];

const growthStages = [
  { title: "Junior Developer", detail: "Learn, contribute, and grow with guidance." },
  { title: "Developer", detail: "Own features and deliver projects independently." },
  { title: "Senior Developer", detail: "Lead technical work and support teammates." },
  { title: "Lead or Specialist", detail: "Guide teams or deepen expertise in a technical area." },
];

function TechnologySection() {
  return (
    <section id="career-paths" className="section-padding bg-white">
      <div className="section-shell">
        <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <span className="eyebrow">Where these skills can take you</span>
            <h2 className="heading-font mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Explore your{" "}
              <span className="text-violet-600">career paths.</span>
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-slate-600 md:justify-self-end">
            Full stack skills can prepare you to pursue a range of software roles. Your path depends on your interests, experience, and opportunities.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {careerPaths.map(({ title, description, icon: Icon, color }) => (
            <article
              key={title}
              className="lift-card rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_6px_24px_rgba(48,35,92,0.04)]"
            >
              <span className={`grid h-11 w-11 place-items-center rounded-xl ${color}`}>
                <Icon size={21} strokeWidth={1.8} />
              </span>
              <h3 className="heading-font mt-4 text-base font-extrabold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">{description}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-violet-100 bg-[#faf9ff] p-5 sm:p-7">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-violet-600 shadow-sm">
              <TrendingUp size={20} />
            </span>
            <div>
              <h3 className="heading-font text-lg font-extrabold text-ink">A possible growth journey</h3>
              <p className="mt-0.5 text-xs leading-5 text-slate-500">Career progression varies by role, workplace, and experience.</p>
            </div>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {growthStages.map(({ title, detail }, index) => (
              <div key={title} className="relative rounded-2xl bg-white p-4">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-violet-500">
                  Stage {index + 1}
                </p>
                <h4 className="heading-font mt-2 text-sm font-extrabold text-ink">{title}</h4>
                <p className="mt-1.5 text-xs leading-5 text-slate-500">{detail}</p>
                {index < growthStages.length - 1 && (
                  <ArrowRight
                    aria-hidden="true"
                    size={15}
                    className="absolute -right-2.5 top-1/2 z-10 hidden -translate-y-1/2 text-violet-400 lg:block"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default TechnologySection;
