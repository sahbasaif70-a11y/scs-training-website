import {
  SafetyOutlined,
  CheckCircleOutlined,
  TeamOutlined,
  ReadOutlined,
  ExperimentOutlined,
} from "@ant-design/icons";

const highlights = [
  {
    icon: <TeamOutlined className="text-2xl text-theme group-hover:text-white transition-colors" />,
    title: "Separate Classes",
    description: "Dedicated separate batches and class schedules for male and female students.",
  },
  {
    icon: <SafetyOutlined className="text-2xl text-theme group-hover:text-white transition-colors" />,
    title: "Professional Environment",
    description: "A comfortable, respectful, and distraction-free learning atmosphere.",
  },
  {
    icon: <ReadOutlined className="text-2xl text-theme group-hover:text-white transition-colors" />,
    title: "Equal Learning",
    description: "Same high-quality curriculum, expert mentors, and practical resources for everyone.",
  },
  {
    icon: <ExperimentOutlined className="text-2xl text-theme group-hover:text-white transition-colors" />,
    title: "Practical Training",
    description: "100% hands-on project-based learning and dedicated freelancing guidance.",
  },
];

function LearningEnvironment() {
  return (
    <section className=" py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Main Banner Card */}
        <div className="relative overflow-hidden rounded-3xl bg-slate-900 p-8 sm:p-12 text-white shadow-xl">
          {/* Subtle Background Glows */}
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-orange-500/15 blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-amber-500/15 blur-3xl pointer-events-none" />

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            {/* Top Badge */}
            <span className="inline-flex items-center gap-2 rounded-full bg-yellow-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-theme border border-yellow-400/80">
              <SafetyOutlined className="text-sm" />
              Comfortable & Supportive Environment
            </span>

            {/* Main Title */}
            <h2 className="oswald-font mt-6 text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl lg:text-5xl">
              Learn in an Environment Where You Feel Comfortable
            </h2>

            {/* Subheading */}
            <h3 className="mt-3 text-lg font-bold text-theme sm:text-xl">
              Separate Classes for Male & Female Students
            </h3>

            {/* Main Paragraph */}
            <p className="mt-5 text-base leading-relaxed text-gray-300 sm:text-lg">
              At <strong className="text-white">SCS Training Center</strong>, we believe that students learn best in an environment where they feel comfortable, focused, and confident. That’s why we offer <strong className="text-theme">separate classes for male and female students</strong> while maintaining the same professional training standards and learning opportunities for everyone.
            </p>

            {/* Highlight Badges Bar */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-semibold text-gray-200">
              <span className="flex items-center gap-1.5 rounded-lg bg-white/10 px-3.5 py-2 backdrop-blur-md border border-yellow-400/80">
                <CheckCircleOutlined className="text-theme" />
                Separate Classes
              </span>
              <span className="hidden sm:inline text-yellow-500">|</span>

              <span className="flex items-center gap-1.5 rounded-lg bg-white/10 px-3.5 py-2 backdrop-blur-md border border-yellow-400/80">
                <CheckCircleOutlined className="text-theme" />
                Professional Environment
              </span>
              <span className="hidden sm:inline text-yellow-500">|</span>

              <span className="flex items-center gap-1.5 rounded-lg bg-white/10 px-3.5 py-2 backdrop-blur-md border border-yellow-400/80">
                <CheckCircleOutlined className="text-theme" />
                Equal Learning
              </span>
              <span className="hidden sm:inline text-yellow-500">|</span>

              <span className="flex items-center gap-1.5 rounded-lg bg-white/10 px-3.5 py-2 backdrop-blur-md border border-yellow-400/80">
                <CheckCircleOutlined className="text-theme" />
                Practical Training
              </span>
            </div>
          </div>
        </div>

       

      </div>
    </section>
  );
}

export default LearningEnvironment;
