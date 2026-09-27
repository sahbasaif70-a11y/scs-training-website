import { useState } from "react";
import { CheckCircleOutlined, ArrowRightOutlined } from "@ant-design/icons";
import CallToAction from "../components/home/CallToAction";

const topPrograms = [
  "Graphic Designing",
  "Web Development",
  "Software QA Testing",
  "Artificial Intelligence",
  "Amazon Expert",
  "Shopify Expert",
  "SEO / SMM",
  "Digital Marketing",
  "UI/UX Designing",
  "Mobile App Development",
];

const cities = [
  "Muridke",
  "Lahore",
  "Islamabad",
  "Karachi",
  "Rawalpindi",
  "Faisalabad",
  "Gujranwala",
  "Other",
];

const trainingsList = [
  "Graphic Designing",
  "Web Development",
  "UI/UX Designing",
  "SEO / SMM",
  "Digital Marketing",
  "WordPress & Shopify Development",
  "Amazon & eBay Dropshipping",
  "Software QA Testing (SQA)",
  "Coding & Designing with AI",
  "Mobile App Development",
  "Office Management",
];

const durationsList = [
  "1 Month (Short Course)",
  "2 Months (Fast Track)",
  "3 Months (Professional)",
  "6 Months (Diploma)",
];

function Admission() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    city: "",
    training: "",
    duration: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        mobile: "",
        email: "",
        city: "",
        training: "",
        duration: "",
        message: "",
      });
    }, 4000);
  };

  const handleSelectProgram = (program: string) => {
    setFormData((prev) => ({ ...prev, training: program }));
    // Smooth scroll to form
    const formElement = document.getElementById("admission-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gray-50">
      {/* ================= HERO BANNER ================= */}
      <section className="relative h-[420px] w-full overflow-hidden bg-slate-900 sm:h-[480px]">
        {/* Students Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-85"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1600')",
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/60 to-slate-950/70" />

        {/* Content Container */}
        <div className="relative mx-auto flex h-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">

          {/* Glassmorphism Badge Box */}
          <div className="rounded-2xl bg-orange-500/90 p-6 text-white shadow-2xl backdrop-blur-md sm:p-8 sm:max-w-md">
            <h1 className="oswald-font text-4xl font-bold uppercase tracking-wide text-white sm:text-5xl">
              Admission Form
            </h1>
            <p className="mt-2 text-base font-medium text-orange-100 sm:text-lg">
              Fill in the form below and we will contact you as soon as possible.
            </p>
          </div>

          {/* Right Floating Tagline (Desktop Only) */}
          <div className="hidden lg:block max-w-md text-right text-white">
            <h2 className="oswald-font text-4xl font-bold uppercase leading-tight drop-shadow-md">
              Transform Your Future With In-Demand IT Skills
            </h2>

            <a
              href="#admission-form"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-6 py-3 text-base font-semibold text-white backdrop-blur-md transition-all hover:bg-white hover:text-slate-900 no-underline shadow-lg"
            >
              <span>Start Your Journey</span>
              <ArrowRightOutlined />
            </a>
          </div>

        </div>
      </section>

      {/* ================= FORM & PROGRAM DETAILS SECTION ================= */}
      <section id="admission-form" className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">

            {/* LEFT COLUMN: INFORMATION REQUEST FORM (DARK SLATE CARD) */}
            <div className="rounded-2xl bg-[#0f172a] p-8 text-white shadow-xl sm:p-10">
              <h2 className="oswald-font text-2xl font-bold uppercase tracking-wide text-white sm:text-3xl">
                Information Request
              </h2>

              {isSubmitted ? (
                <div className="mt-8 flex flex-col items-center justify-center rounded-xl bg-emerald-500/10 p-8 text-center text-emerald-400 border border-emerald-500/30">
                  <CheckCircleOutlined className="text-5xl" />
                  <h3 className="mt-3 text-xl font-bold">Admission Request Submitted!</h3>
                  <p className="mt-1 text-sm text-emerald-300">
                    Thank you for applying. Our admissions counselor will call you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">

                  {/* First Name & Last Name */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-xs font-semibold text-gray-300">
                        First Name <span className="text-orange-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({ ...formData, firstName: e.target.value })
                        }
                        className="w-full rounded-lg border-0 bg-white p-3 text-sm text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>

                    <div>
                      <label className="mb-1 block text-xs font-semibold text-gray-300">
                        Last Name <span className="text-orange-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                        className="w-full rounded-lg border-0 bg-white p-3 text-sm text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                  </div>

                  {/* Mobile Number & Email Address */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-xs font-semibold text-gray-300">
                        Mobile Number <span className="text-orange-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+92 3-- -------"
                        value={formData.mobile}
                        onChange={(e) =>
                          setFormData({ ...formData, mobile: e.target.value })
                        }
                        className="w-full rounded-lg border-0 bg-white p-3 text-sm text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>

                    <div>
                      <label className="mb-1 block text-xs font-semibold text-gray-300">
                        Email Address <span className="text-orange-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="info@scstrainings.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full rounded-lg border-0 bg-white p-3 text-sm text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                  </div>

                  {/* Select City */}
                  <div>
                    <label className="mb-1 block text-xs font-semibold text-gray-300">
                      Select City <span className="text-orange-500">*</span>
                    </label>
                    <select
                      required
                      value={formData.city}
                      onChange={(e) =>
                        setFormData({ ...formData, city: e.target.value })
                      }
                      className="w-full rounded-lg border-0 bg-white p-3 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-orange-500 cursor-pointer"
                    >
                      <option value="">Select City</option>
                      {cities.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Select Training & Select Program Duration */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-xs font-semibold text-gray-300">
                        Select a Training <span className="text-orange-500">*</span>
                      </label>
                      <select
                        required
                        value={formData.training}
                        onChange={(e) =>
                          setFormData({ ...formData, training: e.target.value })
                        }
                        className="w-full rounded-lg border-0 bg-white p-3 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-orange-500 cursor-pointer"
                      >
                        <option value="">Select a Training</option>
                        {trainingsList.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="mb-1 block text-xs font-semibold text-gray-300">
                        Select Program Duration <span className="text-orange-500">*</span>
                      </label>
                      <select
                        required
                        value={formData.duration}
                        onChange={(e) =>
                          setFormData({ ...formData, duration: e.target.value })
                        }
                        className="w-full rounded-lg border-0 bg-white p-3 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-orange-500 cursor-pointer"
                      >
                        <option value="">Select Duration</option>
                        {durationsList.map((duration) => (
                          <option key={duration} value={duration}>
                            {duration}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="mb-1 block text-xs font-semibold text-gray-300">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Write your query or message here..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full rounded-lg border-0 bg-white p-3 text-sm text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>

                  {/* Send Button */}
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-orange-500 py-3.5 text-base font-bold uppercase tracking-wider text-white transition-colors hover:bg-orange-600 cursor-pointer shadow-md"
                  >
                    Send Application
                  </button>

                </form>
              )}
            </div>

            {/* RIGHT COLUMN: OUR TOP SPECIALIZED PROGRAMS */}
            <div className="flex flex-col justify-center lg:py-4">
              <h2 className="oswald-font text-3xl font-bold uppercase tracking-wide text-[#00a8f3] sm:text-4xl">
                Our Top Specialized Programs
              </h2>

              <p className="mt-2 text-sm font-bold tracking-wider text-orange-500 uppercase">
                LIMITED SEATS - APPLY NOW!
              </p>

              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Ready to Innovate? SCS Training Center is your launchpad. Dive
                into hands-on learning, expert mentorship, and a future powered
                by technology. Explore our programs and take the first step towards
                your digital career.
              </p>

              {/* Program Badges Grid */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {topPrograms.map((program) => {
                  const isSelected = formData.training === program;
                  return (
                    <button
                      key={program}
                      type="button"
                      onClick={() => handleSelectProgram(program)}
                      className={`rounded-xl border border-[#00a8f3]/30 px-4 py-3 text-center font-semibold transition-all cursor-pointer shadow-sm ${
                        isSelected
                          ? "bg-orange-500 text-white border-orange-500 shadow-md scale-105"
                          : "bg-white text-slate-800 hover:bg-[#00a8f3] hover:text-white hover:border-[#00a8f3]"
                      }`}
                    >
                      {program}
                    </button>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION BANNER ================= */}
      <CallToAction />
    </div>
  );
}

export default Admission;
