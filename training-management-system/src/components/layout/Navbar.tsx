import { useState } from "react";
import { Button, Drawer, Dropdown } from "antd";
import {
  MenuOutlined,
  DownOutlined,
  CloseOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import scsLogo from "../../assets/scs logo.png";
import { useTheme } from "../../context/ThemeContext";

const trainings = [
  { key: "1", label: "Full Stack Web Development", id: "1" },
  { key: "2", label: "Mobile App Development", id: "2" },
  { key: "3", label: "Social Media Marketing", id: "3" },
  { key: "4", label: "Social Media Management", id: "4" },
  { key: "6", label: "SEO & Web Optimization", id: "6" },
  { key: "7", label: "ERP Consulting & Implementation", id: "7" },
  { key: "8", label: "AI Video Generation", id: "8" },
  { key: "9", label: "Agentic AI", id: "9" },
];

const batchItems = [
  { key: "morning", label: "Morning Batch (09:00 AM – 12:00 PM)" },
  { key: "afternoon", label: "Afternoon Batch (02:00 PM – 05:00 PM)" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, setTheme, themeConfig } = useTheme();

  const closeMenu = () => {
    setOpen(false);
  };

  const batchMenu = {
    items: batchItems.map((batch) => ({
      key: batch.key,
      label: (
        <Link
          to="/batches"
          className="no-underline text-slate-800 block w-full py-1 hover:text-theme font-medium text-sm transition-colors"
        >
          {batch.label}
        </Link>
      ),
    })),
  };

  const trainingMenu = {
    items: trainings.map((training) => ({
      key: training.key,
      label: (
        <Link
          to={`/courses/${training.id}`}
          className="no-underline text-slate-800 block w-full py-1 hover:text-theme font-medium text-sm transition-colors"
        >
          {training.label}
        </Link>
      ),
    })),
  };

  const getNavItemClass = (isActive: boolean) =>
    `oswald-font flex h-20 items-center justify-center gap-2 border-0 px-5 !text-[20px] lg:!text-[22px] !font-normal no-underline transition-colors duration-200 cursor-pointer ${
      isActive
        ? `${themeConfig.bgClass} !text-white`
        : "bg-white text-slate-900 hover:bg-gray-100"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">

      {/* ================= TOP BAR ================= */}
      <div className={`${themeConfig.bgClass} text-white transition-colors duration-300`}>
        <div className="mx-auto flex min-h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* Contact Information */}
          <div className="flex items-center gap-5 text-xs sm:gap-7 sm:text-sm">
            <a
              href="tel:+923095982583"
              className="flex items-center gap-2 text-white no-underline hover:text-white"
            >
              <FontAwesomeIcon icon={faPhone} className="text-lg" />
              <span>+92 309 5982583</span>
            </a>

            <div className="hidden items-center gap-2 sm:flex">
              <FontAwesomeIcon icon={faLocationDot} className="text-lg" />
              <span>Grand Estate Society, Opposite Saab-Factory, Muridke</span>
            </div>
          </div>

          {/* Top Right Links & Theme Switcher */}
          <div className="flex items-center">
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

            {/* SCS Logo Theme Palette Dots */}
            <div className="flex items-center gap-2 pl-3 border-l border-white/40">
              <span className="text-xs text-white/90 font-medium hidden lg:inline">Theme:</span>
              <button
                type="button"
                onClick={() => setTheme("orange")}
                title="SCS Orange Theme"
                className={`h-5 w-5 rounded-full bg-[#f97316] border-2 border-white transition-transform cursor-pointer ${
                  theme === "orange" ? "scale-125 ring-2 ring-white shadow-md" : "opacity-70 hover:opacity-100"
                }`}
              />
              <button
                type="button"
                onClick={() => setTheme("blue")}
                title="SCS Royal Blue Theme"
                className={`h-5 w-5 rounded-full bg-[#12327f] border-2 border-white transition-transform cursor-pointer ${
                  theme === "blue" ? "scale-125 ring-2 ring-white shadow-md" : "opacity-70 hover:opacity-100"
                }`}
              />
              <button
                type="button"
                onClick={() => setTheme("green")}
                title="SCS Emerald Green Theme"
                className={`h-5 w-5 rounded-full bg-[#009966] border-2 border-white transition-transform cursor-pointer ${
                  theme === "green" ? "scale-125 ring-2 ring-white shadow-md" : "opacity-70 hover:opacity-100"
                }`}
              />
            </div>
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

            {/* 1. Home */}
            <Link
              to="/"
              className={getNavItemClass(location.pathname === "/")}
            >
              Home
            </Link>

            {/* 2. About Us */}
            <Link
              to="/about"
              className={getNavItemClass(location.pathname === "/about")}
            >
              About Us
            </Link>

            {/* 3. Trainings Dropdown */}
            <Dropdown
              menu={trainingMenu}
              placement="bottom"
              trigger={["hover"]}
            >
              <button
                type="button"
                onClick={() => navigate("/trainings")}
                className={getNavItemClass(location.pathname.startsWith("/trainings") || location.pathname.startsWith("/courses"))}
              >
                <span>Trainings</span>
                <DownOutlined className="text-xs" />
              </button>
            </Dropdown>

            {/* 4. Training Batches Dropdown */}
            <Dropdown
              menu={batchMenu}
              placement="bottom"
              trigger={["hover"]}
            >
              <button
                type="button"
                onClick={() => navigate("/batches")}
                className={getNavItemClass(
                  location.pathname.startsWith("/batches") || location.pathname.startsWith("/short-courses")
                )}
              >
                <span>Training Batches</span>
                <DownOutlined className="text-xs" />
              </button>
            </Dropdown>

            {/* 5. Contact Us */}
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

          {/* 1. Home */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-3 border-b border-gray-100 px-2 py-3.5 text-base font-medium text-slate-800 no-underline hover:text-theme"
          >
            Home
          </Link>

          {/* 2. About Us */}
          <Link
            to="/about"
            onClick={closeMenu}
            className="flex items-center gap-3 border-b border-gray-100 px-2 py-3.5 text-base font-medium text-slate-800 no-underline hover:text-theme"
          >
            About Us
          </Link>

          {/* 3. Training Batches */}
          <div className="border-b border-gray-100 py-2">
            <Link
              to="/batches"
              onClick={closeMenu}
              className="block px-2 py-2.5 font-semibold text-slate-900 no-underline hover:text-theme"
            >
              Training Batches
            </Link>

            {batchItems.map((batch) => (
              <Link
                key={batch.key}
                to="/batches"
                onClick={closeMenu}
                className="block px-5 py-2 text-sm text-gray-600 no-underline hover:text-theme"
              >
                {batch.label}
              </Link>
            ))}
          </div>

          {/* 4. Trainings */}
          <div className="border-b border-gray-100 py-2">
            <Link
              to="/trainings"
              onClick={closeMenu}
              className="block px-2 py-2.5 font-semibold text-slate-900 no-underline hover:text-theme"
            >
              Trainings
            </Link>

            {trainings.map((training) => (
              <Link
                key={training.key}
                to={`/courses/${training.id}`}
                onClick={closeMenu}
                className="block px-5 py-2 text-sm text-gray-600 no-underline hover:text-theme transition-colors"
              >
                {training.label}
              </Link>
            ))}
          </div>

          {/* 5. Contact Us */}
          <Link
            to="/contact"
            onClick={closeMenu}
            className="border-b border-gray-100 px-2 py-3.5 text-base font-medium text-slate-800 no-underline hover:text-theme"
          >
            Contact Us
          </Link>

          {/* Theme Palette in Mobile */}
          <div className="mt-4 p-3 bg-gray-50 rounded-lg flex items-center justify-between">
            <span className="text-xs font-semibold text-gray-700">Choose Theme:</span>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setTheme("orange");
                  closeMenu();
                }}
                className={`h-6 w-6 rounded-full bg-[#f97316] border-2 border-white shadow ${
                  theme === "orange" ? "ring-2 ring-orange-500" : ""
                }`}
              />
              <button
                type="button"
                onClick={() => {
                  setTheme("blue");
                  closeMenu();
                }}
                className={`h-6 w-6 rounded-full bg-[#12327f] border-2 border-white shadow ${
                  theme === "blue" ? "ring-2 ring-blue-500" : ""
                }`}
              />
              <button
                type="button"
                onClick={() => {
                  setTheme("green");
                  closeMenu();
                }}
                className={`h-6 w-6 rounded-full bg-[#009966] border-2 border-white shadow ${
                  theme === "green" ? "ring-2 ring-emerald-500" : ""
                }`}
              />
            </div>
          </div>

          <div className="mt-6">
            <Link to="/admission" onClick={closeMenu}>
              <Button
                type="primary"
                block
                size="large"
                icon={<FileTextOutlined />}
                className={`!h-12 !border-0 bg-theme !font-semibold`}
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
