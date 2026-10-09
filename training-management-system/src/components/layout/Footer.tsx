import { Link } from "react-router-dom";
import {
  FacebookFilled,
  InstagramOutlined,
  LinkedinFilled,
  WhatsAppOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  DoubleRightOutlined,
} from "@ant-design/icons";
import { useTheme } from "../../context/ThemeContext";

const topTrainingCategories = [
  { label: "Full Stack Web Development", id: "1" },
  { label: "Mobile App Development", id: "2" },
  { label: "Social Media Marketing", id: "3" },
  { label: "Social Media Management", id: "4" },
  { label: "SEO & Website Optimization", id: "6" },
  { label: "ERP Consulting", id: "7" },
  { label: "AI Video Generation", id: "8" },
  { label: "Agentic AI", id: "9" },
];

function Footer() {
  const { themeConfig } = useTheme();

  return (
    <footer className="bg-[#02040c] text-white">
      {/* Main Footer Container */}
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {/* ================= COLUMN 1: About SCS ================= */}
          <div>
            <h3 className="oswald-font text-2xl font-bold uppercase tracking-wider text-theme">
              About SCS
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-gray-300">
              Welcome to SCS Training Center – Empowering the Next Generation of
              Creatives and IT Professionals.
            </p>

            <div className="mt-4">
              <Link
                to="/about"
                className={`inline-block rounded-md ${themeConfig.bgClass} px-4 py-1.5 text-sm font-semibold text-slate-900 shadow-sm transition-transform hover:scale-110 hover:text-white no-underline`}
              >
                Learn more
              </Link>
            </div>

            {/* Social Media Links */}
            <div className="mt-4 flex items-center gap-2.5">
              <a
                href="https://www.facebook.com/share/19AJg9yrxk/"
                target="_blank"
                rel="noreferrer"
                className={`flex h-8 w-8 items-center justify-center rounded-md ${themeConfig.bgClass} text-sm text-white transition-transform hover:scale-110`}
              >
                <FacebookFilled />
              </a>

              <a
                href="https://www.instagram.com/eccountbookerpcloud/"
                target="_blank"
                rel="noreferrer"
                className={`flex h-8 w-8 items-center justify-center rounded-md ${themeConfig.bgClass} text-sm text-white transition-transform hover:scale-110`}
              >
                <InstagramOutlined />
              </a>

              <a
                href="https://www.linkedin.com/company/eccountbook-cloud-erp/"
                target="_blank"
                rel="noreferrer"
                className={`flex h-8 w-8 items-center justify-center rounded-md ${themeConfig.bgClass} text-sm text-white transition-transform hover:scale-110`}
              >
                <LinkedinFilled />
              </a>

              <a
                href="https://wa.me/923095982583"
                target="_blank"
                rel="noreferrer"
                className={`flex h-8 w-8 items-center justify-center rounded-md ${themeConfig.bgClass} text-sm text-white transition-transform hover:scale-110`}
              >
                <WhatsAppOutlined />
              </a>
            </div>
          </div>

          {/* ================= COLUMN 2: Top Training Categories ================= */}
          <div>
            <h3 className="oswald-font text-2xl font-bold uppercase tracking-wider text-theme">
              Top Training Categories
            </h3>

            <ul className="mt-3 space-y-2 p-0 text-sm list-none">
              {topTrainingCategories.map((item) => (
                <li key={item.id}>
                  <Link
                    to={`/courses/${item.id}`}
                    className="flex items-center gap-2 text-gray-300 no-underline transition-colors hover:text-theme"
                  >
                    <DoubleRightOutlined className="text-xs text-theme" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= COLUMN 3: Useful Links ================= */}
          <div>
            <h3 className="oswald-font text-2xl font-bold uppercase tracking-wider text-theme">
              Useful Links
            </h3>

            <ul className="mt-3 space-y-2 p-0 text-sm list-none">
              {[
                { label: "About Us", path: "/about" },
                { label: "Contact Us", path: "/contact" },
                { label: "Apply for Admission", path: "/admission" },
                { label: "Institute Policies", path: "/policies" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 text-gray-300 no-underline transition-colors hover:text-theme"
                  >
                    <DoubleRightOutlined className="text-xs text-theme" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= COLUMN 4: Get in Touch ================= */}
          <div>
            <h3 className="oswald-font text-2xl font-bold uppercase tracking-wider text-theme">
              Get in Touch!
            </h3>

            <div className="mt-3 space-y-3 text-sm text-gray-300">
              <p className="font-semibold text-white m-0">Head Office</p>

              <div className="flex items-center gap-3">
                <PhoneOutlined className="text-base text-theme" />
                <a
                  href="tel:+923095982583"
                  className="text-gray-300 no-underline hover:text-theme"
                >
                  +92 309 5982 583
                </a>
              </div>

              <div className="flex items-center gap-3">
                <WhatsAppOutlined className="text-base text-theme" />
                <a
                  href="https://wa.me/923095982583"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-300 no-underline hover:text-theme"
                >
                  +92 309 5982 583
                </a>
              </div>

              <div className="flex items-start gap-3">
                <EnvironmentOutlined className="mt-1 text-base text-theme" />
                <span>Grand Estate Society, Opposite Saab-Factory, Muridke</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className={`border-t border-slate-800 ${themeConfig.bgClass} py-3 text-center text-xs text-white transition-colors duration-300`}>
        <p className="m-0">
          © {new Date().getFullYear()} SCS Training Management System. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
