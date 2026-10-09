import { Link } from "react-router-dom";
import {
  ClockCircleOutlined,
  CheckCircleOutlined,
  WhatsAppOutlined,
  EnvironmentOutlined,
  GlobalOutlined,
  TeamOutlined,
  SafetyOutlined,
  RightOutlined,
} from "@ant-design/icons";
import CallToAction from "../components/home/CallToAction";
import courseBg from "../assets/course.png";

const batchesData = [
  {
    id: "morning",
    title: "Morning Batch",
    time: "09:00 AM – 12:00 PM",
    icon: "🕘",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
    bgImage: "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&q=80&w=800",
    description:
      "A focused morning learning session designed for students and professionals who prefer to start their training early in the day.",
    timing: "9:00 AM – 12:00 PM",
    duration: "3 Hours",
    availability: "Male & Female Separate Classes",
    bestFor: ["Students", "Fresh Graduates", "Morning Learners"],
  },
  {
    id: "afternoon",
    title: "Afternoon Batch",
    time: "02:00 PM – 05:00 PM",
    icon: "🕑",
    badgeColor: "bg-sky-100 text-sky-800 border-sky-200",
    bgImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800",
    description:
      "A convenient afternoon training session for learners who prefer an afternoon schedule while maintaining the same professional training experience.",
    timing: "2:00 PM – 5:00 PM",
    duration: "3 Hours",
    availability: "Male & Female Separate Classes",
    bestFor: ["Students", "Working Professionals", "Flexible Learners"],
  },
];

const highlightsList = [
  {
    title: "Morning Batch",
    time: "09:00 AM – 12:00 PM",
    desc: "Early morning focused learning sessions.",
    icon: <ClockCircleOutlined className="text-amber-500 text-2xl" />,
  },
  {
    title: "Afternoon Batch",
    time: "02:00 PM – 05:00 PM",
    desc: "Convenient afternoon schedule for flexible learners.",
    icon: <ClockCircleOutlined className="text-blue-500 text-2xl" />,
  },
  {
    title: "Separate Classes",
    time: "Male & Female",
    desc: "Dedicated comfortable environment for everyone.",
    icon: <TeamOutlined className="text-emerald-500 text-2xl" />,
  },
  {
    title: "Practical Training",
    time: "Industry-Focused Learning",
    desc: "100% hands-on real-world project experience.",
    icon: <SafetyOutlined className="text-orange-500 text-2xl" />,
  },
];

