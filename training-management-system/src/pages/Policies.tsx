import { useState } from "react";
import {
  FileTextOutlined,
  PlusOutlined,
  MinusOutlined,
  SafetyCertificateOutlined,
  DollarOutlined,
  LockOutlined,
  ReadOutlined,
  DownOutlined,
  UpOutlined,
} from "@ant-design/icons";
import CallToAction from "../components/home/CallToAction";
import policies from "../assets/policies.jpeg"; 

const faqs = [
  {
    question: "What types of training courses does SCS Training Center offer?",
    answer:
      "SCS Training Center offers a variety of professional courses, including Web Development, Mobile App Development, Social Media Marketing, Social Media Management, SEO Optimization, ERP Consultancy, AI Video Generation, and Agentic AI. Our programs focus on practical learning and industry-relevant skills to help students prepare for professional opportunities.",
  },
  {
    question: "What happens if I pay the admission fee but cannot join the training?",
    answer:
      "If you have paid the admission fee but are unable to join the training, please contact our administration team as soon as possible. Your request will be reviewed according to the training center's admission and refund policies. We recommend discussing your situation with the administration before making any payment.",
  },
  {
    question: "Is the monthly training fee refundable?",
    answer:
      "Once the training program has commenced, paid fees are generally non-refundable. Please review our fee and refund policies before enrollment. For special circumstances or further clarification, you may contact our administration team.",
  },
  {
    question: "Will I receive a certificate after successfully completing the training?",
    answer:
      "Yes, students who successfully complete their training course and clear all applicable course fees will receive a Course Completion Certificate from SCS Training Center.",
  },
  {
    question: "Do you also provide assistance with freelancing?",
    answer:
      "Our training programs focus on developing practical skills that can help students explore freelancing and other professional opportunities. Depending on the course, students may learn about relevant tools, project workflows, and ways to apply their skills to real-world tasks.",
  },
  {
    question: "What is the schedule for the training sessions?",
    answer:
      "SCS Training Center offers two training batches to accommodate different schedules:\n\n• Morning Batch: 9:00 AM – 12:00 PM\n• Afternoon Batch: 2:00 PM – 5:00 PM\n\nStudents can select a suitable batch at the time of enrollment, subject to course availability.",
  },
  {
    question: "What is the process of fee submission?",
    answer:
      "Students are required to submit their course fees according to the payment plan selected at the time of enrollment. The complete fee structure and payment schedule will be communicated during admission. Students can choose an available payment plan, including installment options, subject to the training center's policies. Timely fee submission is required to continue training without interruption.",
  },
];

