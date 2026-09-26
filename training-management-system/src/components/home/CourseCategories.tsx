import { ArrowRightOutlined } from "@ant-design/icons";

// Dummy Category Data
const categories = [
  {
    id: 1,
    title: "Graphic Design & Creative Arts",
    coursesCount: "5 Courses",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=600",
    description: "UI/UX, Illustrator, Photoshop, Motion Graphics & Video Editing.",
  },
  {
    id: 2,
    title: "Web & Software Development",
    coursesCount: "8 Courses",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600",
    description: "Full Stack Web Development, React, Node.js, Python & MERN.",
  },
  {
    id: 3,
    title: "Digital Marketing & SEO",
    coursesCount: "4 Courses",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
    description: "Social Media Marketing, Search Engine Optimization & Ads.",
  },
];

function CourseCategories() {
  return (
    <section className=" py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="oswald-font text-3xl font-bold uppercase tracking-wide text-orange-500 sm:text-4xl lg:text-5xl">
            Professional IT & Skill Training Courses in Muridke
          </h2>

          <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
            At SCS Training Management System, we offer an array of program
            categories, each representing a unique learning path. Explore these
            categories to find the one that aligns with your aspirations and
            interests.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image Box */}
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
              </div>

              {/* Content Box */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors">
                  {category.title}
                </h3>

                <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                  {category.description}
                </p>

                <div className="mt-5 flex items-center gap-2 font-semibold text-orange-500 group-hover:text-gray-900 transition-colors">
                  <span>Explore Courses</span>
                  <ArrowRightOutlined className="text-sm transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default CourseCategories;
