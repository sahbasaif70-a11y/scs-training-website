import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  CalendarOutlined,
  CreditCardOutlined,
  SolutionOutlined,
  WhatsAppOutlined,
  DoubleRightOutlined,
  CheckCircleOutlined,
  FilePdfOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import CallToAction from "../components/home/CallToAction";
import { API_BASE_URL } from "../config/api";

interface CourseData {
  title: string;
  duration: string;
  fee: string;
  installment: string;
  introduction: string;
  requirements: string[];
  modules: { name: string; detail: string }[];
  audience: string[];
  outcomes: string[];
}

// Course Data Map for all trainings and categories
const courseDataMap: Record<string, CourseData> = {
  // 1. Full Stack Web Development
  "1": {
    title: "Full Stack Web Development Course",
    duration: "6 Months",
    fee: "PKR 45,000",
    installment: "Available",
    introduction:
      "The Full Stack Web Development course is designed to provide students with comprehensive knowledge of modern web technologies and application development. The course covers both front-end and back-end development, enabling learners to create complete, functional, and responsive web applications. Students will learn how to design user interfaces, develop interactive websites, manage databases, build server-side applications, integrate APIs, and deploy live projects.",
    requirements: [
      "Basic computer knowledge and internet usage.",
      "A laptop or desktop computer with a stable internet connection.",
      "Interest in website development and problem-solving.",
      "Understanding of basic mathematics and logical concepts.",
    ],
    modules: [
      {
        name: "Introduction to Web Development",
        detail: "Understanding websites & web applications • Client-server architecture and HTTP/HTTPS • Frontend vs backend • Dev tools",
      },
      {
        name: "HTML5 Web Structure",
        detail: "HTML elements, tags, attributes • Forms, tables, semantic HTML • Multimedia integration • SEO-friendly structure",
      },
      {
        name: "CSS3 Styling & Layout",
        detail: "Selectors, properties, box model • Flexbox and CSS Grid • Responsive web design and media queries • Modern styling & Tailwind CSS",
      },
      {
        name: "JavaScript Programming Fundamentals",
        detail: "Variables, data types, operators • Functions, arrays, objects • DOM manipulation & event handling • ES6+, async/await",
      },
      {
        name: "Responsive UI & Frontend Development",
        detail: "React fundamentals & component architecture • Hooks, routing, state management • Integration with API services",
      },
      {
        name: "Backend Development",
        detail: "Server-side programming with Node.js & Express.js • Routing, middleware, authentication • RESTful API development",
      },
      {
        name: "Database Management",
        detail: "Database concepts & modeling • MongoDB & NoSQL fundamentals • CRUD operations & Mongoose integration",
      },
      {
        name: "Full Stack Integration & Security",
        detail: "Connecting React frontend with Node/Express backend • JWT Authentication • Form validation & security best practices",
      },
      {
        name: "Git & Version Control",
        detail: "Git commands & workflow • GitHub repositories & collaboration • Branching, merging, and version management",
      },
      {
        name: "Testing & Live Deployment",
        detail: "Debugging & testing • Environment variables • Deploying to Vercel/Render • Hosting & domain setup",
      },
    ],
    audience: [
      "Students pursuing IT, computer science, or software engineering.",
      "Beginners interested in becoming professional web developers.",
      "Freelancers who want to offer full-stack website development services.",
    ],
    outcomes: [
      "Design and develop responsive, dynamic, and full-stack web applications.",
      "Build secure RESTful APIs and handle database operations effectively.",
      "Deploy live websites and kickstart a career as a Web Developer or Freelancer.",
    ],
  },

  // 2. Mobile App Development
  "2": {
    title: "Mobile App Development Course",
    duration: "3 Months",
    fee: "PKR 45,000",
    installment: "Available",
    introduction:
      "Master modern mobile app development for Android and iOS platforms. Learn how to build high-performance native and cross-platform mobile applications using industry-leading frameworks. From designing intuitive mobile user interfaces to integrating backend REST APIs and publishing apps to the Google Play Store and Apple App Store, this program prepares you for the high-demand mobile development market.",
    requirements: [
      "Basic understanding of programming logic and object-oriented concepts.",
      "A computer with at least 8GB RAM for running emulator tools.",
      "Enthusiasm for building mobile interfaces and user experiences.",
    ],
    modules: [
      {
        name: "Mobile App Development Overview",
        detail: "Native vs Cross-platform development • Mobile OS architecture • Setup development environment & Android Studio / VS Code",
      },
      {
        name: "Core Programming Fundamentals",
        detail: "Data types, loops, collections, and OOP concepts • Asynchronous programming & API calls",
      },
      {
        name: "UI/UX Design & Components",
        detail: "Building responsive screens • Layouts, lists, forms, and custom components • Material Design guidelines",
      },
      {
        name: "State Management & Navigation",
        detail: "Managing application state • Screen navigation & deep linking • Local storage & offline data caching",
      },
      {
        name: "Backend Integration & APIs",
        detail: "Consuming REST APIs & GraphQL • Handling JSON payloads • Authentication tokens & secure storage",
      },
      {
        name: "Device Features & Firebase",
        detail: "Camera, GPS location, push notifications • Firebase Authentication, Realtime DB, and Firestore integration",
      },
      {
        name: "App Publishing & Store Deployment",
        detail: "Building APKs and iOS bundles • App store guidelines • Publishing apps on Play Store and App Store",
      },
    ],
    audience: [
      "Computer Science & IT students wanting to specialize in mobile app development.",
      "Software developers looking to transition into mobile technologies.",
      "Entrepreneurs & Freelancers building mobile apps for clients.",
    ],
    outcomes: [
      "Build and deploy functional Android and iOS mobile applications.",
      "Integrate backend APIs, Firebase services, and push notifications.",
      "Publish apps directly on Play Store and App Store.",
    ],
  },

  // 3. Social Media Marketing
  "3": {
    title: "Social Media Marketing & Meta Ads",
    duration: "2 Months",
    fee: "PKR 10,000",
    installment: "Available",
    introduction:
      "Learn how to leverage social media platforms to grow businesses, generate leads, and boost sales. This course covers social media strategy, Meta Business Suite, Facebook & Instagram ad campaigns, target audience segmentation, creative copywriting, and campaign analytics to ensure maximum return on ad spend (ROAS).",
    requirements: [
      "Basic familiarity with social media platforms (Facebook, Instagram, LinkedIn).",
      "Laptop/Desktop computer with internet access.",
      "Creative mindset for advertising and promotion.",
    ],
    modules: [
      {
        name: "Digital Marketing Essentials",
        detail: "Marketing funnels & buyer personas • Organics vs Paid reach • Setting marketing goals and KPI tracking",
      },
      {
        name: "Meta Business Manager Setup",
        detail: "Creating Business Manager accounts • Page setup & Ad accounts • Meta Pixel installation and event tracking",
      },
      {
        name: "Ad Campaign Creation & Targeting",
        detail: "Campaign objectives (Traffic, Leads, Sales) • Detailed audience targeting, lookalike audiences, and custom audiences",
      },
      {
        name: "Creative Strategy & Copywriting",
        detail: "Designing high-converting ad creatives • Writing persuasive ad copy • A/B testing ad variations",
      },
      {
        name: "TikTok & Multi-Platform Ads",
        detail: "TikTok Ads Manager setup • Video ad formats • Retargeting and cross-channel marketing strategies",
      },
      {
        name: "Analytics & ROAS Optimization",
        detail: "Reading ad performance metrics (CTR, CPC, CPA, ROAS) • Scaling winning ad campaigns • Client reporting frameworks",
      },
    ],
    audience: [
      "Small business owners & e-commerce store sellers.",
      "Aspiring digital marketers & media buyers.",
      "Freelancers offering marketing services to international clients.",
    ],
    outcomes: [
      "Run profitable ad campaigns on Facebook, Instagram, and TikTok.",
      "Install Meta Pixels and track website conversions accurately.",
      "Offer high-ticket social media advertising services to business clients.",
    ],
  },

  // 4. Social Media Management
  "4": {
    title: "Social Media Management",
    duration: "2 Months",
    fee: "PKR 10,000",
    installment: "Available",
    introduction:
      "Master the art of managing business social media profiles professionally. Learn content strategy, post design, content calendars, automated scheduling, community management, and performance reporting across Instagram, Facebook, LinkedIn, TikTok, and YouTube.",
    requirements: [
      "Basic computer literacy and active social media accounts.",
      "Interest in graphic design basics, copywriting, and branding.",
    ],
    modules: [
      {
        name: "Social Media Branding Strategy",
        detail: "Defining brand voice & aesthetic • Competitor research & niche analysis • Profile optimization across platforms",
      },
      {
        name: "Content Planning & Calendars",
        detail: "Designing 30-day content strategies • Content buckets (educational, promotional, entertaining)",
      },
      {
        name: "Content Creation Tools",
        detail: "Using Canva for social graphics • Short-form video editing for Reels & Shorts using CapCut • AI content tools",
      },
      {
        name: "Scheduling & Community Management",
        detail: "Buffer, Hootsuite, and Meta Planner setup • DM & comment management strategies • Community engagement tactics",
      },
      {
        name: "Client Onboarding & Freelancing",
        detail: "Creating social media packages • Pitching clients on Upwork/Fiverr • Monthly performance report templates",
      },
    ],
    audience: [
      "Virtual Assistants & Social Media Managers.",
      "Content Creators & Influencers looking to scale their reach.",
      "Freelancers seeking recurring monthly retainer clients.",
    ],
    outcomes: [
      "Manage professional social media accounts end-to-end.",
      "Create high-quality social graphics, videos, and content calendars.",
      "Secure monthly retainer clients as a Social Media Manager.",
    ],
  },

  // 5. Lead Generation & Prospecting
  "5": {
    title: "Lead Generation & Prospecting",
    duration: "3 Months",
    fee: "PKR 15,000",
    installment: "Available",
    introduction:
      "Learn proven strategies for finding, attracting, and converting qualified business leads. Master B2B lead generation, LinkedIn Sales Navigator, cold email outreach, data scraping, email verification tools, CRM management, and sales prospect qualification.",
    requirements: [
      "Good written English communication skills.",
      "Basic familiarity with web browsing and Google Sheets / Excel.",
    ],
    modules: [
      {
        name: "Lead Generation Fundamentals",
        detail: "Inbound vs Outbound lead generation • B2B vs B2C lead strategies • Defining Ideal Customer Profiles (ICP)",
      },
      {
        name: "LinkedIn Prospecting & Sales Navigator",
        detail: "Advanced boolean search on LinkedIn • Prospect filtering • Cold outreach messaging strategies",
      },
      {
        name: "Web Scraping & Data Collection Tools",
        detail: "Apollo.io, Hunter.io, LinkedIn Helper, and PhantomBuster • Extracting clean emails & decision-maker contacts",
      },
      {
        name: "Email Outreach & Cold Emailing",
        detail: "Setting up domain warmups • Writing high-converting cold email sequences • Managing reply rates and follow-ups",
      },
      {
        name: "CRM Setup & Lead Management",
        detail: "Managing contacts in HubSpot, Salesforce, and Trello • Qualifying leads & handover to sales teams",
      },
    ],
    audience: [
      "B2B Sales Representatives & Business Development Executives.",
      "Freelancers offering lead generation services on Upwork and Fiverr.",
      "Agency owners looking to automate client acquisition.",
    ],
    outcomes: [
      "Build targeted, verified lead lists for any industry worldwide.",
      "Launch automated cold email campaigns with high open and reply rates.",
      "Provide high-value B2B lead generation services to global clients.",
    ],
  },

  // 6. SEO & Website Optimization
  "6": {
    title: "SEO & Website Optimization",
    duration: "2 Months",
    fee: "PKR 10,000",
    installment: "Available",
    introduction:
      "Master Search Engine Optimization (SEO) to rank websites on the first page of Google. Learn keyword research, on-page optimization, technical SEO, link building strategies, local SEO, and web analytics using Google Search Console, Ahrefs, and SEMrush.",
    requirements: [
      "Basic understanding of websites and internet browsing.",
      "Laptop with internet connection.",
    ],
    modules: [
      {
        name: "SEO Fundamentals & Search Engines",
        detail: "How Google search works • Crawling, indexing, and ranking algorithms • Search intent analysis",
      },
      {
        name: "Keyword Research & Strategy",
        detail: "Finding high-volume, low-competition keywords • Long-tail keywords • Competitor keyword gap analysis",
      },
      {
        name: "On-Page SEO & Content Optimization",
        detail: "Title tags, meta descriptions, heading structure • Content optimization • Internal linking & URL structures",
      },
      {
        name: "Technical SEO & Site Audit",
        detail: "Website speed optimization • Mobile-friendliness • XML sitemaps, robots.txt, schema markup, Core Web Vitals",
      },
      {
        name: "Off-Page SEO & Link Building",
        detail: "Backlink strategies • Guest posting • Outreach techniques & toxic link disavowal",
      },
      {
        name: "Local SEO & Google Business Profile",
        detail: "Optimizing Google My Business profile • Local citations & reviews strategy for local rankings",
      },
      {
        name: "Analytics & Search Console",
        detail: "Google Analytics 4 setup • Google Search Console tracking • Measuring traffic and conversions",
      },
    ],
    audience: [
      "Website owners & bloggers wanting organic search traffic.",
      "Digital marketers and SEO specialists.",
      "Freelancers offering SEO audit and ranking services.",
    ],
    outcomes: [
      "Perform comprehensive SEO audits for any website.",
      "Rank websites on Google top search results organically.",
      "Monetize SEO skills through client services or affiliate websites.",
    ],
  },

  // 7. ERP Consulting & Implementation
  "7": {
    title: "ERP Consulting & Implementation",
    duration: "3 Months",
    fee: "PKR 45,000",
    installment: "Available",
    introduction:
      "Explore enterprise resource planning (ERP) systems and business process management. Learn how to analyze business workflows, configure ERP software modules (Finance, HR, Supply Chain, Inventory), manage data migration, and execute smooth system implementations.",
    requirements: [
      "Background in IT, Business Administration, Accounting, or Software Engineering.",
      "Understanding of corporate workflows and business operations.",
    ],
    modules: [
      {
        name: "Introduction to Enterprise ERP Systems",
        detail: "ERP concepts and evolution • Business benefits • Overview of leading platforms (SAP, Odoo, Oracle, Dynamics 365)",
      },
      {
        name: "Business Process Mapping & Gap Analysis",
        detail: "Analyzing existing business processes • Requirement gathering • Documenting AS-IS and TO-BE workflows",
      },
      {
        name: "Core ERP Modules Configuration",
        detail: "Finance & Accounting • Supply Chain & Inventory • Sales & Procurement • Human Resources (HRMS)",
      },
      {
        name: "Data Migration & Integration",
        detail: "Data cleaning & formatting • Importing legacy data into ERP systems • API integrations",
      },
      {
        name: "Testing, Training & Go-Live",
        detail: "User Acceptance Testing (UAT) • User training documentation • Post go-live support and troubleshooting",
      },
    ],
    audience: [
      "Business Analysts & IT Consultants.",
      "Finance and Operations professionals transitioning into ERP roles.",
      "Software graduates aspiring to work in corporate ERP implementation.",
    ],
    outcomes: [
      "Analyze corporate business workflows and configure ERP solutions.",
      "Manage ERP implementation lifecycles from gap analysis to go-live.",
      "Pursue high-paying roles as ERP Consultants and System Analysts.",
    ],
  },

  // 8. AI Video Generation
  "8": {
    title: "AI Video Generation & Editing",
    duration: "3 Months",
    fee: "PKR 15,000",
    installment: "Available",
    introduction:
      "Transform your video creation workflow using cutting-edge Artificial Intelligence tools. Learn scriptwriting with AI, text-to-video generation, AI photorealistic avatars, voice cloning, automated captioning, and post-production video editing for social media and advertisements.",
    requirements: [
      "Basic computer literacy.",
      "Creative interest in video creation and storytelling.",
    ],
    modules: [
      {
        name: "AI Video Ecosystem Overview",
        detail: "Overview of modern AI video generators (Runway, Sora, HeyGen, Midjourney to Video, Pika Labs)",
      },
      {
        name: "AI Scriptwriting & Prompting",
        detail: "Generating video scripts with ChatGPT/Claude • Prompt engineering for cinematic visual generation",
      },
      {
        name: "AI Avatars & Voice Synthesis",
        detail: "Creating digital AI presenters • Voice cloning and realistic text-to-speech generation",
      },
      {
        name: "Post-Production Video Editing",
        detail: "CapCut Desktop & Premiere Pro basics • Adding AI captions, sound effects, transitions, and color grading",
      },
      {
        name: "Content Monetization & Branding",
        detail: "Creating faceless YouTube channels • Producing high-converting video ads for clients",
      },
    ],
    audience: [
      "Content Creators, YouTubers & TikTokers.",
      "Video Editors and Motion Designers upgrading to AI tools.",
      "Marketers producing rapid video ads for e-commerce brands.",
    ],
    outcomes: [
      "Produce high-quality videos in minutes using AI technology.",
      "Launch automated faceless video channels and social media pages.",
      "Offer video creation services to marketing clients.",
    ],
  },

  // 9. Agentic AI & Intelligent Automation
  "9": {
    title: "Agentic AI & Intelligent Automation",
    duration: "3 Months",
    fee: "PKR 45,000",
    installment: "Available",
    introduction:
      "Step into the future of software development with Agentic AI. Learn how to build autonomous AI agents, multi-agent frameworks, Retrieval-Augmented Generation (RAG) pipelines, and intelligent workflow automations using Python, LLMs, LangChain, and API tools.",
    requirements: [
      "Basic programming experience in Python or JavaScript.",
      "Interest in AI development, LLMs, and automation.",
    ],
    modules: [
      {
        name: "Python & LLM API Fundamentals",
        detail: "Python OOP essentials • Integrating OpenAI, Anthropic & Gemini APIs • Prompt engineering & function calling",
      },
      {
        name: "Building Autonomous AI Agents",
        detail: "Understanding Agent architectures (Perceive, Reason, Act) • Tool usage and web browsing capabilities",
      },
      {
        name: "Retrieval-Augmented Generation (RAG)",
        detail: "Vector databases (Pinecone, ChromaDB) • Embeddings • Connecting private documents to LLMs",
      },
      {
        name: "Multi-Agent Orchestration Frameworks",
        detail: "LangGraph, CrewAI, AutoGen • Coordinating team agents for multi-step task execution",
      },
      {
        name: "Deploying AI Workflows",
        detail: "Building web interfaces with Streamlit/FastAPI • Deploying AI applications to cloud platforms",
      },
    ],
    audience: [
      "Software Engineers and Python Developers.",
      "Tech Enthusiasts looking to master cutting-edge AI technologies.",
      "Freelancers and Entrepreneurs building custom AI solutions.",
    ],
    outcomes: [
      "Build custom autonomous AI agents that solve real-world tasks.",
      "Develop RAG applications over enterprise knowledge bases.",
      "Position yourself at the forefront of the AI engineering job market.",
    ],
  },

  // Alias Key Mappings for Categories & Slugs
  "graphic-design": {
    title: "Graphic Designing & Creative Arts",
    duration: "3 Months",
    fee: "PKR 45,000",
    installment: "Available",
    introduction:
      "Master Photoshop, Illustrator, visual storytelling, branding, vector graphics, and UI design principles. Learn to create professional logos, social media banners, marketing materials, and brand identity kits.",
    requirements: [
      "Basic computer knowledge.",
      "Creative mindset and passion for design.",
    ],
    modules: [
      {
        name: "Design Fundamentals & Color Theory",
        detail: "Principles of design • Color harmony • Typography and layout composition",
      },
      {
        name: "Adobe Photoshop Mastery",
        detail: "Photo editing, manipulation, retouching, poster design, and digital artwork",
      },
      {
        name: "Adobe Illustrator Vectors",
        detail: "Vector graphics, logo creation, custom illustrations, icons, and branding kits",
      },
      {
        name: "Branding & Portfolio Development",
        detail: "Creating brand identity guidelines • Building a Behance / Fiverr portfolio",
      },
    ],
    audience: [
      "Aspiring Graphic Designers & Visual Artists.",
      "Freelancers aiming to offer design services globally.",
    ],
    outcomes: [
      "Design professional logos, branding materials, and marketing collateral.",
      "Build a portfolio to land clients and freelance projects.",
    ],
  },
  "web-development": {
    title: "Full Stack Web Development Course",
    duration: "6 Months",
    fee: "PKR 45,000",
    installment: "Available",
    introduction:
      "The Full Stack Web Development course covers both front-end and back-end development, enabling learners to create complete, functional, and responsive web applications.",
    requirements: [
      "Basic computer knowledge and internet usage.",
      "Laptop or desktop computer.",
    ],
    modules: [
      {
        name: "Frontend & Backend Development",
        detail: "HTML, CSS, JavaScript, React, Node.js, Express, MongoDB & Deployment",
      },
    ],
    audience: ["Students, beginners, and freelancers."],
    outcomes: ["Build and deploy full-stack web applications."],
  },
  "digital-marketing": {
    title: "SEO & Social Media Marketing",
    duration: "3 Months",
    fee: "PKR 45,000",
    installment: "Available",
    introduction:
      "Master Google SEO, Meta Ads, TikTok Ads, Lead Generation, and Digital Growth Strategies to market products and services effectively online.",
    requirements: ["Basic computer literacy."],
    modules: [
      {
        name: "Search Engine Optimization & Paid Ads",
        detail: "SEO Keyword research, On-Page SEO, Meta Ads, Target Audience, Campaign Scaling",
      },
    ],
    audience: ["Business owners, digital marketers, and freelancers."],
    outcomes: ["Drive targeted traffic, rank on Google, and run high-converting ad campaigns."],
  },
};

