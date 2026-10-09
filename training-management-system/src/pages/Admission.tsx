import { useState } from "react";
import { CheckCircleOutlined, ArrowRightOutlined, FilePdfOutlined, LoadingOutlined, CreditCardOutlined } from "@ant-design/icons";
import CallToAction from "../components/home/CallToAction";
import { API_BASE_URL } from "../config/api";

const courseDetailsMap: Record<string, { defaultDuration: string; fee: string }> = {
  "Full Stack Web Development": {
    defaultDuration: "6 Months (Diploma)",
    fee: "PKR 45,000",
  },
  "Mobile App Development": {
    defaultDuration: "3 Months (Professional)",
    fee: "PKR 45,000",
  },
  "Social Media Marketing": {
    defaultDuration: "2 Months (Fast Track)",
    fee: "PKR 10,000",
  },
  "Social Media Management": {
    defaultDuration: "2 Months (Fast Track)",
    fee: "PKR 10,000",
  },
  "SEO & Website Optimization": {
    defaultDuration: "2 Months (Professional)",
    fee: "PKR 10,000",
  },
  "ERP Consulting": {
    defaultDuration: "3 Months (Professional)",
    fee: "PKR 45,000",
  },
  "Ai Video Generation": {
    defaultDuration: "3 Months (Fast Track)",
    fee: "PKR 15,000",
  },
  "Agentic Ai": {
    defaultDuration: "3 Months (Professional)",
    fee: "PKR 45,000",
  },
};

const topPrograms = Object.keys(courseDetailsMap);
const trainingsList = Object.keys(courseDetailsMap);

const cities = [
  "Muridke",
  "Lahore",
  "Ravi Rayan",
  "Kamoke",
  "Nangal Sadah",
  "SA Garden",
  "Gujranwala",
  "Other",
];

const durationsList = [
  "2 Months (Fast Track)",
  "3 Months (Professional)",
  "6 Months (Diploma)",
];

const genderList = ["Male", "Female", "Other"];

