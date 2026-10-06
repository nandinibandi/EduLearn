import { useState } from "react";
import { ArrowRight, CheckCircle2, Mail, MapPin, Phone, PhoneCall, X } from "lucide-react";

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  background: "",
  careerArea: "",
  message: "",
};

const backgrounds = [
  "CSE / IT",
  "AI & ML",
  "Data",
  "ECE",
  "EEE",
  "Mechanical",
  "Civil",
  "Chemical",
  "Aerospace",
  "Robotics",
  "MPC / Mathematics & Science",
];

const careerAreas = [
  "Software Development",
  "Data & AI",
  "Electronics & Embedded",
  "Electrical & Automation",
  "Mechanical & Robotics",
  "Civil & Construction",
  "Aerospace",
  "Chemical Engineering",
  "Research & Science",
];

function CallbackForm() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setForm(initialForm);
    setSubmitted(true);
  };

  const fieldClass =
    "mt-2 w-full rounded-xl border border-violet-100 bg-white px-4 py-3 text-sm text-ink outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:ring-4 focus:ring-violet-100";

  return (
    <section id="contact" className="section-padding bg-[#faf9ff]">
      <div className="section-shell grid gap-10 rounded-[2rem] border border-violet-100 bg-white p-6 shadow-soft sm:p-9 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:p-12">
        <div className="flex flex-col justify-between">
          <div>
            <span className="eyebrow">Career assistance</span>
            <h2 className="heading-font mt-5 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
              Find the Right Career Path for You
            </h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
              Tell us about your background and career interest, and explore opportunities that match your skills and goals.
            </p>
          </div>
          <div className="mt-8 space-y-4">
            <a href="mailto:careers@edulearn.com" className="flex items-center gap-3 text-sm font-medium text-slate-600 transition hover:text-violet-700">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-violet-50 text-violet-600"><Mail size={17} /></span>
              careers@edulearn.com
            </a>
            <div className="flex flex-wrap items-center gap-3">
              <a href="tel:+919000000000" className="flex items-center gap-3 text-sm font-medium text-slate-600 transition hover:text-violet-700">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-violet-50 text-violet-600"><Phone size={17} /></span>
                +91 90000 00000
              </a>
              <a
                href="tel:+919000000000"
                className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-violet-700"
              >
                <PhoneCall size={15} /> Call now
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm font-medium text-slate-600">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-violet-50 text-violet-600"><MapPin size={17} /></span>
              India
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl bg-[#faf9ff] p-5 sm:p-7">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-xs font-bold text-ink">
              Full Name
              <input className={fieldClass} type="text" name="fullName" autoComplete="name" placeholder="Your name" value={form.fullName} onChange={handleChange} required />
            </label>
            <label className="text-xs font-bold text-ink">
              Email
              <input className={fieldClass} type="email" name="email" autoComplete="email" placeholder="you@example.com" value={form.email} onChange={handleChange} required />
            </label>
            <label className="text-xs font-bold text-ink">
              Phone Number
              <input className={fieldClass} type="tel" name="phone" autoComplete="tel" placeholder="+91 90000 00000" value={form.phone} onChange={handleChange} required />
            </label>
            <label className="text-xs font-bold text-ink">
              Select Background
              <select className={fieldClass} name="background" value={form.background} onChange={handleChange} required>
                <option value="" disabled>Select your background</option>
                {backgrounds.map((background) => <option key={background} value={background}>{background}</option>)}
              </select>
            </label>
            <label className="text-xs font-bold text-ink sm:col-span-2">
              Select Career Area
              <select className={fieldClass} name="careerArea" value={form.careerArea} onChange={handleChange} required>
                <option value="" disabled>Select a career area</option>
                {careerAreas.map((area) => <option key={area} value={area}>{area}</option>)}
              </select>
            </label>
            <label className="text-xs font-bold text-ink sm:col-span-2">
              Message <span className="font-medium text-slate-400">(optional)</span>
              <textarea className={`${fieldClass} min-h-[96px] resize-y`} name="message" placeholder="Tell us about your career interests or goals" value={form.message} onChange={handleChange} />
            </label>
          </div>
          <button type="submit" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-3.5 text-sm font-bold text-white shadow-md shadow-violet-200 transition hover:-translate-y-0.5 hover:bg-violet-700 sm:w-auto">
            Get Career Guidance <ArrowRight size={16} />
          </button>
          <p className="mt-3 text-[11px] leading-5 text-slate-400">Your information helps us point you toward relevant career options.</p>
        </form>
      </div>
      {submitted && (
        <div
          className="fixed inset-0 z-[60] grid place-items-center bg-ink/60 px-5 py-8 backdrop-blur-sm"
          onClick={(event) => {
            if (event.target === event.currentTarget) setSubmitted(false);
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="callback-success-title"
            className="relative w-full max-w-md rounded-3xl bg-white p-7 text-center shadow-2xl sm:p-9"
          >
            <button
              type="button"
              aria-label="Close success message"
              onClick={() => setSubmitted(false)}
              className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full text-slate-400 transition hover:bg-violet-50 hover:text-ink"
            >
              <X size={19} />
            </button>
            <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-50 text-emerald-600">
              <CheckCircle2 size={34} strokeWidth={1.8} />
            </span>
            <h2 id="callback-success-title" className="heading-font mt-5 text-2xl font-extrabold text-ink">
              Request received!
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Thank you! Your career guidance request has been received.
            </p>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-6 inline-flex items-center justify-center rounded-xl bg-violet-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-violet-700"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default CallbackForm;