const relatedCoursesList = [
  {
    id: "graphic-design",
    title: "Graphic Designing & Creative Arts",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=600",
    description: "Master Photoshop, Illustrator, UI/UX & Brand Identity Design.",
  },
  {
    id: "1",
    title: "Full Stack Web Development",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600",
    description: "Learn MERN Stack, React, Node.js, HTML/CSS & Database Systems.",
  },
  {
    id: "3",
    title: "SEO & Social Media Marketing",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
    description: "Master Google SEO, Meta Ads, Lead Generation & Digital Strategy.",
  },
];

const cities = ["Muridke", "Lahore", "Gujranwala", "Ravi Rayan", "Kamoke", "Other"];
const genderList = ["Male", "Female", "Other"];

function CourseDetails() {
  const { id } = useParams();
  const course = courseDataMap[id || ""] || courseDataMap["1"] || courseDataMap["graphic-design"];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    cnic: "",
    gender: "",
    mobile: "",
    email: "",
    city: "",
    training: course.title,
    duration: course.duration,
    message: "",
    cvFile: null as File | null,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Keep form data synchronized when the active course changes via URL
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      training: course.title,
      duration: course.duration,
    }));
  }, [course]);

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
            training: course.title,
            duration: course.duration,
            message: "",
            cvFile: null,
          });
        }, 5000);
      } else {
        alert(result.message || "Failed to submit admission request.");
      }
    } catch (error) {
      console.error("Submission error:", error);
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
          training: course.title,
          duration: course.duration,
          message: "",
          cvFile: null,
        });
      }, 4000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-50">
      {/* ================= HERO HEADER BANNER ================= */}
      <section className="relative overflow-hidden bg-slate-900 py-14 text-white sm:py-16">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/80 to-slate-950/90" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <h1 className="oswald-font text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl lg:text-5xl">
            {course.title}
          </h1>

          {/* Meta Info Row */}
          <div className="mt-4 flex flex-wrap items-center gap-6 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <CalendarOutlined className="text-theme" />
              <span>
                <strong>Duration:</strong> {course.duration}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <CreditCardOutlined className="text-theme" />
              <span>
                <strong>Enrollment Fee:</strong> {course.fee}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <SolutionOutlined className="text-theme" />
              <span>
                <strong>Fee Installment Plan:</strong> {course.installment}
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#admission-sidebar-form"
              className="oswald-font rounded-lg bg-amber-400 px-7 py-2.5 text-base font-bold text-slate-900 shadow-lg transition-all hover:bg-amber-300 no-underline"
            >
              Enroll Now
            </a>

            <a
              href="https://wa.me/923364314345"
              target="_blank"
              rel="noreferrer"
              className="oswald-font flex items-center gap-2 rounded-lg bg-emerald-500 px-7 py-2.5 text-base font-bold text-white shadow-lg transition-all hover:bg-emerald-600 no-underline"
            >
              <WhatsAppOutlined className="text-lg" />
              <span>Whatsapp</span>
            </a>
          </div>
        </div>
      </section>

      {/* ================= MAIN CONTENT & ADMISSION FORM GRID ================= */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_420px]">

            {/* LEFT COLUMN: COURSE CONTENT */}
            <div className="space-y-10 rounded-2xl bg-white p-8 shadow-sm border border-gray-200 sm:p-10">

              {/* Introduction */}
              <div>
                <h2 className="oswald-font text-2xl font-bold uppercase tracking-wide text-theme">
                  Introduction
                </h2>
                <p className="mt-3 text-base leading-relaxed text-gray-600">
                  {course.introduction}
                </p>
              </div>

              {/* Requirements */}
              <div>
                <h2 className="oswald-font text-2xl font-bold uppercase tracking-wide text-theme">
                  Requirements
                </h2>
                <ul className="mt-3 space-y-2.5 list-none p-0 text-sm text-gray-700">
                  {course.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <DoubleRightOutlined className="mt-1 text-xs text-theme shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Modules */}
              <div>
                <h2 className="oswald-font text-2xl font-bold uppercase tracking-wide text-theme">
                  Modules
                </h2>
                <ul className="mt-3 space-y-3 list-none p-0 text-sm text-gray-700">
                  {course.modules.map((mod, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <DoubleRightOutlined className="mt-1 text-xs text-theme shrink-0" />
                      <span>
                        <strong>{mod.name}:</strong> {mod.detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Audience */}
              <div>
                <h2 className="oswald-font text-2xl font-bold uppercase tracking-wide text-theme">
                  Audience
                </h2>
                <ul className="mt-3 space-y-2.5 list-none p-0 text-sm text-gray-700">
                  {course.audience.map((aud, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <DoubleRightOutlined className="mt-1 text-xs text-theme shrink-0" />
                      <span>{aud}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Learning Outcomes */}
              <div>
                <h2 className="oswald-font text-2xl font-bold uppercase tracking-wide text-theme">
                  Learning Outcomes
                </h2>
                <ul className="mt-3 space-y-2.5 list-none p-0 text-sm text-gray-700">
                  {course.outcomes.map((out, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <DoubleRightOutlined className="mt-1 text-xs text-theme shrink-0" />
                      <span>
                        <strong>Outcome:</strong> {out}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* RIGHT COLUMN: ADMISSION FORM SIDEBAR CARD */}
            <div id="admission-sidebar-form" className="h-fit rounded-2xl bg-theme overflow-hidden shadow-xl">

              {/* Card Header */}
              <div className="bg-theme p-6 text-center text-white">
                <h2 className="oswald-font text-2xl font-bold uppercase tracking-wide text-white m-0">
                  Admission Form
                </h2>
                <p className="mt-2 text-xs leading-relaxed text-white/90">
                  Please fill out the form below. A representative from our
                  academic counseling team will soon reach out to assist you.
                </p>
              </div>

              {/* Form Container */}
              <div className="bg-white p-6">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center rounded-xl bg-emerald-500/10 p-6 text-center text-emerald-600 border border-emerald-500/20">
                    <CheckCircleOutlined className="text-4xl text-emerald-500" />
                    <h3 className="mt-2 text-base font-bold">Request Received!</h3>
                    <p className="mt-1 text-xs text-gray-600">
                      We will contact you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">

                    {/* First Name & Last Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <div>
                        <label className="mb-1 block text-xs font-semibold text-gray-700">
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
                          className="w-full rounded-lg border border-gray-300 p-2 text-xs text-gray-900 outline-none focus:ring-2 focus:ring-[var(--theme-primary)]"
                        />
                      </div>

                      <div>
                        <label className="mb-1 block text-xs font-semibold text-gray-700">
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
                          className="w-full rounded-lg border border-gray-300 p-2 text-xs text-gray-900 outline-none focus:ring-2 focus:ring-[var(--theme-primary)]"
                        />
                      </div>
                    </div>

                    {/* Mobile Number & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <div>
                        <label className="mb-1 block text-xs font-semibold text-gray-700">
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
                          className="w-full rounded-lg border border-gray-300 p-2 text-xs text-gray-900 outline-none focus:ring-2 focus:ring-[var(--theme-primary)]"
                        />
                      </div>

                      <div>
                        <label className="mb-1 block text-xs font-semibold text-gray-700">
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
                          className="w-full rounded-lg border border-gray-300 p-2 text-xs text-gray-900 outline-none focus:ring-2 focus:ring-[var(--theme-primary)]"
                        />
                      </div>
                    </div>

                    {/* Select City */}
                    <div>
                      <label className="mb-1 block text-xs font-semibold text-gray-700">
                        Select City <span className="text-theme">*</span>
                      </label>
                      <select
                        required
                        value={formData.city}
                        onChange={(e) =>
                          setFormData({ ...formData, city: e.target.value })
                        }
                        className="w-full rounded-lg border border-gray-300 p-2 text-xs text-gray-900 outline-none focus:ring-2 focus:ring-[var(--theme-primary)]"
                      >
                        <option value="">Select City</option>
                        {cities.map((city) => (
                          <option key={city} value={city}>
                            {city}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* CNIC & Gender */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <div>
                        <label className="mb-1 block text-xs font-semibold text-gray-700">
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
                          className="w-full rounded-lg border border-gray-300 p-2 text-xs text-gray-900 outline-none focus:ring-2 focus:ring-[var(--theme-primary)]"
                        />
                      </div>

                      <div>
                        <label className="mb-1 block text-xs font-semibold text-gray-700">
                          Select Gender <span className="text-theme">*</span>
                        </label>
                        <select
                          required
                          value={formData.gender}
                          onChange={(e) =>
                            setFormData({ ...formData, gender: e.target.value })
                          }
                          className="w-full rounded-lg border border-gray-300 p-2 text-xs text-gray-900 outline-none focus:ring-2 focus:ring-[var(--theme-primary)]"
                        >
                          <option value="">Select Gender</option>
                          {genderList.map((g) => (
                            <option key={g} value={g}>
                              {g}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Selected Training & Duration */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <div>
                        <label className="mb-1 block text-xs font-semibold text-gray-700">
                          Select a Training
                        </label>
                        <input
                          type="text"
                          required
                          readOnly
                          value={formData.training}
                          className="w-full rounded-lg border border-gray-200 bg-gray-100 p-2 text-xs font-semibold text-gray-700 cursor-not-allowed outline-none"
                        />
                      </div>

                      <div>
                        <label className="mb-1 block text-xs font-semibold text-gray-700">
                          Program Duration
                        </label>
                        <input
                          type="text"
                          required
                          readOnly
                          value={formData.duration}
                          className="w-full rounded-lg border border-gray-200 bg-gray-100 p-2 text-xs font-semibold text-gray-700 cursor-not-allowed outline-none"
                        />
                      </div>
                    </div>

                    {/* Total Course Fee Summary Badge */}
                    <div className="rounded-lg bg-orange-50/80 p-2.5 border border-orange-200 flex items-center justify-between">
                      <span className="text-xs font-bold text-gray-700">Total Course Fee:</span>
                      <span className="oswald-font text-base font-bold text-theme">
                        {course.fee}
                      </span>
                    </div>

                    {/* Upload Resume / CV (PDF Format) */}
                    <div>
                      <label className="mb-1 flex items-center justify-between text-xs font-semibold text-gray-700">
                        <span>Upload Resume / CV (PDF)</span>
                        <FilePdfOutlined className="text-theme text-xs" />
                      </label>
                      <div className="rounded-lg border border-gray-300 bg-white p-2">
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
                          className="w-full text-xs text-gray-500 file:mr-2 file:py-1 file:px-2.5 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-orange-50 file:text-theme hover:file:bg-orange-100 cursor-pointer"
                        />
                      </div>
                      {formData.cvFile && (
                        <p className="mt-1 text-[11px] text-emerald-600 font-medium m-0">
                          ✓ {formData.cvFile.name}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="mb-1 block text-xs font-semibold text-gray-700">
                        Message
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Write message..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full rounded-lg border border-gray-300 p-2 text-xs text-gray-900 outline-none focus:ring-2 focus:ring-[var(--theme-primary)]"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full rounded-lg bg-theme py-3 text-sm font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-90 cursor-pointer shadow-md border-0 flex items-center justify-center gap-2"
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

            </div>

          </div>
        </div>
      </section>

      {/* ================= RELATED COURSES SECTION ================= */}
      <section className="bg-white py-16 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-10 text-center">
            <h2 className="oswald-font text-3xl font-bold uppercase tracking-wide text-gray-900 sm:text-4xl">
              Related Courses & Trainings
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Explore other high-demand programs that complement your learning journey.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {relatedCoursesList.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl bg-gray-50/80 border border-gray-200 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <div>
                  <div className="h-48 w-full overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6 text-center">
                    <h3 className="oswald-font text-2xl font-bold text-theme">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 text-center">
                  <Link
                    to={`/courses/${item.id}`}
                    className="inline-block rounded-lg bg-theme px-6 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 no-underline shadow-sm border-0"
                  >
                    View Course Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION BANNER ================= */}
      <CallToAction />
    </div>
  );
}

export default CourseDetails;
