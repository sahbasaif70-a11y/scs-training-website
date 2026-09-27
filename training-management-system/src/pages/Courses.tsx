import { Link } from "react-router-dom";
import HeroCarousel from "../components/home/HeroCarousel";
import CourseHeader from "../components/home/CourseHeader";
import CallToAction from "../components/home/CallToAction";

const allTrainings = [
  {
    id: 1,
    title: "Professional Graphic Designing Course",
    description: "Master Photoshop, Illustrator, InDesign & Brand Identity Design.",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 2,
    title: "UI/UX Designing Course",
    description: "Learn Figma, User Research, Wireframing & Prototyping.",
    image:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 3,
    title: "SEO & Social Media Marketing (SMM)",
    description: "Search Engine Optimization, Google Ads, Meta Ads & Strategy.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 4,
    title: "Web Development Course",
    description: "Full Stack Web Development, HTML, CSS, JavaScript & React.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 5,
    title: "WordPress & Shopify Development",
    description: "Build custom E-Commerce stores, themes & plugins effortlessly.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 6,
    title: "Amazon Dropshipping Training",
    description: "Product Hunting, Store Setup, FBA & Wholesale Strategies.",
    image:
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 7,
    title: "eBay Dropshipping Course",
    description: "Product sourcing, listing optimization & store automation.",
    image:
      "https://images.unsplash.com/photo-1556742049-0a670f4a4591?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 8,
    title: "Unreal Engine 5 Motion Graphics",
    description: "3D Animation, VFX, Virtual Production & Unreal Engine 5.",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 9,
    title: "Digital Marketing Course",
    description: "Comprehensive Marketing, Lead Generation & Conversion Funnels.",
    image:
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 10,
    title: "E-Commerce Masters Training",
    description: "Launch & scale your own profitable online brand globally.",
    image:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 11,
    title: "Coding with AI Course",
    description: "Boost programming productivity using ChatGPT, Claude & Copilot.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 12,
    title: "Designing with AI Training",
    description: "Generate graphics & UI elements using Midjourney & DALL-E.",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 13,
    title: "Video Creation with AI",
    description: "AI Video Editing, Script Writing & Automated Content Creation.",
    image:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 14,
    title: "Software Quality Assurance (SQA)",
    description: "Manual & Automated Testing, Selenium, Postman & Bug Tracking.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 15,
    title: "Mobile App Development Course",
    description: "Build iOS & Android Apps using Flutter & React Native.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 16,
    title: "Office Management Course",
    description: "MS Office, Advanced Excel, Business Writing & Record Keeping.",
    image:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 17,
    title: "Machine Learning Course",
    description: "Python, Data Analysis, Neural Networks & Machine Learning.",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 18,
    title: "Chatbot Development with AI",
    description: "Build AI-powered chatbots for WhatsApp, Web & Customer Support.",
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 19,
    title: "AI Automation & E-commerce Workflow",
    description: "Automate sales, inventory & marketing workflows using AI tools.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 20,
    title: "AI Content & Social Media Automation",
    description: "Automate social media posts, copywriting & marketing with AI.",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 21,
    title: "Prompt Engineering & AI Masterclass",
    description: "Advanced Prompting techniques for ChatGPT, Claude & Midjourney.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&q=80&w=600",
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
                className="group flex flex-col justify-between overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
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
                    <h3 className="oswald-font text-2xl font-bold tracking-wide text-[#00a8f3]">
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
                    className="inline-block border-b-2 border-orange-500 pb-0.5 font-semibold text-orange-500 transition-colors hover:text-orange-600 no-underline"
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