function ShortCourses() {
  return (
    <div className="bg-gray-50">
      {/* ================= HERO HEADER BANNER ================= */}
      <section className="relative overflow-hidden py-20 text-white sm:py-24 bg-slate-950">
        {/* Background Image Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: `url(${courseBg})` }}
        />

        <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-theme px-4 py-1.5 text-xs font-bold uppercase tracking-wider border border-theme backdrop-blur-md text-white">
            <ClockCircleOutlined /> Flexible Schedules & Timings
          </span>

          <h1 className="oswald-font mt-4 text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl lg:text-5xl drop-shadow-md">
            Training Batches & Schedule
          </h1>

          <h2 className="mt-2 text-lg font-bold text-theme sm:text-xl drop-shadow">
            Choose the Batch That Works Best for You
          </h2>

          <p className="mt-4 text-base leading-relaxed text-gray-200 sm:text-lg drop-shadow">
            SCS Training Center offers flexible training schedules with dedicated
            morning and afternoon batches, allowing students to select a convenient
            time according to their routine and availability.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/admission"
              className="oswald-font inline-block rounded-lg bg-theme px-8 py-3.5 text-base font-bold text-slate-900 shadow-xl transition-all hover:bg-amber-300 hover:scale-105 no-underline"
            >
              Apply for Admission Now
            </Link>
          </div>
        </div>
      </section>

      {/* ================= HIGHLIGHTS QUICK SUMMARY BAR ================= */}
      <section className="-mt-8 relative z-20 mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlightsList.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-theme-sm border border-theme transition-all hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-50 border border-theme">
                {item.icon}
              </div>
              <div>
                <h3 className="oswald-font text-base font-bold text-gray-900 m-0">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-theme m-0 mt-0.5">
                  {item.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= BATCHES CARDS SECTION ================= */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="oswald-font text-3xl font-bold uppercase tracking-wide text-gray-900 sm:text-4xl">
              Available Training Batches
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Select your preferred batch timing below and enroll to secure your seat.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {batchesData.map((batch) => (
              <div
                key={batch.id}
                className="group flex flex-col justify-between overflow-hidden rounded-3xl bg-white border border-gray-200 shadow-theme transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Card Top Header with Background Image & Gradient Overlay */}
                <div className="relative overflow-hidden p-8 text-white min-h-[180px] flex flex-col justify-between">
                  {/* Background Image Layer */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${batch.bgImage})` }}
                  />
                  {/* Dark Overlay Layer for Text Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-black/30" />

                  {/* Header Content */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between">
                      <span className="text-4xl drop-shadow">{batch.icon}</span>
                      <span className="rounded-full bg-black/40 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md border border-white/20">
                        3 Hours / Session
                      </span>
                    </div>

                    <h3 className="oswald-font mt-4 text-3xl font-bold tracking-wide text-white m-0 drop-shadow-md">
                      {batch.title}
                    </h3>

                    <div className="mt-2 inline-flex items-center gap-2 rounded-lg bg-black/50 px-3 py-1 text-sm font-semibold text-white backdrop-blur-md border border-white/10">
                      <ClockCircleOutlined />
                      <span>{batch.time}</span>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                  <p className="text-sm leading-relaxed text-gray-600">
                    {batch.description}
                  </p>

                  {/* Batch Spec Table */}
                  <div className="space-y-3 rounded-2xl bg-gray-50 p-5 border border-gray-100 text-xs text-gray-700">
                    <div className="flex justify-between border-b border-gray-200/80 pb-2">
                      <span className="font-semibold text-gray-500">Batch Timing:</span>
                      <span className="font-bold text-gray-900">{batch.timing}</span>
                    </div>

                    <div className="flex justify-between border-b border-gray-200/80 pb-2">
                      <span className="font-semibold text-gray-500">Duration:</span>
                      <span className="font-bold text-gray-900">{batch.duration}</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-500">Availability:</span>
                      <span className="font-bold text-theme">{batch.availability}</span>
                    </div>
                  </div>

                  {/* Best For Tags */}
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                      Best For:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {batch.bestFor.map((tag, i) => (
                        <span
                          key={i}
                          className="rounded-lg bg-orange-50 px-3 py-1 text-xs font-semibold text-theme border border-orange-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-2">
                    <Link
                      to="/admission"
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-theme py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-90 no-underline shadow-md border-0"
                    >
                      <span>Enroll in {batch.title}</span>
                      <RightOutlined className="text-xs" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE OUR BATCHES ================= */}
      <section className="bg-white py-16 border-t border-gray-200">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">

          <h2 className="oswald-font text-3xl font-bold text-gray-900">
            Why Choose Our Training Center?
          </h2>

          <ul className="mt-6 space-y-3.5 text-sm text-gray-600 list-none p-0">
            <li className="flex items-start gap-3">
              <CheckCircleOutlined className="mt-1 text-theme shrink-0 text-lg" />
              <span><strong>Separate Classes:</strong> Dedicated comfortable batches for male and female students with equal training standards.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircleOutlined className="mt-1 text-theme shrink-0 text-lg" />
              <span><strong>Professional Mentors:</strong> Learn directly from industry experts with real-world project experience.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircleOutlined className="mt-1 text-theme shrink-0 text-lg" />
              <span><strong>Freelancing Guidance:</strong> Every course includes dedicated training for Fiverr, Upwork, and Freelancer.com platforms.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircleOutlined className="mt-1 text-theme shrink-0 text-lg" />
              <span><strong>Flexible Learning:</strong> On-site classes at Muridke / Lahore campus + live interactive online sessions.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircleOutlined className="mt-1 text-theme shrink-0 text-lg" />
              <span><strong>Hands-on Practice:</strong> 100% practical, assignment-based classes ensuring real portfolio development.</span>
            </li>
          </ul>

          {/* Location & Contact Info Box */}
          <div className="mt-10 rounded-2xl bg-gray-50 border border-theme p-8">
            <h3 className="oswald-font text-2xl font-bold text-gray-900 m-0 mb-4">
              Visit Campus or Enquire Online
            </h3>

            <ul className="space-y-3 text-sm text-gray-700 list-none p-0 m-0">
              <li className="flex items-center gap-3">
                <EnvironmentOutlined className="text-theme text-base" />
                <span><strong>Location:</strong> Grand Estate Society, Opposite Saab-Factory, Muridke / Lahore.</span>
              </li>
              <li className="flex items-center gap-3">
                <WhatsAppOutlined className="text-theme text-base" />
                <span><strong>WhatsApp / Phone:</strong> +92 309 5982 583 | 030-95982583</span>
              </li>
              <li className="flex items-center gap-3">
                <GlobalOutlined className="text-theme text-base" />
                <span><strong>Official Website:</strong> www.scstrainings.com</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* ================= CALL TO ACTION BANNER ================= */}
      <CallToAction />
    </div>
  );
}

export default ShortCourses;
