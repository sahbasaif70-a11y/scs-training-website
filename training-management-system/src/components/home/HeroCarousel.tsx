import { Carousel } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import hero1 from "../../assets/hero-1.png";
import hero2 from "../../assets/hero-2.png";
import hero3 from "../../assets/hero-3.png";
import hero4 from "../../assets/hero-4.png";

const slides = [
  {
    image:hero1,
    smallTitle: "Professional IT & Skill Training",
    title: "Transform Your Future",
    subtitle: "With In-Demand IT Skills",
  },
  {
    image:hero2,
    smallTitle: "Learn Modern Technologies",
    title: "Build Skills That Matter",
    subtitle: "Learn. Practice. Grow.",
  },
  {
    image:hero3,
    smallTitle: "Career-Focused Training",
    title: "Upgrade Your Career",
    subtitle: "Prepare Yourself For The Future",
  },
  {
    image:hero4,
    smallTitle: "Professional Learning Environment",
    title: "Learn From Professionals",
    subtitle: "Turn Your Potential Into Success",
  },
];

function HeroCarousel() {
  const { themeConfig } = useTheme();
  return (
    <section className="w-full overflow-hidden">
      <Carousel
        autoplay
        autoplaySpeed={5000}
        effect="fade"
        dots
        pauseOnHover={false}
      >
        {slides.map((slide, index) => (
          <div key={index}>
            <div className="relative h-[500px] w-full overflow-hidden sm:h-[550px] lg:h-[600px]">

              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/45" />

              {/* Content */}
              <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 sm:px-10 lg:px-16">

                <div className="max-w-3xl text-white">

                  {/* Small Heading */}
                  <div className="mb-5 inline-block border border-white/60 bg-black/30 px-4 py-2 text-sm font-medium backdrop-blur-sm sm:text-base">
                    {slide.smallTitle}
                  </div>

                  {/* Main Heading */}
                  <h1 className="mb-2 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                    {slide.title}
                  </h1>

                  <h2 className="mb-8 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                    {slide.subtitle}
                  </h2>

                  {/* CTA */}
                  <Link to="/courses">
                    <button
                      type="button"
                      className="inline-flex items-center gap-3 rounded-md bg-theme px-7 py-3.5 text-base font-semibold text-white transition-opacity hover:opacity-90 border-0 cursor-pointer"
                    >
                      Explore Courses
                      <ArrowRightOutlined />
                    </button>
                  </Link>

                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
}

export default HeroCarousel;
