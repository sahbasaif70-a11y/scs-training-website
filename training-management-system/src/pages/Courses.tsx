import { Link } from "react-router-dom";
import HeroCarousel from "../components/home/HeroCarousel";
import CourseHeader from "../components/home/CourseHeader";
import CallToAction from "../components/home/CallToAction";
import FullStack from "../assets/full_stack.jpg";
import MobileApp from "../assets/mobile_app_development.jpg";
import SocialMMarketing from "../assets/social_media_marketing.jpg";
import SocialMManagemnt from "../assets/social_media_management.jpg";
import Leads from "../assets/lead_generation.jpg";
import SEO from "../assets/seo_optimization.jpg";
import ERPconsultant from "../assets/erp_consultant.jpg";
import AiVideo from "../assets/ai_video.jpg";
import AgenticAi from "../assets/agentic-ai.jpg";

const allTrainings = [
  {
    id: 1,
    title: "Full Stack Web Development Course",
    description: "Master HTML, CSS, JavaScript, React, Node.js & Database Management to build responsive, dynamic and professional web applications.",
    image:FullStack,
  },
  {
    id: 2,
    title: "Mobile App Development Course",
    description: "Learn Kotlin, React Native, UI Design, API Integration & Database Management to develop modern Android and iOS applications.",
    image:MobileApp,
  },
  {
    id: 3,
    title: "Social Media Marketing ",
    description: "Master Social Media Strategy, Meta Ads, Audience Targeting & Campaign Optimization to promote brands and drive business growth.",
    image:SocialMMarketing,
  },
  {
    id: 4,
    title: "Social Media Management",
    description: "Learn Content Planning, Account Management, Post Scheduling, Community Engagement & Analytics to manage professional social media accounts.",
    image:SocialMManagemnt,
  },
  
  {
    id: 6,
    title: "SEO & Website Optimization",
    description: "Learn Keyword Research, On-Page SEO, Technical SEO, Link Building & Google Analytics to improve search rankings and organic traffic.",
    image:SEO,
  },
  {
    id: 7,
    title: "ERP Consulting & Implementation",
    description: "Explore ERP Systems, Business Process Analysis, System Configuration, Data Migration & Implementation to streamline business operations.",
    image:ERPconsultant,
  },
  {
    id: 8,
    title: "AI Video Generation",
    description: "Master AI Prompting, Text-to-Video, Image-to-Video, AI Voiceovers & Video Editing to create engaging professional video content.",
    image:AiVideo,
  },
  {
    id: 9,
    title: "Agentic AI & Intelligent Automation",
    description: "Learn Python, LLMs, AI Agents, Tool Integration, RAG & Workflow Automation to build intelligent systems that perform multi-step tasks. ",
    image:AgenticAi,
  },
 
];

function Courses() {
  return (
    <div className="bg-gray-50">
      {/* 1. Hero Carousel */}
      <HeroCarousel />

      {/* 2. Header Text Section */}
      <CourseHeader />

      {/* 3. All Training Courses Grid */}
      <section className="pb-16 pt-4 sm:pb-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {allTrainings.map((course) => (
              <div
                key={course.id}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl bg-white shadow-theme transition-all duration-300 hover:-translate-y-2 hover:shadow-theme"
              >
                <div>
                  {/* Course Image */}
                  <div className="h-52 w-full overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Course Details */}
                  <div className="p-6 text-center">
                    <h3 className="oswald-font text-2xl font-bold tracking-wide text-base">
                      {course.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-gray-600">
                      {course.description}
                    </p>
                  </div>
                </div>

                {/* Action Link */}
                <div className="p-6 pt-0 text-center">
                  <Link
                    to={`/courses/${course.id}`}
                    className="inline-block border-b-2 border-theme pb-0.5 font-semibold text-theme transition-colors hover:text-[var(--theme-primary-hover)] no-underline"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Call To Action Banner */}
      <CallToAction />
    </div>
  );
}

export default Courses;