function Policies() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(1); // Index 1 open by default
  const [isFeePolicyExpanded, setIsFeePolicyExpanded] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50">
      {/* ================= HERO BANNER ================= */}
      <section className="relative flex min-h-[350px] sm:min-h-[420px] lg:min-h-[400px] w-full  overflow-hidden bg-slate-900 py-12 sm:py-16">
        <div
          className="absolute inset-0 bg-cover bg-center sm:bg-top bg-no-repeat transition-all duration-300 "
          style={{
            backgroundImage: `url(${policies})`
          }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-20 text-left sm:px-8">
          <h1 className="oswald-font text-left text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-lg">
            Institute Policies
          </h1>
          <p className="mt-3 text-sm font-medium text-gray-200 sm:text-base md:text-lg drop-shadow">
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
                <FileTextOutlined className="text-xl text-theme" />
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
                <DollarOutlined className="text-xl text-theme" />
                <h2 className="oswald-font text-2xl font-bold text-gray-900 m-0">
                  2. Fee & Refund Policy
                </h2>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                All admission, registration, and training/course fees are subject to the payment terms agreed upon at the time of enrollment. Candidates are responsible for completing their payments according to the selected payment plan and due dates.
              </p>

              {/* Expandable Sub-Clauses */}
              {isFeePolicyExpanded && (
                <div className="mt-4 space-y-4 rounded-xl border border-gray-200 bg-gray-50/80 p-5 text-sm text-gray-700 shadow-inner">
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">2.1 Total Course Fee</h3>
                    <p className="mt-1 text-gray-600 leading-relaxed">
                      The total approved training/course fee will be communicated to the candidate at the time of enrollment and recorded on the official enrollment form.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">2.2 Payment Plan</h3>
                    <p className="mt-1 text-gray-600 leading-relaxed">
                      The candidate must select an applicable payment plan at the time of enrollment. The selected plan will be considered agreed upon upon acknowledgment/signature of the enrollment form.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">2.3 Payment Due Dates</h3>
                    <p className="mt-1 text-gray-600 leading-relaxed">
                      All installments must be paid according to the due dates specified in the selected payment schedule.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">2.4 Late Payment</h3>
                    <p className="mt-1 text-gray-600 leading-relaxed">
                      If an installment is not paid by the due date, HR/Admin may issue a payment reminder. Continued non-payment may result in the training/course being placed on hold until the outstanding amount is cleared, subject to management approval.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">2.5 Flexible Payment Plan</h3>
                    <p className="mt-1 text-gray-600 leading-relaxed">
                      For the Rs. 45,000 Flexible Payment Plan, Rs. 30,000 will be payable during the three-month course period, while the remaining Rs. 15,000 will be payable after completion of the course.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">2.6 Certificate Policy</h3>
                    <p className="mt-1 text-gray-600 leading-relaxed">
                      The Training/Course Completion Certificate will be issued only after:
                    </p>
                    <ul className="mt-1 space-y-1 list-disc pl-5 text-gray-600">
                      <li>Successful completion of the required training/course; and</li>
                      <li>Clearance of the complete applicable course fee.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">2.7 Refund Policy</h3>
                    <p className="mt-1 text-gray-600 leading-relaxed">
                      Once the training/course has commenced, all paid fees are non-refundable and non-transferable, regardless of attendance, participation, or voluntary discontinuation, except where management approves an exception in writing.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">2.8 Payment Plan Changes</h3>
                    <p className="mt-1 text-gray-600 leading-relaxed">
                      Any request to change the selected payment plan must be submitted to HR/Admin and will be subject to management approval.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">2.9 Discounts & Special Fees</h3>
                    <p className="mt-1 text-gray-600 leading-relaxed">
                      Any discount, concession, or special fee must be approved by management and officially recorded on the candidate's enrollment form.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">2.10 Payment Records</h3>
                    <p className="mt-1 text-gray-600 leading-relaxed">
                      All payments received from the candidate will be officially recorded by the company. A payment receipt or payment record will be maintained for each transaction.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">2.11 Training Does Not Guarantee Employment</h3>
                    <p className="mt-1 text-gray-600 leading-relaxed">
                      Completion of the training/course does not guarantee internship or employment. Any internship or employment opportunity will be offered separately based on the candidate's performance, company requirements, available positions, and management approval.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">2.12 Course Discontinuation</h3>
                    <p className="mt-1 text-gray-600 leading-relaxed">
                      If a candidate voluntarily discontinues the training/course after enrollment or commencement, the applicable fee obligations will remain subject to the agreed payment plan. No refund will ordinarily be provided, except where management approves an exception in writing.
                    </p>
                  </div>
                </div>
              )}

              <button
                type="button"
                onClick={() => setIsFeePolicyExpanded(!isFeePolicyExpanded)}
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-theme hover:text-orange-600 cursor-pointer bg-transparent border-0 p-0 transition-colors"
              >
                <span>{isFeePolicyExpanded ? "Read Less" : "Read More"}</span>
                {isFeePolicyExpanded ? <UpOutlined className="text-xs" /> : <DownOutlined className="text-xs" />}
              </button>
            </div>

            {/* Policy 3 */}
            <div className="border-b border-gray-100 pb-6">
              <div className="flex items-center gap-3">
                <SafetyCertificateOutlined className="text-xl text-theme" />
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
                <ReadOutlined className="text-xl text-theme" />
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
                <LockOutlined className="text-xl text-theme" />
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
                    className="flex w-full items-center justify-between bg-theme px-6 py-4 text-left font-semibold text-white transition-colors hover:bg-orange-400 cursor-pointer border-0"
                  >
                    <span className="text-base sm:text-lg pr-4">{faq.question}</span>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/20 text-white">
                      {isOpen ? <MinusOutlined /> : <PlusOutlined />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="bg-sky-50/50 p-6 text-sm leading-relaxed text-gray-700 border-t border-sky-100 whitespace-pre-line">
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
