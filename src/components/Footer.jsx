import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-black border-t border-cyan-500/20 overflow-hidden">

      {/* Background Glow */}

      <div className="absolute left-0 bottom-0 w-72 h-72 bg-cyan-500/10 blur-[130px]" />
      <div className="absolute right-0 top-0 w-72 h-72 bg-cyan-500/10 blur-[130px]" />

      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">

        {/* Top Section */}

        <div className="grid md:grid-cols-3 gap-10 mb-10">

          {/* Logo */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold text-cyan-400">
              Nathiya.
            </h2>

            <p className="text-gray-400 mt-4 leading-7">
              MERN Stack Developer and aspiring AI Developer
              focused on building modern, responsive,
              and scalable web applications.
            </p>
          </motion.div>

          {/* Quick Links */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-white text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="#home"
                  className="hover:text-cyan-400 transition"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="hover:text-cyan-400 transition"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="hover:text-cyan-400 transition"
                >
                  Projects
                </a>
              </li>

               <li>
                <a
                  href="#skills"
                  className="hover:text-cyan-400 transition"
                >
                  Skills
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="hover:text-cyan-400 transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <h3 className="text-white text-xl font-semibold mb-4">
              Let's Connect
            </h3>

            <p className="text-gray-400">
              nathiyamanickam6181@gmail.com
             
             
             <p className="text-gray-400">6369874271</p> 
            </p>

            

            <div className="flex gap-4 mt-6">

              <a
                href="https://github.com/Nathiyamanickam"
                target="_blank"
                rel="noreferrer"
                className="
                  p-3 rounded-xl
                  bg-[#081121]
                  border border-cyan-500/20
                  hover:bg-cyan-500
                  hover:scale-110
                  transition-all duration-300
                "
              >
                <FaGithub />
              </a>

              <a
                href="linkedin.com/in/nathiya-juniordeveloper"
                target="_blank"
                rel="noreferrer"
                className="
                  p-3 rounded-xl
                  bg-[#081121]
                  border border-cyan-500/20
                  hover:bg-cyan-500
                  hover:scale-110
                  transition-all duration-300
                "
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:nathiyamanickam6181@gmail.com"
                className="
                  p-3 rounded-xl
                  bg-[#081121]
                  border border-cyan-500/20
                  hover:bg-cyan-500
                  hover:scale-110
                  transition-all duration-300
                "
              >
                <FaEnvelope />
              </a>

            </div>
          </motion.div>
        </div>

        {/* Availability */}

        <motion.div
          animate={{
            boxShadow: [
              "0 0 10px rgba(34,197,94,0.1)",
              "0 0 20px rgba(34,197,94,0.4)",
              "0 0 10px rgba(34,197,94,0.1)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="
            max-w-sm mx-auto
            bg-[#081121]
            border border-cyan-500/20
            rounded-full
            py-3 px-6
            flex items-center justify-center gap-3
            mb-10
          "
        >
          <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>

          <span className="text-gray-300 text-sm">
            Available for new opportunities
          </span>
        </motion.div>

        {/* Bottom */}

        <div className="border-t border-cyan-500/20 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-400 text-sm">
            © 2026 Nathiya Portfolio. All rights reserved.
          </p>

          <button
            onClick={scrollTop}
            className="
              p-3 rounded-full
              bg-cyan-500
              hover:bg-cyan-400
              hover:scale-110
              transition-all duration-300
              shadow-[0_0_20px_rgba(6,182,212,0.4)]
            "
          >
            <FaArrowUp />
          </button>

        </div>
      </div>
    </footer>
  );
}

export default Footer;