import { useState } from "react";
import { Button, Drawer, Dropdown } from "antd";
import {
  MenuOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  DownOutlined,
  CloseOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import scsLogo from "../../assets/scs logo.png";

const shortCourses = [
  { key: "web", label: "Web Development" },
  { key: "graphic", label: "Graphic Designing" },
  { key: "digital", label: "Digital Marketing" },
];

const trainings = [
  { key: "frontend", label: "Frontend Development" },
  { key: "backend", label: "Backend Development" },
  { key: "fullstack", label: "Full Stack Development" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const closeMenu = () => {
    setOpen(false);
  };

  const shortCourseMenu = {
    items: shortCourses.map((course) => ({
      key: course.key,
      label: (
        <Link to="/short-courses" className="no-underline text-slate-800 block w-full">
          {course.label}
        </Link>
      ),
    })),
  };

  const trainingMenu = {
    items: trainings.map((training) => ({
      key: training.key,
      label: (
        <Link to="/trainings" className="no-underline text-slate-800 block w-full">
          {training.label}
        </Link>
      ),
    })),
  };

  const getNavItemClass = (isActive: boolean) =>
    `oswald-font flex h-20 items-center justify-center gap-2 border-0 px-6 !text-[22px] !font-normal no-underline transition-colors duration-200 cursor-pointer ${
      isActive
        ? "bg-orange-500 !text-white"
        : "bg-white text-slate-900 hover:bg-orange-300 hover:!text-white"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">

      {/* ================= TOP BAR ================= */}
      <div className="bg-orange-500 text-white">
        <div className="mx-auto flex min-h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* Contact Information */}
          <div className="flex items-center gap-5 text-xs sm:gap-7 sm:text-sm">

            <a
              href="tel:+923364134345"
              className="flex items-center gap-2 text-white no-underline hover:text-white"
            >
              <FontAwesomeIcon icon={faPhone} className="text-lg" />
              <span>+92 336 4314345</span>
            </a>

            <div className="hidden items-center gap-2 sm:flex">
               <FontAwesomeIcon icon={faLocationDot} className="text-lg" />
              <span>Grand Estate, ManuAbad</span>
            </div>

          </div>

          {/* Top Right Links */}
          <div className="hidden items-center md:flex">

            <Link
              to="/admission"
              className="border-r border-white/40 px-4 text-sm font-medium text-white no-underline hover:text-white"
            >
              Apply for Admission
            </Link>

            <Link
              to="/policies"
              className="px-4 text-sm font-medium text-white no-underline hover:text-white"
            >
              Institute Policies
            </Link>

          </div>
        </div>
      </div>

      {/* ================= MAIN NAVBAR ================= */}
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-3 no-underline"
          >
            <img
              src={scsLogo}
              alt="SCS Training Logo"
              className="h-12 w-auto object-contain"
            />

            <div>
              <div className="text-xl font-bold tracking-tight text-slate-900">
                SCS
              </div>

              <div className="text-[10px] font-medium uppercase tracking-wider text-gray-500">
                Training & Development
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden h-full items-center lg:flex">

            {/* Home */}
            <Link
              to="/"
              className={getNavItemClass(location.pathname === "/")}
            >
              Home
            </Link>

            {/* Short Courses */}
            <Dropdown
              menu={shortCourseMenu}
              placement="bottom"
              trigger={["hover"]}
            >
              <button
                type="button"
                onClick={() => navigate("/short-courses")}
                className={getNavItemClass(location.pathname.startsWith("/short-courses"))}
              >
                <span>Short Courses</span>
                <DownOutlined className="text-xs" />
              </button>
            </Dropdown>

            {/* Trainings */}
            <Dropdown
              menu={trainingMenu}
              placement="bottom"
              trigger={["hover"]}
            >
              <button
                type="button"
                onClick={() => navigate("/trainings")}
                className={getNavItemClass(location.pathname.startsWith("/trainings"))}
              >
                <span>Trainings</span>
                <DownOutlined className="text-xs" />
              </button>
            </Dropdown>

            {/* Contact */}
            <Link
              to="/contact"
              className={getNavItemClass(location.pathname === "/contact")}
            >
              Contact Us
            </Link>

          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-gray-200 bg-white text-xl text-slate-800 hover:bg-gray-50 lg:hidden"
            aria-label="Open menu"
          >
            <MenuOutlined />
          </button>

        </div>
      </div>

      {/* ================= MOBILE DRAWER ================= */}
      <Drawer
        title={
          <div className="flex items-center gap-3">
            <img
              src={scsLogo}
              alt="SCS Training Logo"
              className="h-9 w-auto object-contain"
            />

            <div>
              <div className="font-bold text-slate-900">
                SCS Training
              </div>
              <div className="text-xs text-gray-500">
                Training & Development
              </div>
            </div>
          </div>
        }
        placement="right"
        open={open}
        onClose={closeMenu}
        closeIcon={<CloseOutlined />}
        width={320}
      >

        <div className="flex flex-col">

          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-3 border-b border-gray-100 px-2 py-4 text-base font-medium text-slate-800 no-underline"
          >
            Home
          </Link>

          <div className="border-b border-gray-100 py-2">
            <Link
              to="/short-courses"
              onClick={closeMenu}
              className="block px-2 py-3 font-semibold text-slate-900 no-underline hover:text-orange-500"
            >
              Short Courses
            </Link>

            {shortCourses.map((course) => (
              <Link
                key={course.key}
                to="/short-courses"
                onClick={closeMenu}
                className="block px-5 py-2.5 text-sm text-gray-600 no-underline hover:text-orange-500"
              >
                {course.label}
              </Link>
            ))}
          </div>

          <div className="border-b border-gray-100 py-2">
            <Link
              to="/trainings"
              onClick={closeMenu}
              className="block px-2 py-3 font-semibold text-slate-900 no-underline hover:text-orange-500"
            >
              Trainings
            </Link>

            {trainings.map((training) => (
              <Link
                key={training.key}
                to="/trainings"
                onClick={closeMenu}
                className="block px-5 py-2.5 text-sm text-gray-600 no-underline hover:text-orange-500"
              >
                {training.label}
              </Link>
            ))}
          </div>

          <Link
            to="/contact"
            onClick={closeMenu}
            className="border-b border-gray-100 px-2 py-4 text-base font-medium text-slate-800 no-underline"
          >
            Contact Us
          </Link>

          <div className="mt-6">
            <Link to="/admission" onClick={closeMenu}>
              <Button
                type="primary"
                block
                size="large"
                icon={<FileTextOutlined />}
                className="!h-12 !border-0 !bg-orange-500 !font-semibold"
              >
                Apply for Admission
              </Button>
            </Link>
          </div>

        </div>
      </Drawer>

    </header>
  );
}

export default Navbar;
