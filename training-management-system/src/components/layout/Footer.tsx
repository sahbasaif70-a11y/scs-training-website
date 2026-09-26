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

function Footer() {
  return (
    <footer className="bg-[#12327f] text-white">
      {/* Main Footer Container */}
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {/* ================= COLUMN 1: About SCS ================= */}
          <div>
            <h3 className="oswald-font text-2xl font-bold uppercase tracking-wider text-orange-500">
              About SCS
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-gray-300">
              Welcome to SCS Training Center – Empowering the Next Generation of
              Creatives and IT Professionals.
            </p>

            <div className="mt-4">
              <Link
                to="/about"
                className="inline-block rounded-md bg-white px-4 py-1.5 text-sm font-semibold text-slate-900 shadow-sm transition-colors hover:bg-orange-500 hover:text-white no-underline"
              >
                Learn more
              </Link>
            </div>

            {/* Social Media Links */}
            <div className="mt-4 flex items-center gap-2.5">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-md bg-orange-500 text-sm text-white transition-transform hover:scale-110 hover:bg-orange-600"
              >
                <FacebookFilled />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-md bg-orange-500 text-sm text-white transition-transform hover:scale-110 hover:bg-orange-600"
              >
                <InstagramOutlined />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-md bg-orange-500 text-sm text-white transition-transform hover:scale-110 hover:bg-orange-600"
              >
                <LinkedinFilled />
              </a>

              <a
                href="https://wa.me/923364314345"
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-md bg-orange-500 text-sm text-white transition-transform hover:scale-110 hover:bg-orange-600"
              >
                <WhatsAppOutlined />
              </a>
            </div>
          </div>

          {/* ================= COLUMN 2: Top Training Categories ================= */}
          <div>
            <h3 className="oswald-font text-2xl font-bold uppercase tracking-wider text-orange-500">
              Top Training Categories
            </h3>

            <ul className="mt-3 space-y-2 p-0 text-sm list-none">
              {[
                "Graphic Designing",
                "UI/UX Designing",
                "Web Development",
                "SEO / SMM",
                "Digital Media Marketing",
                "E-Commerce",
                "Office Management",
                "Video Creation with AI",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/courses"
                    className="flex items-center gap-2 text-gray-300 no-underline transition-colors hover:text-orange-500"
                  >
                    <DoubleRightOutlined className="text-xs text-orange-500" />
                    <span>{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= COLUMN 3: Useful Links ================= */}
          <div>
            <h3 className="oswald-font text-2xl font-bold uppercase tracking-wider text-orange-500">
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
                    className="flex items-center gap-2 text-gray-300 no-underline transition-colors hover:text-orange-500"
                  >
                    <DoubleRightOutlined className="text-xs text-orange-500" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= COLUMN 4: Get in Touch ================= */}
          <div>
            <h3 className="oswald-font text-2xl font-bold uppercase tracking-wider text-orange-500">
              Get in Touch!
            </h3>

            <div className="mt-3 space-y-3 text-sm text-gray-300">
              <p className="font-semibold text-white m-0">Head Office</p>

              <div className="flex items-center gap-3">
                <PhoneOutlined className="text-base text-orange-500" />
                <a
                  href="tel:+923288076326"
                  className="text-gray-300 no-underline hover:text-orange-500"
                >
                  +92 328 8076 326
                </a>
              </div>

              <div className="flex items-center gap-3">
                <WhatsAppOutlined className="text-base text-orange-500" />
                <a
                  href="https://wa.me/923364314345"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-300 no-underline hover:text-orange-500"
                >
                  +92 336 4314 345
                </a>
              </div>

              <div className="flex items-start gap-3">
                <EnvironmentOutlined className="mt-1 text-base text-orange-500" />
                <span>Grand Estate, ManuAbad, Muridke / Lahore</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 bg-orange-500 py-3 text-center text-xs text-white">
        <p className="m-0">
          © {new Date().getFullYear()} SCS Training Management System. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
