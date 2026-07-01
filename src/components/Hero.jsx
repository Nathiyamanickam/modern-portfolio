import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import {
  FaDownload,
  FaPaperPlane,
  FaArrowDown,
} from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="
      relative
      overflow-hidden
      bg-black
      pt-24
      pb-14
      px-6
      md:px-10
      lg:px-20
      "
    >
      {/* Background Glow */}

      <div className="absolute top-20 right-0 w-72 h-72 bg-cyan-500/5 blur-[100px]" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            Hi, I'm
          </h3>

          <h1 className="text-4xl md:text-6xl font-extrabold mt-2 leading-tight">
            <span className="text-cyan-400">
              Nathiya M
            </span>
          </h1>

          <div className="h-10 mt-3">
            <TypeAnimation
              sequence={[
                "MERN Stack Developer",
                2000,
                "React Developer",
                2000,
                "Full Stack Developer",
                2000,
                "Aspiring AI Developer",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              className="text-xl md:text-3xl text-white font-semibold"
            />
          </div>

          <p className="mt-5 text-gray-400 text-base md:text-lg leading-8 max-w-xl">
            Aspiring MERN Stack Developer passionate
            about building responsive, scalable and
            user-friendly web applications using
            modern technologies.
          </p>

          {/* Buttons */}

          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="/resume.pdf"
              download
              className="
              px-7 py-3.5
              rounded-xl
              bg-cyan-500
              text-white
              font-semibold
              flex items-center gap-3
              hover:bg-cyan-400
              transition-all
              duration-300
              shadow-lg shadow-cyan-500/20
              hover:scale-105
              "
            >
              <FaDownload />
              Resume
            </a>

            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              className="
              cursor-pointer
              px-7 py-3.5
              rounded-xl
              border border-cyan-400
              text-white
              flex items-center gap-3
              hover:bg-cyan-500
              transition-all
              duration-300
              hover:scale-105
              "
            >
              <FaPaperPlane />
              Contact
            </Link>

          </div>

          {/* Stats */}

          <div className="flex gap-4 mt-8 flex-wrap">

            <div className="
              bg-[#081121]
              border border-cyan-500/20
              rounded-xl
              px-5 py-3
              min-w-[100px]
            ">
              <h2 className="text-2xl font-bold text-cyan-400">
                5+
              </h2>

              <p className="text-gray-400 text-sm">
                Projects
              </p>
            </div>

            <div className="
              bg-[#081121]
              border border-cyan-500/20
              rounded-xl
              px-5 py-3
              min-w-[100px]
            ">
              <h2 className="text-2xl font-bold text-cyan-400">
                MERN
              </h2>

              <p className="text-gray-400 text-sm">
                Developer
              </p>
            </div>

            <div className="
              bg-[#081121]
              border border-cyan-500/20
              rounded-xl
              px-5 py-3
              min-w-[100px]
            ">
              <h2 className="text-2xl font-bold text-cyan-400">
                AI
              </h2>

              <p className="text-gray-400 text-sm">
                Learner
              </p>
            </div>

          </div>
        </motion.div>

        {/* RIGHT IMAGE */}

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center order-1 lg:order-2"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            {/* Soft Glow */}

            <div
              className="
              absolute
              inset-0
              rounded-full
              bg-cyan-500/5
              blur-2xl
              scale-100
              "
            />

            <img
              src="/profile.png"
              alt="Developer"
              className="
                w-60
                sm:w-72
                md:w-[340px]
                lg:w-[340px]
                rounded-full
                border-4
                border-cyan-400
                object-cover
                shadow-[0_0_25px_rgba(34,211,238,0.2)]
                relative
                z-10
              "
            />
          </motion.div>
        </motion.div>

      </div>

      {/* Scroll Icon */}

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
        className="
        hidden lg:block
        absolute
        bottom-4
        left-1/2
        -translate-x-1/2
        text-cyan-400
        text-xl
        "
      >
        <FaArrowDown />
      </motion.div>
    </section>
  );
}

export default Hero;