import { motion } from "framer-motion";
import {
  FaFileAlt,
  FaCertificate,
  FaCode,
  FaLaptopCode,
  FaRobot,
} from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto"
    >
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-white">
          About <span className="text-cyan-400">Me</span>
        </h2>

        <div className="w-24 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></div>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white mb-6">
            MERN Stack Developer
           
          </h3>

          <p className="text-gray-400 text-lg leading-9">
            Passionate MERN Stack Developer and aspiring AI Developer focused
            on building modern, responsive, and user-friendly web applications.
            Continuously learning new technologies and creating real-world
            projects to enhance my skills.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-5">

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="
                flex items-center justify-center gap-3
                px-7 py-4
                rounded-xl
                bg-cyan-500
                hover:bg-cyan-400
                text-white
                font-semibold
                transition
                shadow-lg shadow-cyan-500/30
              "
            >
              <FaFileAlt />
              View Resume
            </a>

            <a
              href="/certificates/certificate.pdf"
              className="
                flex items-center justify-center gap-3
                px-7 py-4
                rounded-xl
                border border-cyan-400
                text-white
                hover:bg-cyan-500
                transition
              "
            >
              <FaCertificate />
              Certifications
            </a>

          </div>
        </motion.div>

        {/* Right Side Stats */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-3 gap-6"
        >
          <div className="bg-black border border-cyan-500/20 rounded-2xl p-8 text-center hover:scale-105 transition duration-300 shadow-lg shadow-cyan-500/10">
            <FaCode className="text-cyan-400 text-4xl mx-auto mb-4" />
            <h4 className="text-3xl font-bold text-white">
              5+
            </h4>
            <p className="text-gray-400 mt-2">
              Projects Completed
            </p>
          </div>

          <div className="bg-black border border-cyan-500/20 rounded-2xl p-8 text-center hover:scale-105 transition duration-300 shadow-lg shadow-cyan-500/10">
            <FaLaptopCode className="text-cyan-400 text-4xl mx-auto mb-4" />
            <h4 className="text-xl font-bold text-white">
              MERN Stack
            </h4>
            <p className="text-gray-400 mt-2">
              Developer
            </p>
          </div>

          <div className="bg-black border border-cyan-500/20 rounded-2xl p-8 text-center hover:scale-105 transition duration-300 shadow-lg shadow-cyan-500/10">
            <FaRobot className="text-cyan-400 text-4xl mx-auto mb-4" />
            <h4 className="text-xl font-bold text-white">
              AI
            </h4>
            <p className="text-gray-400 mt-2">
              Enthusiast
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;