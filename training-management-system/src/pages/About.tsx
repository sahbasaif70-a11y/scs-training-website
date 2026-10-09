import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  CheckCircleOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  RocketOutlined,
  LaptopOutlined,
  BulbOutlined,
  TeamOutlined,
  SafetyCertificateOutlined,
  CodeOutlined,
  MobileOutlined,
  GlobalOutlined,
  AimOutlined,
  SettingOutlined,
  VideoCameraOutlined,
  RobotOutlined,
  CheckCircleFilled,
} from "@ant-design/icons";
import CallToAction from "../components/home/CallToAction";
import meetingImg from "../assets/erp.png";

// Count-Up Animation Component
function CountUpNumber({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [element, setElement] = useState<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const duration = 1200;
          const steps = 25;
          const stepTime = duration / steps;
          const increment = end / steps;

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, stepTime);

          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [element, end]);

  return (
    <span ref={setElement}>
      {count}
      {suffix}
    </span>
  );
}

const whyChooseUsList = [
  {
    icon: <CalendarOutlined className="text-2xl text-theme" />,
    title: "Industry Experience",
    desc: "Learn from a company with 5+ years of practical technology experience in real software development.",
  },
  {
    icon: <LaptopOutlined className="text-2xl text-theme" />,
    title: "Practical Learning",
    desc: "Focus on hands-on projects, assignment-based classes, and real-world software applications.",
  },
  {
    icon: <BulbOutlined className="text-2xl text-theme" />,
    title: "Industry-Relevant Skills",
    desc: "Learn modern technologies and frameworks that are actually used in today's tech market.",
  },
  {
    icon: <TeamOutlined className="text-2xl text-theme" />,
    title: "Professional Environment",
    desc: "Experience a structured, comfortable, and disciplined learning environment similar to a real workplace.",
  },
  {
    icon: <RocketOutlined className="text-2xl text-theme" />,
    title: "Career-Focused Training",
    desc: "Build skills that help you transition smoothly into internships, freelancing, jobs, or tech entrepreneurship.",
  },
  {
    icon: <AppstoreOutlined className="text-2xl text-theme" />,
    title: "Multiple Technology Domains",
    desc: "Comprehensive programs covering Web, Mobile, AI, SEO, Digital Marketing, ERP, and more.",
  },
];

const offerCourses = [
  { title: "Web Development", icon: <CodeOutlined /> },
  { title: "Mobile App Development", icon: <MobileOutlined /> },
  { title: "Social Media Marketing", icon: <GlobalOutlined /> },
  { title: "Social Media Management", icon: <TeamOutlined /> },
  { title: "Lead Generation", icon: <AimOutlined /> },
  { title: "SEO Optimization", icon: <CheckCircleOutlined /> },
  { title: "ERP Consultant", icon: <SettingOutlined /> },
  { title: "AI Video Generation", icon: <VideoCameraOutlined /> },
  { title: "Agentic AI", icon: <RobotOutlined /> },
];

