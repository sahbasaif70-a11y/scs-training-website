import HeroCarousel from "../components/home/HeroCarousel";
import LearningEnvironment from "../components/home/LearningEnvironment";
import CourseCategories from "../components/home/CourseCategories";
import StartCareer from "../components/home/StartCareer";
import Testimonials from "../components/home/Testimonials";
import CallToAction from "../components/home/CallToAction";

function Home() {
  return (
    <>
      <HeroCarousel />

      {/* Testimonials Review Slider */}
      <Testimonials />

      {/* Course Categories Grid */}
      <CourseCategories />

      {/* Learning Environment Section (Separate Classes for Male & Female) */}
      <LearningEnvironment />

      {/* Start Your IT Career Section */}
      <StartCareer />

      {/* Call To Action Banner */}
      <CallToAction />
    </>
  );
}

export default Home;
