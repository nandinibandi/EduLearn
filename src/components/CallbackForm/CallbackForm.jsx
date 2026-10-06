import { useEffect, useState } from "react";
import { ArrowRight, CheckCircle2, Mail, MapPin, Phone, PhoneCall, X } from "lucide-react";

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  requestType: "",
  course: "",
  message: "",
};

function CallbackForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    if (status !== "success" && status !== "calling") return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setStatus("idle");
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [status]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    if (status === "success" || status === "error") setStatus("idle");
    setError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");
    setError("");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const requestTemplateId = import.meta.env.VITE_EMAILJS_REQUEST_TEMPLATE_ID;
    if (!serviceId || !publicKey || !requestTemplateId) {
      setStatus("success");
      setForm(initialForm);
      return;
    }

    const templateParams = {
      reply_to: form.email,
      customer_name: form.fullName,
      customer_email: form.email,
      customer_phone: form.phone,
      request_type: form.requestType === "free-demo" ? "Free demo class" : "Enroll in a course",
      course: form.course,
      message: form.message || "No additional message",
    };

    const sendEmail = async (templateId, params) => {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: params,
        }),
      });

      if (!response.ok) {
        throw new Error("Email service could not send the message.");
      }
    };

    try {
      await sendEmail(requestTemplateId, templateParams);
      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("error");
      setError("We couldn't send your request right now. Please try again or contact us directly by email or phone.");
    }
  };

  const fieldClass =
    "mt-2 w-full rounded-xl border border-violet-100 bg-white px-4 py-3 text-sm text-ink outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:ring-4 focus:ring-violet-100";

  return (
    <section id="contact" className="section-padding bg-[#faf9ff]">
      <div className="section-shell grid gap-10 rounded-[2rem] border border-violet-100 bg-white p-6 shadow-soft sm:p-9 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:p-12">
        <div className="flex flex-col justify-between">
          <div>
            <span className="eyebrow">Let&apos;s get you started</span>
            <h2 className="heading-font mt-5 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
              Your future called.{" "}
              <span className="text-violet-600">Let&apos;s talk.</span>
            </h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
              Tell us a little about yourself and our learning team will help you find the right next step.
            </p>
          </div>
          <div className="mt-8 space-y-4">
            <a href="mailto:hello@edulearn.example" className="flex items-center gap-3 text-sm font-medium text-slate-600 transition hover:text-violet-700">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-violet-50 text-violet-600"><Mail size={17} /></span>
              hello@edulearn.example
            </a>
            <div className="flex flex-wrap items-center gap-3">
              <a href="tel:+9123456789" className="flex items-center gap-3 text-sm font-medium text-slate-600 transition hover:text-violet-700">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-violet-50 text-violet-600"><Phone size={17} /></span>
                +91 23456789
              </a>
              <a
                href="tel:+9123456789"
                onClick={() => setStatus("calling")}
                className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-violet-700"
              >
                <PhoneCall size={15} /> Call now
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm font-medium text-slate-600">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-violet-50 text-violet-600"><MapPin size={17} /></span>
              Learn from wherever you are
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl bg-[#faf9ff] p-5 sm:p-7">
          {status === "error" && (
            <p role="alert" className="mb-5 rounded-xl border border-rose-200 bg-rose-50 p-4 text-xs leading-5 text-rose-800">
              {error}
            </p>
          )}
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-xs font-bold text-ink">
              Full Name
              <input className={fieldClass} type="text" name="fullName" autoComplete="name" placeholder="Your name" value={form.fullName} onChange={handleChange} required />
            </label>
            <label className="text-xs font-bold text-ink">
              Email Address
              <input className={fieldClass} type="email" name="email" autoComplete="email" placeholder="you@example.com" value={form.email} onChange={handleChange} required />
            </label>
            <label className="text-xs font-bold text-ink">
              Phone Number
              <input className={fieldClass} type="tel" name="phone" autoComplete="tel" placeholder="+1 (555) 000-0000" value={form.phone} onChange={handleChange} required />
            </label>
            <label className="text-xs font-bold text-ink">
              I&apos;m interested in
              <select className={fieldClass} name="requestType" value={form.requestType} onChange={handleChange} required>
                <option value="" disabled>Choose an option</option>
                <option value="enroll">Enroll Now</option>
                <option value="free-demo">Free Demo Class</option>
              </select>
            </label>
            <label className="text-xs font-bold text-ink">
              Select Course
              <select className={fieldClass} name="course" value={form.course} onChange={handleChange} required>
                <option value="" disabled>Choose a course</option>
                <option value="full-stack">Full Stack Development</option>
                <option value="frontend">Frontend Development</option>
                <option value="backend">Backend Development</option>
              </select>
            </label>
            <label className="text-xs font-bold text-ink sm:col-span-2">
              Message <span className="font-medium text-slate-400">(optional)</span>
              <textarea className={`${fieldClass} min-h-[96px] resize-y`} name="message" placeholder="What would you like to know?" value={form.message} onChange={handleChange} />
            </label>
          </div>
          <button type="submit" disabled={status === "sending"} className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-3.5 text-sm font-bold text-white shadow-md shadow-violet-200 transition hover:-translate-y-0.5 hover:bg-violet-700 disabled:cursor-wait disabled:opacity-70 sm:w-auto">
            {status === "sending"
              ? "Sending request..."
              : form.requestType === "free-demo"
                ? "Request Free Demo"
                : "Request a Callback"}
            {status !== "sending" && <ArrowRight size={16} />}
          </button>
          <p className="mt-3 text-[11px] leading-5 text-slate-400">By submitting, you agree to be contacted about EduLearn courses.</p>
        </form>
      </div>
      {(status === "success" || status === "calling") && (
        <div
          className="fixed inset-0 z-[60] grid place-items-center bg-ink/60 px-5 py-8 backdrop-blur-sm"
          onClick={(event) => {
            if (event.target === event.currentTarget) setStatus("idle");
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
              onClick={() => setStatus("idle")}
              className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full text-slate-400 transition hover:bg-violet-50 hover:text-ink"
            >
              <X size={19} />
            </button>
            <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-50 text-emerald-600">
              {status === "calling"
                ? <PhoneCall size={32} strokeWidth={1.8} />
                : <CheckCircle2 size={34} strokeWidth={1.8} />}
            </span>
            <h2 id="callback-success-title" className="heading-font mt-5 text-2xl font-extrabold text-ink">
              {status === "calling" ? "Opening your phone app" : "Request submitted!"}
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {status === "calling"
                ? "If your phone app doesn’t open, call EduLearn directly at +91 23456789."
                : "Thank you for reaching out. The EduLearn team will be in touch soon."}
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
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
