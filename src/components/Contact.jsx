import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
         "service_rnpb69u",
        "template_e9nu4s7",
        form.current,
        "5-cKV-oJ1_KmlB-tw"
      )
      .then(() => {
        toast.success("Message Sent Successfully!");
        form.current.reset();
        setLoading(false);
      })
      .catch(() => {
        toast.error("Failed to send message.");
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="bg-black py-20 px-4 overflow-hidden"
    >
      {/* Glow Background */}

      <div className="absolute top-20 left-0 w-64 h-64 bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[120px]" />

      {/* Heading */}

      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 relative z-10"
      >
        <h1 className="text-1xl md:text-5xl font-bold text-white">
          Let's build{" "}
          <span className="text-cyan-400">
            something great.
          </span>
        </h1>

        <div className="w-24 h-1 bg-cyan-400 rounded-full mx-auto mt-4"></div>

        <p className="text-gray-400 mt-5 max-w-xl mx-auto text-sm md:text-base">
          I'm currently open to full-time roles,
          freelance projects and collaborations.
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto grid lg:grid-cols-[1.1fr_0.8fr] gap-6 relative z-10">

        {/* Form */}

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="
            bg-[#081121]
            border border-cyan-500/20
            rounded-2xl
            p-5
            shadow-lg
          "
        >
          <div className="mb-4">
            <label className="text-gray-300 text-sm">
              Name
            </label>

            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="
                w-full mt-2
                px-4 py-3
                rounded-xl
                bg-[#050816]
                border border-cyan-500/20
                text-white
                outline-none
                focus:border-cyan-400
              "
            />
          </div>

          <div className="mb-4">
            <label className="text-gray-300 text-sm">
              Email
            </label>

            <input
              type="email"
              name="email"
              required
              placeholder="yourmail@gmail.com"
              className="
                w-full mt-2
                px-4 py-3
                rounded-xl
                bg-[#050816]
                border border-cyan-500/20
                text-white
                outline-none
                focus:border-cyan-400
              "
            />
          </div>

          <div className="mb-5">
            <label className="text-gray-300 text-sm">
              Message
            </label>

            <textarea
              name="message"
              rows="4"
              required
              placeholder="Your message..."
              className="
                w-full mt-2
                h-28
                px-4 py-3
                rounded-xl
                bg-[#050816]
                border border-cyan-500/20
                text-white
                resize-none
                outline-none
                focus:border-cyan-400
              "
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              py-3
              rounded-full
              bg-cyan-500
              font-semibold
              transition-all
              duration-300
              hover:bg-cyan-400
              hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]
            "
          >
            {loading ? "Sending..." : "Send Message →"}
          </button>
        </motion.form>

        {/* Right Side */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <div
            className="
              bg-[#081121]
              border border-cyan-500/20
              rounded-2xl
              p-5
            "
          >
            <h2 className="text-xl font-semibold text-white mb-5">
              Contact Information
            </h2>

            <div className="space-y-5">

              <div className="flex items-center gap-4">
                <div className="bg-cyan-500/10 p-3 rounded-lg">
                  <FaEnvelope className="text-cyan-400" />
                </div>

                <span className="text-gray-300 text-sm">
                  nathiyamanickam6181@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-cyan-500/10 p-3 rounded-lg">
                  <FaPhone className="text-cyan-400" />
                </div>

                <span className="text-gray-300 text-sm">
                  +91 6369874271
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-cyan-500/10 p-3 rounded-lg">
                  <FaMapMarkerAlt className="text-cyan-400" />
                </div>

                <span className="text-gray-300 text-sm">
                  Karur, Tamil Nadu
                </span>
              </div>

            </div>
          </div>

          <div
            className="
              bg-[#081121]
              border border-cyan-500/20
              rounded-xl
              p-4
              flex items-center gap-3
            "
          >
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>

            <p className="text-sm text-gray-300">
              Available for new opportunities.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;