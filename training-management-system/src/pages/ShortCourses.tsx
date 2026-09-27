import { Link } from "react-router-dom";
import { CheckCircleOutlined, PhoneOutlined, WhatsAppOutlined, EnvironmentOutlined, GlobalOutlined } from "@ant-design/icons";
import CallToAction from "../components/home/CallToAction";

const shortCoursesList = [
  {
    id: 1,
    title: "Graphic Designing",
    description: "Master visual storytelling, branding, and layout design using industry-standard tools.",
    price: "Rs 5,000/-",
  },
  {
    id: 2,
    title: "UI/UX Designing",
    description: "Learn to create user-centric digital interfaces and seamless mobile app experiences.",
    price: "Rs 5,000/-",
  },
  {
    id: 3,
    title: "SEO / SMM",
    description: "Master Search Engine Optimization and Social Media Marketing to dominate digital rankings.",
    price: "Rs 5,000/-",
  },
  {
    id: 4,
    title: "WordPress Expert",
    description: "Build professional, responsive websites from scratch without coding using WordPress.",
    price: "Rs 5,000/-",
  },
  {
    id: 5,
    title: "Shopify Expert",
    description: "Learn to launch and manage high-converting E-commerce stores for global clients.",
    price: "Rs 5,000/-",
  },
  {
    id: 6,
    title: "Coding with AI",
    description: "Enhance your programming speed and logic by integrating modern AI tools into your workflow.",
    price: "Rs 5,000/-",
  },
  {
    id: 7,
    title: "Dom Trainings",
    description: "Specialized domain-focused modules to master in-demand industry-specific technical skills.",
    price: "Rs 5,000/-",
  },
  {
    id: 8,
    title: "Video Creation with AI",
    description: "Create high-quality video content and cinematic animations using AI-driven workflows.",
    price: "Rs 5,000/-",
  },
  {
    id: 9,
    title: "Designs with AI",
    description: "Elevate your artwork using AI-powered AI image generation tools like Midjourney & DALL-E.",
    price: "Rs 5,000/-",
  },
  {
    id: 10,
    title: "AI Expert",
    description: "A comprehensive guide to understanding and implementing Artificial Intelligence into any business workflow.",
    price: "Rs 5,000/-",
  },
];

function ShortCourses() {
  return (
    <div className="bg-gray-50">
      {/* ================= HERO HEADER BANNER ================= */}
      <section className="relative overflow-hidden bg-slate-900 py-16 text-white sm:py-20">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/90 to-slate-950/80" />

        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
          <h1 className="oswald-font text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl lg:text-5xl">
            Short Trainings & Big Opportunities in Lahore
          </h1>

          <p className="mt-4 text-base leading-relaxed text-gray-300 sm:text-lg">
            Unlock your potential with high-demand practical skills. SCS Training
            Center is providing fast-track, result-oriented short courses
            designed for students, freelancers, and professionals. Whether you
            are a beginner or looking to upgrade your skills, our 1-2 month
            programs are your gateway to the global digital economy.
          </p>

          <div className="mt-8">
            <Link
              to="/admission"
              className="oswald-font inline-block rounded-lg bg-amber-400 px-8 py-3.5 text-base font-bold text-slate-900 shadow-xl transition-all hover:bg-amber-300 hover:scale-105 no-underline"
            >
              Enroll Now and Start Your Professional Journey Today!
            </Link>
          </div>
        </div>
      </section>

      {/* ================= SHORT COURSES GRID (2 COLUMNS) ================= */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {shortCoursesList.map((course) => (
              <div
                key={course.id}
                className="flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div>
                  <h3 className="oswald-font text-2xl font-bold tracking-wide text-gray-800">
                    {course.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-gray-500">
                    {course.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100">
                  <p className="oswald-font text-lg font-bold text-gray-700 m-0">
                    {course.price}
                  </p>

                  <div className="mt-3">
                    <Link
                      to="/admission"
                      className="inline-block rounded-md bg-[#00a8f3] px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-orange-500 no-underline shadow-sm"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= READY TO CHANGE YOUR FUTURE SECTION ================= */}
      <section className="bg-white py-14 border-t border-gray-200">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">

          <h2 className="oswald-font text-3xl font-bold text-gray-900">
            Ready to Change Your Future?
          </h2>

          <p className="mt-2 text-sm text-gray-600 font-medium">
            Enrollment is Open! Limited seats are available for our 1-month & 2-month batches.
          </p>

          <ul className="mt-4 space-y-2.5 text-sm text-gray-700 list-none p-0">
            <li className="flex items-center gap-2">
              <EnvironmentOutlined className="text-orange-500" />
              <span><strong>Location:</strong> Grand Estate, ManuAbad, Muridke / Lahore.</span>
            </li>
            <li className="flex items-center gap-2">
              <WhatsAppOutlined className="text-emerald-500" />
              <span><strong>WhatsApp Us:</strong> +92 336 4314 345 | +92 328 8076 326</span>
            </li>
            <li className="flex items-center gap-2">
              <GlobalOutlined className="text-[#00a8f3]" />
              <span><strong>Visit:</strong> www.scstrainings.com</span>
            </li>
          </ul>

          {/* Quote Callout Banner */}
          <div className="mt-8 rounded-xl bg-gray-50 border-l-4 border-[#00a8f3] p-6 text-center shadow-sm">
            <p className="m-0 text-base font-semibold text-gray-800">
              "Join the next generation of digital creators and freelancers. Your professional journey starts here!"
            </p>
          </div>

          {/* Why Choose Our Training Center? */}
          <div className="mt-12">
            <h2 className="oswald-font text-3xl font-bold text-gray-900">
              Why Choose Our Training Center?
            </h2>

            <ul className="mt-4 space-y-3 text-sm text-gray-600 list-none p-0">
              <li className="flex items-start gap-2.5">
                <CheckCircleOutlined className="mt-1 text-orange-500 shrink-0" />
                <span><strong>Professional Mentors:</strong> Learn from experts with years of experience in international markets.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircleOutlined className="mt-1 text-orange-500 shrink-0" />
                <span><strong>Freelancing Focus:</strong> Every course includes dedicated training for Fiverr, Upwork, and Freelancer.com platforms to earn foreign revenue.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircleOutlined className="mt-1 text-orange-500 shrink-0" />
                <span><strong>Flexible Learning:</strong> On-site classes at Muridke & Lahore campus + online live sessions for students across Pakistan.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircleOutlined className="mt-1 text-orange-500 shrink-0" />
                <span><strong>Hands-on Training:</strong> 100% practical training, assignment-based 2-3 classes per week, ensuring hands-on experience with real-world projects.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircleOutlined className="mt-1 text-orange-500 shrink-0" />
                <span><strong>Affordable Fee Structure:</strong> Premium, high-demand skills for only PKR 5,000 per month.</span>
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
