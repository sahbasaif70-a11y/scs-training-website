const features = [
  {
    id: 1,
    title: "Quality Education",
    image:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=600",
    description:
      "We offer 30+ specialized IT trainings that teach you the exact skills top tech companies are looking for today.",
  },
  {
    id: 2,
    title: "Real Industry Exposure",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600",
    description:
      "Don't just stay in the classroom. Connect with our network of 50+ companies to gain practical experience and professional confidence.",
  },
  {
    id: 3,
    title: "Global Career Opportunities",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600",
    description:
      "Whether you want to start freelancing, launch your own business, or land a high-paying job, we provide the path to your success.",
  },
];

function StartCareer() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Section Header */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="oswald-font text-3xl font-bold uppercase tracking-wide text-gray-900 sm:text-4xl lg:text-5xl">
            Start Your IT Career with SCS Training Center
          </h2>

          <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
            Based in the heart of Muridke & Lahore, SCS Training Center is a
            dedicated IT institute designed to turn students into professionals. We
            don't just teach; we prepare you for the real world.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col text-center transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image Container with rounded corners */}
              <div className="h-60 w-full overflow-hidden rounded-3xl shadow-sm">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Card Title & Description */}
              <div className="mt-6 flex flex-1 flex-col">
                <h3 className="oswald-font text-2xl font-bold tracking-wide text-[#00a8f3]">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default StartCareer;
