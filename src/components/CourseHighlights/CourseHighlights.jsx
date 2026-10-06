import {
  ArrowRight,
  Atom,
  Bot,
  Building2,
  CircuitBoard,
  Cog,
  FlaskConical,
  Gauge,
  Layers3,
  Plane,
  Zap,
} from "lucide-react";

const careerDomains = [
  {
    title: "Software & IT",
    description: "Design, build, and maintain digital products and services.",
    roles: "Software Engineer, Frontend Developer, Backend Developer, Full Stack Developer, DevOps Engineer",
    icon: Layers3,
    tone: "bg-violet-50 text-violet-600",
  },
  {
    title: "Data & AI",
    description: "Turn information into insights, intelligent systems, and useful products.",
    roles: "Data Engineer, Data Analyst, Data Scientist, AI Engineer, Machine Learning Engineer",
    icon: Bot,
    tone: "bg-sky-50 text-sky-600",
  },
  {
    title: "Electronics & Embedded",
    description: "Create connected devices, circuits, and embedded technologies.",
    roles: "Embedded Systems Engineer, VLSI Engineer, IoT Engineer, Electronics Engineer",
    icon: CircuitBoard,
    tone: "bg-fuchsia-50 text-fuchsia-600",
  },
  {
    title: "Electrical & Automation",
    description: "Power the systems and automation behind modern industries.",
    roles: "Electrical Engineer, Automation Engineer, Control Systems Engineer, Power Systems Engineer",
    icon: Zap,
    tone: "bg-amber-50 text-amber-600",
  },
  {
    title: "Mechanical & Robotics",
    description: "Design machines, production systems, and intelligent automation.",
    roles: "Mechanical Design Engineer, CAD Engineer, Robotics Engineer, Manufacturing Engineer",
    icon: Cog,
    tone: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "Civil & Construction",
    description: "Plan and deliver the infrastructure and spaces people depend on.",
    roles: "Civil Engineer, Structural Engineer, Site Engineer, Construction Engineer",
    icon: Building2,
    tone: "bg-orange-50 text-orange-600",
  },
  {
    title: "Aerospace",
    description: "Contribute to aircraft, spacecraft, and advanced flight systems.",
    roles: "Aerospace Engineer, Aeronautical Engineer, Avionics Engineer, Flight Systems Engineer",
    icon: Plane,
    tone: "bg-indigo-50 text-indigo-600",
  },
  {
    title: "Chemical",
    description: "Improve industrial processes, materials, and product quality.",
    roles: "Chemical Engineer, Process Engineer, Production Engineer, Quality Engineer",
    icon: FlaskConical,
    tone: "bg-rose-50 text-rose-600",
  },
  {
    title: "Science & Mathematics",
    description: "Apply quantitative thinking to research, analytics, and technology.",
    roles: "Data Analyst, Research Analyst, Data Scientist, Statistical Programmer",
    icon: Atom,
    tone: "bg-cyan-50 text-cyan-600",
  },
];

const backgrounds = [
  {
    title: "CSE / IT",
    roles: ["Software Engineer", "Full Stack Developer", "Frontend Developer", "Backend Developer", "DevOps Engineer", "Cybersecurity Engineer"],
    icon: Layers3,
    tone: "bg-violet-50 text-violet-600",
  },
  {
    title: "AI & ML",
    roles: ["AI Engineer", "Machine Learning Engineer", "Deep Learning Engineer", "NLP Engineer", "Computer Vision Engineer"],
    icon: Bot,
    tone: "bg-fuchsia-50 text-fuchsia-600",
  },
  {
    title: "Data",
    roles: ["Data Engineer", "Data Analyst", "Data Scientist", "BI Developer", "Big Data Engineer"],
    icon: Gauge,
    tone: "bg-sky-50 text-sky-600",
  },
  {
    title: "ECE",
    roles: ["Embedded Systems Engineer", "VLSI Engineer", "IoT Engineer", "Electronics Engineer", "Hardware Engineer"],
    icon: CircuitBoard,
    tone: "bg-amber-50 text-amber-600",
  },
  {
    title: "EEE",
    roles: ["Electrical Engineer", "Automation Engineer", "Control Systems Engineer", "Power Systems Engineer", "Embedded Engineer"],
    icon: Zap,
    tone: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "Mechanical",
    roles: ["Mechanical Design Engineer", "CAD Engineer", "Automotive Engineer", "Manufacturing Engineer", "Robotics Engineer"],
    icon: Cog,
    tone: "bg-orange-50 text-orange-600",
  },
  {
    title: "Civil",
    roles: ["Civil Engineer", "Structural Engineer", "Construction Engineer", "Site Engineer", "Planning Engineer"],
    icon: Building2,
    tone: "bg-indigo-50 text-indigo-600",
  },
  {
    title: "MPC / Mathematics & Science",
    roles: ["Data Analyst", "Data Scientist", "AI/ML Engineer", "Research Analyst", "Software Developer"],
    icon: Atom,
    tone: "bg-rose-50 text-rose-600",
  },
];

function CourseHighlights() {
  return (
    <section id="career-paths" className="section-padding bg-[#faf9ff]">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Explore opportunities</span>
          <h2 className="heading-font mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Explore Career Domains
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Find career opportunities based on your education, skills and interests.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {careerDomains.map(({ title, description, roles, icon: Icon, tone }) => (
            <article
              key={title}
              className="lift-card flex min-h-[230px] flex-col rounded-[1.4rem] border border-white bg-white p-5 shadow-[0_8px_30px_rgba(48,35,92,0.055)] sm:p-6"
            >
              <span className={`grid h-12 w-12 place-items-center rounded-2xl ${tone}`}>
                <Icon size={23} strokeWidth={1.8} />
              </span>
              <h3 className="heading-font mt-4 text-lg font-extrabold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">{description}</p>
              <p className="mt-3 text-xs leading-5 text-slate-500">{roles}</p>
              <a
                href="#job-roles"
                className="mt-auto inline-flex items-center gap-2 pt-4 text-sm font-bold text-violet-700 transition hover:gap-3"
              >
                Explore Careers <ArrowRight size={16} />
              </a>
            </article>
          ))}
        </div>

        <div id="job-roles" className="scroll-mt-24 pt-20">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Your education, your possibilities</span>
            <h2 className="heading-font mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Find Careers Based on Your Background
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Start with what you studied and discover roles where your knowledge can take you.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {backgrounds.map(({ title, roles, icon: Icon, tone }) => (
              <article
                key={title}
                className="lift-card rounded-[1.4rem] border border-slate-100 bg-white p-5 shadow-[0_8px_30px_rgba(48,35,92,0.055)]"
              >
                <span className={`grid h-11 w-11 place-items-center rounded-xl ${tone}`}>
                  <Icon size={21} strokeWidth={1.8} />
                </span>
                <h3 className="heading-font mt-4 text-base font-extrabold text-ink">{title}</h3>
                <ul className="mt-3 space-y-2">
                  {roles.map((role) => (
                    <li key={role} className="flex gap-2 text-xs leading-5 text-slate-500">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-400" />
                      {role}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CourseHighlights;
