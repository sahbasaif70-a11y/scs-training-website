import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import ShortCourses from "./pages/ShortCourses";
import CourseDetails from "./pages/CourseDetails";
import Admission from "./pages/Admission";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Policies from "./pages/Policies";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/trainings" element={<Courses />} />
          <Route path="/short-courses" element={<ShortCourses />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
