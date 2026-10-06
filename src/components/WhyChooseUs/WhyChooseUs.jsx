import { ArrowUpRight, Compass, BriefcaseBusiness, Lightbulb, Rocket } from "lucide-react";

const benefits = [
  {
    icon: Compass,
    number: "01",
    title: "Explore Your Options",
    description: "Compare career paths that match your education, interests, and strengths.",
    color: "bg-violet-100 text-violet-700",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Understand Job Roles",
    description: "Discover day-to-day responsibilities, essential skills, and possible next steps.",
    color: "bg-amber-100 text-amber-700",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Across Many Industries",
    description: "Explore opportunities in software, data, electronics, engineering, and science.",
    color: "bg-rose-100 text-rose-700",
  },
  {
    icon: BriefcaseBusiness,
    number: "04",
    title: "Career Preparation",
    description: "Get focused guidance for your resume, technical preparation, and interviews.",
    color: "bg-emerald-100 text-emerald-700",
  },
];

function WhyChooseUs() {
  return (
    <section id="why-us" className="section-padding bg-white">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Why EduLearn</span>
          <h2 className="heading-font mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Clarity for your{" "}
            <span className="text-violet-600">next career move.</span>
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Make informed decisions about your future with practical information for students, freshers, and graduates.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ icon: Icon, number, title, description, color }) => (
            <article
              key={title}
              className="lift-card group rounded-[1.4rem] border border-slate-100 bg-white p-6 shadow-[0_8px_30px_rgba(48,35,92,0.055)]"
            >
              <div className="flex items-start justify-between">
                <span className={`grid h-12 w-12 place-items-center rounded-2xl ${color}`}>
                  <Icon size={22} strokeWidth={1.8} />
                </span>
                <span className="heading-font text-sm font-extrabold text-slate-300">{number}</span>
              </div>
              <h3 className="heading-font mt-6 text-lg font-extrabold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">{description}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-xs font-bold text-violet-600 opacity-0 transition group-hover:opacity-100">
                Find your path <ArrowUpRight size={14} />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
