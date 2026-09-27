import { useState } from "react";
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ fullName: "", phone: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <div className="bg-gray-50">
      {/* ================= HERO BANNER ================= */}
      <section className="relative h-[380px] w-full overflow-hidden bg-slate-900 sm:h-[450px]">
        {/* Support Rep Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80&w=1600')",
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/40 to-transparent" />

        {/* Content Box (Glassmorphism Badge) */}
        <div className="relative mx-auto flex h-full max-w-7xl items-end px-5 pb-12 sm:px-8 lg:px-10">
          <div className="rounded-2xl bg-orange-500/90 p-6 text-white shadow-2xl backdrop-blur-md sm:p-8 sm:min-w-[380px]">
            <h1 className="oswald-font text-4xl font-bold uppercase tracking-wide text-white sm:text-5xl">
              Contact Us
            </h1>
            <p className="mt-2 text-base font-medium text-orange-100 sm:text-lg">
              We'd love to hear from you!
            </p>
          </div>
        </div>
      </section>

      {/* ================= FORM & GET IN TOUCH SECTION ================= */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">

            {/* LEFT COLUMN: CONTACT FORM (DARK SLATE CARD) */}
            <div className="flex flex-col justify-between rounded-2xl bg-[#0f172a] p-8 text-white shadow-xl sm:p-10">
              <div>
                <p className="text-sm font-medium text-gray-300 sm:text-base">
                  Fill in the form below and we will contact you as soon as
                  possible.
                </p>

                {isSubmitted ? (
                  <div className="mt-8 flex flex-col items-center justify-center rounded-xl bg-emerald-500/10 p-6 text-center text-emerald-400 border border-emerald-500/30">
                    <CheckCircleOutlined className="text-4xl" />
                    <h3 className="mt-2 text-lg font-bold">Message Sent!</h3>
                    <p className="text-xs text-emerald-300">
                      Thank you for reaching out. Our team will get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">

                    {/* Full Name */}
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        className="w-full rounded-lg border-0 bg-white p-3.5 text-sm text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>

                    {/* Phone & Email Row */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <input
                        type="tel"
                        required
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full rounded-lg border-0 bg-white p-3.5 text-sm text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-orange-500"
                      />

                      <input
                        type="email"
                        required
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full rounded-lg border-0 bg-white p-3.5 text-sm text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <textarea
                        rows={5}
                        required
                        placeholder="Message"
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full rounded-lg border-0 bg-white p-3.5 text-sm text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>

                    {/* Send Button */}
                    <button
                      type="submit"
                      className="w-full rounded-lg bg-orange-500 py-3.5 text-base font-bold uppercase tracking-wider text-white transition-colors hover:bg-orange-600 cursor-pointer shadow-md"
                    >
                      Send
                    </button>

                  </form>
                )}
              </div>
            </div>

            {/* RIGHT COLUMN: GET IN TOUCH DETAILS */}
            <div className="flex flex-col justify-center space-y-8 lg:py-4">

              <div>
                <h2 className="oswald-font text-3xl font-bold uppercase tracking-wide text-orange-500 sm:text-4xl">
                  Get in Touch!
                </h2>
              </div>

              {/* Call Us */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-xl text-orange-500">
                  <PhoneOutlined />
                </div>

                <div>
                  <h3 className="oswald-font text-2xl font-bold text-orange-500">
                    Call Us
                  </h3>
                  <p className="mt-1 text-sm font-medium text-gray-700 sm:text-base">
                    +92 336 4314 345 | +92 328 8076 326
                  </p>
                </div>
              </div>

              {/* Email Address */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-xl text-orange-500">
                  <MailOutlined />
                </div>

                <div>
                  <h3 className="oswald-font text-2xl font-bold text-orange-500">
                    Email Address
                  </h3>
                  <p className="mt-1 text-sm font-medium text-gray-700 sm:text-base">
                    info@scstrainings.com | scstrainingcenter@gmail.com
                  </p>
                </div>
              </div>

              {/* Head Office */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-xl text-orange-500">
                  <EnvironmentOutlined />
                </div>

                <div>
                  <h3 className="oswald-font text-2xl font-bold text-orange-500">
                    Head Office
                  </h3>
                  <p className="mt-1 text-sm font-medium text-gray-700 sm:text-base">
                    Grand Estate, ManuAbad, Muridke / Lahore
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ================= GOOGLE MAP SECTION ================= */}
      <section className="pb-16 sm:pb-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="h-96 w-full overflow-hidden rounded-2xl border border-gray-200 shadow-md">
            <iframe
              title="SCS Training Center Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13596.345829375121!2d74.3141883!3d31.5497222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2002!2sGulshan-e-Ravi%2C%20Lahore!5e0!3m2!1sen!2spk!4v1710000000000!5m2!1sen!2spk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
