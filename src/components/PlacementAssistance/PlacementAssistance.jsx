import { ArrowRight, Check, FileText, MessageCircle, Mic2, Target } from "lucide-react";

const supportItems = [
  { title: "Resume Preparation", description: "Build a professional resume suitable for your target industry.", icon: FileText },
  { title: "Technical Preparation", description: "Prepare for coding tests, technical assessments and role-specific interviews.", icon: Target },
  { title: "Mock Interviews", description: "Practice technical and HR interview questions.", icon: Mic2 },
  { title: "Career Guidance", description: "Understand job roles, required skills and career growth opportunities.", icon: MessageCircle },
];

function PlacementAssistance() {
  return (
    <section id="resources" className="section-padding bg-white">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#211b36] p-7 text-white sm:p-10">
          <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-violet-500/30 blur-3xl" />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-bold text-violet-200">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />               Career resources
            </span>
            <h2 className="heading-font mt-6 max-w-md text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              Take the next step with{" "}
              <span className="text-violet-300">confidence.</span>
            </h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">
              Explore practical resources designed to help you prepare for your target engineering or technology role.
            </p>
            <div className="mt-8 space-y-3">
              {["Explore roles that fit your background", "Build skills for your target career", "Prepare for applications and interviews"].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-sm text-slate-200">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-violet-500/30 text-violet-200">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  {item}
                </div>
              ))}
            </div>
            <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-ink transition hover:bg-violet-50">
              Get career guidance <ArrowRight size={16} />
            </a>
          </div>
          <div className="pointer-events-none absolute -bottom-10 -right-4 rotate-[-13deg] text-[180px] font-black leading-none text-white/[0.04]">E</div>
        </div>

        <div>
          <span className="eyebrow">Career resources</span>
          <h2 className="heading-font mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Prepare Yourself for the Career You Want
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
            Get focused support to strengthen your profile and move forward toward the roles that fit your goals.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {supportItems.map(({ title, description, icon: Icon }) => (
              <article key={title} className="flex gap-3.5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-violet-50 text-violet-600">
                  <Icon size={19} strokeWidth={1.8} />
                </span>
                <div>
                  <h3 className="heading-font text-sm font-extrabold text-ink">{title}</h3>
                  <p className="mt-1.5 text-xs leading-5 text-slate-500">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlacementAssistance;