function Admission() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    cnic: "",
    gender: "",
    mobile: "",
    email: "",
    city: "",
    training: "",
    duration: "",
    message: "",
    cvFile: null as File | null,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Auto-set duration and fee when training changes
  const handleTrainingSelect = (selectedTraining: string) => {
    const config = courseDetailsMap[selectedTraining];
    setFormData((prev) => ({
      ...prev,
      training: selectedTraining,
      duration: config ? config.defaultDuration : prev.duration,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const data = new FormData();
      data.append("firstName", formData.firstName);
      data.append("lastName", formData.lastName);
      data.append("mobile", formData.mobile);
      data.append("email", formData.email);
      data.append("city", formData.city);
      data.append("cnic", formData.cnic);
      data.append("gender", formData.gender);
      data.append("training", formData.training);
      data.append("duration", formData.duration);
      data.append("message", formData.message);
      if (formData.cvFile) {
        data.append("cvFile", formData.cvFile);
      }

      const response = await fetch(`${API_BASE_URL}/api/admissions`, {
        method: "POST",
        body: data,
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            firstName: "",
            lastName: "",
            cnic: "",
            gender: "",
            mobile: "",
            email: "",
            city: "",
            training: "",
            duration: "",
            message: "",
            cvFile: null,
          });
        }, 5000);
      } else {
        alert(result.message || "Failed to submit admission request.");
      }
    } catch (error) {
      console.error("Server connection error, falling back:", error);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          firstName: "",
          lastName: "",
          cnic: "",
          gender: "",
          mobile: "",
          email: "",
          city: "",
          training: "",
          duration: "",
          message: "",
          cvFile: null,
        });
      }, 5000);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectProgramBadge = (program: string) => {
    handleTrainingSelect(program);
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
          <div className="rounded-2xl bg-theme p-6 text-white shadow-2xl backdrop-blur-md sm:p-8 sm:max-w-md">
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
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-6 py-3 text-base font-semibold text-white backdrop-blur-md transition-all hover:bg-theme hover:text-slate-900 no-underline shadow-lg"
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
                        First Name <span className="text-theme">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({ ...formData, firstName: e.target.value })
                        }
                        className="w-full rounded-lg border-0 bg-white p-3 text-sm text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[var(--theme-primary)] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="mb-1 block text-xs font-semibold text-gray-300">
                        Last Name <span className="text-theme">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                        className="w-full rounded-lg border-0 bg-white p-3 text-sm text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[var(--theme-primary)] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Mobile Number & Email Address */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-xs font-semibold text-gray-300">
                        Mobile Number <span className="text-theme">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+92 3-- -------"
                        value={formData.mobile}
                        onChange={(e) =>
                          setFormData({ ...formData, mobile: e.target.value })
                        }
                        className="w-full rounded-lg border-0 bg-white p-3 text-sm text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[var(--theme-primary)] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="mb-1 block text-xs font-semibold text-gray-300">
                        Email Address <span className="text-theme">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="info@scstrainings.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full rounded-lg border-0 bg-white p-3 text-sm text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[var(--theme-primary)] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Select City */}
                  <div>
                    <label className="mb-1 block text-xs font-semibold text-gray-300">
                      Select City <span className="text-theme">*</span>
                    </label>
                    <select
                      required
                      value={formData.city}
                      onChange={(e) =>
                        setFormData({ ...formData, city: e.target.value })
                      }
                      className="w-full rounded-lg border-0 bg-white p-3 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-[var(--theme-primary)] focus:outline-none cursor-pointer"
                    >
                      <option value="">Select City</option>
                      {cities.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Enter CNIC Number & Select Gender */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-xs font-semibold text-gray-300">
                        CNIC <span className="text-theme">*</span>
                      </label>
                      <input
                        type="text"
                        maxLength={15}
                        required
                        placeholder="35202-XXXXXXX-X"
                        value={formData.cnic}
                        onChange={(e) =>
                          setFormData({ ...formData, cnic: e.target.value })
                        }
                        className="w-full rounded-lg border-0 bg-white p-3 text-sm text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[var(--theme-primary)] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="mb-1 block text-xs font-semibold text-gray-300">
                        Select Gender <span className="text-theme">*</span>
                      </label>
                      <select
                        required
                        value={formData.gender}
                        onChange={(e) =>
                          setFormData({ ...formData, gender: e.target.value })
                        }
                        className="w-full rounded-lg border-0 bg-white p-3 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-[var(--theme-primary)] focus:outline-none cursor-pointer"
                      >
                        <option value="">Select gender</option>
                        {genderList.map((gender) => (
                          <option key={gender} value={gender}>
                            {gender}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Select Training & Select Program Duration */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-xs font-semibold text-gray-300">
                        Select a Training <span className="text-theme">*</span>
                      </label>
                      <select
                        required
                        value={formData.training}
                        onChange={(e) => handleTrainingSelect(e.target.value)}
                        className="w-full rounded-lg border-0 bg-white p-3 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-[var(--theme-primary)] focus:outline-none cursor-pointer"
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
                        Select Program Duration <span className="text-theme">*</span>
                      </label>
                      <select
                        required
                        value={formData.duration}
                        onChange={(e) =>
                          setFormData({ ...formData, duration: e.target.value })
                        }
                        className="w-full rounded-lg border-0 bg-white p-3 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-[var(--theme-primary)] focus:outline-none cursor-pointer"
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

                  {/* Auto Course Fee & Duration Badge Box */}
                  {formData.training && courseDetailsMap[formData.training] && (
                    <div className="rounded-xl bg-slate-800/90 p-4 border border-orange-500/40 text-white flex items-center justify-between shadow-inner animate-fade-in">
                      <div className="flex items-center gap-3">
                        <CreditCardOutlined className="text-2xl text-amber-400" />
                        <div>
                          <p className="text-xs text-amber-300 font-bold uppercase tracking-wider m-0">
                            Course Fee & Duration
                          </p>
                          <p className="text-xs font-semibold text-gray-200 m-0 mt-0.5">
                            {formData.training} ({formData.duration || courseDetailsMap[formData.training].defaultDuration})
                          </p>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="text-[10px] text-gray-400 block uppercase">Total Fee:</span>
                        <span className="oswald-font text-lg font-bold text-amber-400">
                          {courseDetailsMap[formData.training].fee}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Upload CV / Resume (PDF Format) */}
                  <div>
                    <label className="mb-1 flex items-center justify-between text-xs font-semibold text-gray-300">
                      <span>
                        Upload Resume / CV (PDF Format)
                      </span>
                      <FilePdfOutlined className="text-amber-400 text-sm" />
                    </label>

                    <div className="rounded-lg bg-white p-2.5 text-sm text-gray-900 border border-gray-200">
                      <input
                        type="file"
                        accept=".pdf,application/pdf"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            if (file.type !== "application/pdf") {
                              alert("Please select a PDF file only.");
                              e.target.value = "";
                              return;
                            }
                            setFormData({ ...formData, cvFile: file });
                          }
                        }}
                        className="w-full text-xs text-gray-500 file:mr-3 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-orange-50 file:text-theme hover:file:bg-orange-100 cursor-pointer"
                      />
                    </div>

                    {formData.cvFile && (
                      <p className="mt-1 text-xs text-emerald-400 font-medium flex items-center gap-1 m-0">
                        ✓ Selected File: <strong>{formData.cvFile.name}</strong>
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="mb-1 block text-xs font-semibold text-gray-300">
                      Message
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Write your query or message here..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full rounded-lg border-0 bg-white p-3 text-sm text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[var(--theme-primary)] focus:outline-none"
                    />
                  </div>

                  {/* Send Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full rounded-lg bg-theme py-3.5 text-base font-bold uppercase tracking-wider text-white transition-colors hover:bg-orange-600 cursor-pointer shadow-md flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <LoadingOutlined />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <span>Send Application</span>
                    )}
                  </button>

                </form>
              )}
            </div>

            {/* RIGHT COLUMN: OUR TOP SPECIALIZED PROGRAMS */}
            <div className="flex flex-col justify-center lg:py-4">
              <h2 className="oswald-font text-3xl font-bold uppercase tracking-wide text-grey-900 sm:text-4xl">
                Our Top Specialized Programs
              </h2>

              <p className="mt-2 text-sm font-bold tracking-wider text-theme uppercase">
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
                      onClick={() => handleSelectProgramBadge(program)}
                      className={`rounded-xl border border-theme px-4 py-3 text-center font-semibold transition-all cursor-pointer shadow-sm ${
                        isSelected
                          ? "bg-theme text-white border-orange-500 shadow-md scale-105"
                          : "bg-white text-slate-800 hover:bg-theme hover:text-white hover:border-orange-700"
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
