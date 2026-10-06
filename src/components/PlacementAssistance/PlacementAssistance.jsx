import { ArrowRight, Check, FileText, MessageCircle, Mic2, Target } from "lucide-react";

const supportItems = [
  { title: "Resume Preparation", description: "Shape your skills and projects into a resume that tells your story.", icon: FileText },
  { title: "Mock Interviews", description: "Build confidence with practice that feels like the real thing.", icon: Mic2 },
  { title: "Technical Preparation", description: "Review the concepts and problem-solving skills employers look for.", icon: Target },
  { title: "Interview Guidance", description: "Get helpful feedback and support at every step of the process.", icon: MessageCircle },
];

function PlacementAssistance() {
  return (
    <section id="placements" className="section-padding bg-white">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#211b36] p-7 text-white sm:p-10">
          <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-violet-500/30 blur-3xl" />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-bold text-violet-200">
              <span className="h-2 w-2 rounded-full bg-emerald-400" /> Career support
            </span>
            <h2 className="heading-font mt-6 max-w-md text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              Your next opportunity starts with{" "}
              <span className="text-violet-300">preparation.</span>
            </h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">
              Learning the skills is a big step. We&apos;ll help you feel ready to put them to work.
            </p>
            <div className="mt-8 space-y-3">
              {["Personalized career guidance", "Portfolio and project feedback", "Support from learning to interviews"].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-sm text-slate-200">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-violet-500/30 text-violet-200">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  {item}
                </div>
              ))}
            </div>
            <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-ink transition hover:bg-violet-50">
              Talk to our team <ArrowRight size={16} />
            </a>
          </div>
          <div className="pointer-events-none absolute -bottom-10 -right-4 rotate-[-13deg] text-[180px] font-black leading-none text-white/[0.04]">E</div>
        </div>

        <div>
          <span className="eyebrow">Placement assistance</span>
          <h2 className="heading-font mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            You bring the ambition.{" "}
            <span className="text-violet-600">We bring the support.</span>
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
            Practical, personal guidance to help you move from learning new skills to showing them with confidence.
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
