import { Link } from "react-router-dom";
import { WhatsAppOutlined } from "@ant-design/icons";

function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-16 text-white sm:py-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600')",
        }}
      />

      {/* Dark Translucent Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
        <h2 className="oswald-font text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl lg:text-5xl drop-shadow-md">
          Don’t Just Dream. Start Earning.
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-100 sm:text-lg drop-shadow">
          Ready to launch your global career? From Web Development to Advanced
          Graphic Design, we give you the skills that make you job-ready from
          Day 1.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <Link
            to="/admission"
            className="oswald-font rounded-lg bg-amber-400 px-7 py-3 text-lg font-bold text-slate-900 shadow-xl transition-all hover:bg-amber-300 hover:scale-105 no-underline"
          >
            Apply for Admission
          </Link>

          <a
            href="https://wa.me/923364314345"
            target="_blank"
            rel="noreferrer"
            className="oswald-font flex items-center gap-2 rounded-lg bg-emerald-500 px-7 py-3 text-lg font-bold text-white shadow-xl transition-all hover:bg-emerald-600 hover:scale-105 no-underline"
          >
            <WhatsAppOutlined className="text-xl" />
            <span>Whatsapp</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
