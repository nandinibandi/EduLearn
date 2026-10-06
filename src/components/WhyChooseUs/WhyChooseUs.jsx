import { ArrowUpRight, BriefcaseBusiness, Lightbulb, Rocket, UsersRound } from "lucide-react";

const benefits = [
  {
    icon: UsersRound,
    number: "01",
    title: "Expert Mentors",
    description: "Get thoughtful guidance from developers who know what it takes to thrive in tech.",
    color: "bg-violet-100 text-violet-700",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Practical Learning",
    description: "Make every concept stick through guided practice, not just hours of theory.",
    color: "bg-amber-100 text-amber-700",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Real-World Projects",
    description: "Build a portfolio of useful applications that show what you can really do.",
    color: "bg-rose-100 text-rose-700",
  },
  {
    icon: BriefcaseBusiness,
    number: "04",
    title: "Placement Assistance",
    description: "Get practical support with your resume, interviews, and next career move.",
    color: "bg-emerald-100 text-emerald-700",
  },
];

function WhyChooseUs() {
  return (
    <section id="why-us" className="section-padding bg-white">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">The EduLearn difference</span>
          <h2 className="heading-font mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            More than a course.{" "}
            <span className="text-violet-600">A launchpad.</span>
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            The right people, real practice, and a clear path from your first line of code to your first opportunity.
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
                Explore <ArrowUpRight size={14} />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
