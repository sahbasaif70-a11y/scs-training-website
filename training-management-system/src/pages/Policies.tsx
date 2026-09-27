import { useState } from "react";
import {
  FileTextOutlined,
  PlusOutlined,
  MinusOutlined,
  SafetyCertificateOutlined,
  DollarOutlined,
  UserOutlined,
  LockOutlined,
  ReadOutlined,
} from "@ant-design/icons";
import CallToAction from "../components/home/CallToAction";

const faqs = [
  {
    question: "SCS Training Center kaun si trainings offer karta hai?",
    answer:
      "Hum IT, Graphic Design, Web Development, Digital Marketing, AI Tools, E-Commerce, aur Mobile App Development ke 30+ specialized courses offer karte hain.",
  },
  {
    question: "Agar main admission fee jama karwa kar training join na kar sakoon to kya hoga?",
    answer:
      "Hamari policy ke mutabiq, agar aap admission fee (Rs. 2000/-) jama karwane ke baad 3 din tak class mein nahi aate, to aapka admission cancel kar diya jaye ga aur vacant seat waiting list candidate ko de di jaye gi.",
  },
  {
    question: "Kya monthly fee refund ho sakti hai?",
    answer:
      "Ji nahi, tamam admission fees aur monthly training fees strictly non-refundable aur non-transferable hain kisi bhi waja se.",
  },
  {
    question: "Kya training mukammal hone ke baad certificate diya jata hai?",
    answer:
      "Ji haan, minimum 80% attendance aur successful project completion ke baad official SCS Training Center completion certificate diya jata hai.",
  },
  {
    question: "Kya aap freelancing mein bhi madad karte hain?",
    answer:
      "Ji haan, har course ke sath Fiverr, Upwork aur Freelancer.com par profile set up, gig optimization aur orders lene ki dedicated guidance di jati hai.",
  },
  {
    question: "Trainings ka schedule kya hota hai?",
    answer:
      "Morning, Afternoon, aur Evening batches available hain. On-campus aur Online Live Classes dono options available hain.",
  },
  {
    question: "Fees jama karwane ka kya tariqa hai?",
    answer:
      "Aap Muridke / Lahore campus visit karke cash fee pay kar sakte hain ya EasyPaisa, JazzCash, aur Direct Bank Transfer ke zariye fee submit karwa sakte hain.",
  },
];

function Policies() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(1); // Index 1 open by default

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50">
      {/* ================= HERO BANNER ================= */}
      <section className="relative overflow-hidden bg-slate-900 py-16 text-white sm:py-20">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=1600')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/80 to-slate-950/90" />

        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
          <h1 className="oswald-font text-4xl font-bold uppercase tracking-wide text-white sm:text-5xl">
            Institute Policies
          </h1>
          <p className="mt-3 text-base text-gray-300 sm:text-lg">
            Please read our rules, regulations, and terms of enrollment carefully.
          </p>
        </div>
      </section>

      {/* ================= POLICIES CONTENT ================= */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="space-y-8 rounded-2xl bg-white p-8 shadow-sm border border-gray-200 sm:p-12">

            {/* Policy 1 */}
            <div className="border-b border-gray-100 pb-6">
              <div className="flex items-center gap-3">
                <FileTextOutlined className="text-xl text-orange-500" />
                <h2 className="oswald-font text-2xl font-bold text-gray-900 m-0">
                  1. Admission & Enrollment
                </h2>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Admissions are offered on a first-come, first-served basis.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-gray-700">
                <strong>Attendance Requirement:</strong> Any student who pays the admission fee of Rs. 2000/- but does not attend classes from the start of the session will have their admission cancelled automatically. The vacant seat will be given to the next candidate on the waiting list.
              </p>
            </div>

            {/* Policy 2 */}
            <div className="border-b border-gray-100 pb-6">
              <div className="flex items-center gap-3">
                <DollarOutlined className="text-xl text-orange-500" />
                <h2 className="oswald-font text-2xl font-bold text-gray-900 m-0">
                  2. Fee & Refund Policy
                </h2>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                All admission fees and monthly training fees are strictly <strong>non-refundable</strong> and <strong>non-transferable</strong> under any circumstances.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-gray-800 font-semibold">
                No refund will be issued at any stage, regardless of attendance or participation.
              </p>
            </div>

            {/* Policy 3 */}
            <div className="border-b border-gray-100 pb-6">
              <div className="flex items-center gap-3">
                <SafetyCertificateOutlined className="text-xl text-orange-500" />
                <h2 className="oswald-font text-2xl font-bold text-gray-900 m-0">
                  3. Attendance & Conduct
                </h2>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                A minimum of <strong>80% attendance</strong> is mandatory to qualify for the course-completion certificate.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-gray-700">
                Students must maintain professional behavior at all times. Any misconduct may result in immediate termination of enrollment <strong>without any refund</strong>.
              </p>
            </div>

            {/* Policy 4 */}
            <div className="border-b border-gray-100 pb-6">
              <div className="flex items-center gap-3">
                <ReadOutlined className="text-xl text-orange-500" />
                <h2 className="oswald-font text-2xl font-bold text-gray-900 m-0">
                  4. Intellectual Property
                </h2>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                All course materials, including lectures, recordings, and digital content provided by SCS Training Center, are strictly for personal use only. <strong>Sharing, reselling, or redistributing these materials is strictly not allowed.</strong>
              </p>
            </div>

            {/* Policy 5 */}
            <div>
              <div className="flex items-center gap-3">
                <LockOutlined className="text-xl text-orange-500" />
                <h2 className="oswald-font text-2xl font-bold text-gray-900 m-0">
                  5. Privacy Policy (Brief)
                </h2>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                <strong>Data Collection:</strong> Basic information such as name, contact number, and email address is collected during registration for enrollment management and course communication.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                <strong>Data Usage:</strong> This information is used only for educational purposes, including issuing certificates and sharing updates about upcoming batches or workshops at SCS Training Center.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                <strong>Third-Party Sharing:</strong> We do not sell or share your personal data with any third-party marketing agencies. Your privacy is fully protected.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FREQUENTLY ASKED QUESTIONS (FAQS) ================= */}
      <section className="bg-sky-50 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">

          <div className="text-center">
            <h2 className="oswald-font text-3xl font-bold uppercase tracking-wide text-gray-900 sm:text-4xl">
              Frequently Asked Questions (FAQs)
            </h2>
          </div>

          <div className="mt-10 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-xl bg-white border border-sky-100 shadow-sm transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="flex w-[#100%] items-center justify-between bg-[#00a8f3] px-6 py-4 text-left font-semibold text-white transition-colors hover:bg-[#0092d6] cursor-pointer border-0"
                  >
                    <span className="text-base sm:text-lg pr-4">{faq.question}</span>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/20 text-white">
                      {isOpen ? <MinusOutlined /> : <PlusOutlined />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="bg-sky-50/50 p-6 text-sm leading-relaxed text-gray-700 border-t border-sky-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= CALL TO ACTION BANNER ================= */}
      <CallToAction />
    </div>
  );
}

export default Policies;