function About() {
  return (
    <div className="bg-gray-50">
      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative overflow-hidden py-16 text-white sm:py-20 lg:py-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 via-slate-900/80 to-slate-950/40" />

        <div className="relative z-10 mx-auto max-w-5xl px-5 text-center sm:px-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--theme-primary)]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-theme border border-amber-400/30">
            <SafetyCertificateOutlined /> An Initiative of Synergic Corporate Solutions
          </span>

          <h1 className="oswald-font mt-4 text-3xl font-bold uppercase tracking-wide text-white sm:text-5xl lg:text-6xl">
            About SCS Training
          </h1>

          <h2 className="mt-3 text-lg font-bold text-theme sm:text-2xl">
            Building Skills. Creating Opportunities. Shaping Careers.
          </h2>

          <p className="mt-5 text-base leading-relaxed text-gray-300 sm:text-lg max-w-3xl mx-auto">
            SCS Training is an initiative of <strong>Synergic Corporate Solutions</strong>, designed to provide practical, industry-relevant training that helps students and professionals develop the skills needed to succeed in today's digital world.
          </p>

          <div className="mt-8">
            <Link
              to="/courses"
              className="oswald-font inline-block rounded-lg bg-theme px-8 py-3.5 text-base font-bold text-slate-900 shadow-xl transition-all hover:bg-amber-300 hover:scale-105 no-underline"
            >
              Explore Our Courses
            </Link>
          </div>
        </div>
      </section>

      {/* ================= 2. WHO WE ARE ================= */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="rounded-3xl bg-gray-50 border border-theme p-8 sm:p-12 shadow-sm">
            <span className="inline-block rounded-lg bg-[var(--theme-primary)]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-theme mb-3">
              Who We Are
            </span>

            <h2 className="oswald-font text-3xl font-bold uppercase tracking-wide text-theme sm:text-4xl">
              About Synergic Corporate Solutions
            </h2>

            <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
              <strong>Synergic Corporate Solutions (SCS)</strong> is a technology-driven software house with <strong>7+ years of industry experience</strong>, providing software development, ERP solutions, and digital services to businesses across different industries.
            </p>

            <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
              With experience in delivering real-world technology solutions, SCS is now expanding its expertise into professional training programs to help individuals learn practical, market-relevant skills directly from an industry environment.
            </p>

            <p className="mt-4 text-base leading-relaxed text-gray-700 font-semibold sm:text-lg">
              Visit our website for more details :
              <a
                href="https://scs.synergicerp.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="!text-blue-600 hover:!text-blue-800 !underline font-bold transition-colors ml-1"
              >
                scs.synergicerp.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ================= 3. WHY CHOOSE SCS TRAINING? ================= */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="text-center mb-12">
            <h2 className="oswald-font text-3xl font-bold uppercase tracking-wide text-theme sm:text-4xl">
              Why Choose SCS Training?
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Designed around real-world concepts, tools, workflows, and industry standards.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUsList.map((item, index) => (
              <div
                key={index}
                className="group rounded-2xl bg-white p-7 shadow-theme-sm border border-theme transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-orange-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--theme-primary)]/10 group-hover:bg-theme group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="oswald-font mt-4 text-xl font-bold text-gray-900 group-hover:text-theme transition-colors m-0">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 m-0">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 4. OUR INDUSTRY EXPERIENCE (STATS BAR) ================= */}
      <section className="bg-slate-900 py-14 text-white">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="text-center mb-10">
            <h2 className="oswald-font text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl m-0">
              Our Experience at a Glance
            </h2>
            <p className="mt-2 text-sm text-gray-300">
              Built on a strong foundation of corporate software engineering and business solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {/* Stat 1 */}
            <div className="flex flex-col items-center justify-center rounded-2xl bg-white/10 p-6 text-center backdrop-blur-md border border-white/10">
              <h3 className="oswald-font text-4xl font-bold text-theme sm:text-5xl m-0">
                <CountUpNumber end={7} suffix="+" />
              </h3>
              <p className="mt-2 text-sm font-bold text-white m-0">
                Years of Software House Experience
              </p>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center justify-center rounded-2xl bg-white/10 p-6 text-center backdrop-blur-md border border-white/10">
              <h3 className="oswald-font text-4xl font-bold text-theme sm:text-5xl m-0">
                <CountUpNumber end={70} suffix="+" />
              </h3>
              <p className="mt-2 text-sm font-bold text-white m-0">
                Projects Delivered
              </p>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center justify-center rounded-2xl bg-white/10 p-6 text-center backdrop-blur-md border border-white/10">
              <h3 className="oswald-font text-4xl font-bold text-theme sm:text-5xl m-0">
                <CountUpNumber end={9} suffix="+" />
              </h3>
              <p className="mt-2 text-sm font-bold text-white m-0">
                Professional Courses
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 5. FROM INDUSTRY TO CLASSROOM ================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <span className="inline-block rounded-lg bg-[var(--theme-primary)]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-theme mb-3">
            Real Projects to Real Learning
          </span>

          <h2 className="oswald-font text-3xl font-bold uppercase tracking-wide text-theme sm:text-4xl">
            From Industry to Classroom
          </h2>

          <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
            At SCS Training, we believe that the best way to learn technology is through practical experience. Our training programs are designed around real-world concepts, tools, workflows, and projects inspired by our industry experience.
          </p>

          <p className="mt-3 text-base leading-relaxed text-gray-600 sm:text-lg">
            Instead of focusing only on theory, we help learners understand how technology is actually used in professional environments.
          </p>
        </div>
      </section>

      {/* ================= 6. WHAT WE OFFER ================= */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="text-center mb-12">
            <h2 className="oswald-font text-3xl font-bold uppercase tracking-wide text-theme sm:text-4xl">
              Our Training Programs
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              High-demand programs crafted to turn students into market-ready professionals.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
            {offerCourses.map((course, idx) => (
              <Link
                key={idx}
                to="/courses"
                className="flex items-center gap-3 rounded-2xl bg-white p-5 shadow-theme-sm border border-theme no-underline text-gray-900 transition-all hover:-translate-y-1 hover:shadow-md hover:border-orange-300 group"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--theme-primary)]/10 text-xl text-theme group-hover:bg-theme group-hover:text-white transition-colors">
                  {course.icon}
                </div>
                <span className="oswald-font text-base sm:text-lg font-bold group-hover:text-theme transition-colors">
                  {course.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 7. OUR ERP EXPERIENCE (TECHNOLOGY IN ACTION) ================= */}
      <section className="py-16 sm:py-20 bg-white border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

            {/* Left: Text Content */}
            <div>
              <span className="inline-block rounded-lg bg-yellow-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-theme mb-3">
                Learning from Our Own Technology
              </span>

              <h2 className="oswald-font text-3xl font-bold uppercase tracking-wide text-theme sm:text-4xl">
                Our ERP & Software Experience
              </h2>

              <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
                SCS develops and provides its own <strong>ERP solutions</strong> for businesses and industries. This practical product experience allows our learners to understand how enterprise-level software, business processes, and technology solutions work in real-world environments.
              </p>

              <div className="mt-6 flex items-start gap-3">
                <CheckCircleFilled className="mt-1 text-xl text-theme shrink-0" />
                <p className="text-sm text-gray-700 font-medium m-0 leading-relaxed">
                  Real corporate software implementation exposure, business workflow analysis, and hands-on system administration training.
                </p>
              </div>
            </div>

            {/* Right: Clean Image Frame (AccountBook ERP Implementation Image - Clean without Extra Promotional Text) */}
            <div className="overflow-hidden rounded-3xl bg-slate-900 shadow-xl border border-gray-200 group">
              <img
                src={meetingImg}
                alt="AccountBook ERP Implementation"
                className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ================= 8. MISSION & VISION ================= */}
      <section className="py-16 sm:py-20 bg-gray-50 border-t border-gray-200">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

            {/* Mission Card */}
            <div className="rounded-3xl bg-white p-8 sm:p-10 shadow-sm border border-gray-200">
              <span className="inline-block rounded-lg bg-yellow-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-theme mb-3">
                Our Purpose
              </span>
              <h3 className="oswald-font text-2xl font-bold text-theme uppercase sm:text-3xl m-0">
                Our Mission
              </h3>
              <p className="mt-4 text-base leading-relaxed text-gray-600 m-0">
                To provide practical, accessible, and industry-relevant training that equips learners with the skills, confidence, and knowledge needed to build successful careers in technology and digital fields.
              </p>
            </div>

            {/* Vision Card */}
            <div className="rounded-3xl bg-white p-8 sm:p-10 shadow-sm border border-gray-200">
              <span className="inline-block rounded-lg bg-yellow-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-theme mb-3">
                Our Future
              </span>
              <h3 className="oswald-font text-2xl font-bold text-theme uppercase sm:text-3xl m-0">
                Our Vision
              </h3>
              <p className="mt-4 text-base leading-relaxed text-gray-600 m-0">
                To become a trusted training platform where learners transform their potential into practical skills and professional opportunities in Pakistan and beyond.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Footer Banner */}
      <CallToAction />
    </div>
  );
}

export default About;
