import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaRobot,
  FaTools,
} from "react-icons/fa";

function Skills() {
  const skills = [
    {
      title: "Frontend",
      icon: <FaReact />,
      items: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Tailwind",
      ],
    },
    {
      title: "Backend",
      icon: <FaNodeJs />,
      items: [
        "Node.js",
        "Express",
        "REST API",
        "JWT",
      ],
    },
    {
      title: "Database",
      icon: <FaDatabase />,
      items: [
        "MongoDB",
        "Mongoose",
      ],
    },
    {
      title: "AI & GenAI",
      icon: <FaRobot />,
      items: [
        "Gen AI",
        "LLMs",
        "OpenAI",
        "Prompting",
      ],
    },
    {
      title: "Tools",
      icon: <FaTools />,
      items: [
        "Git",
        "GitHub",
        "VS Code",
        "Postman",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center py-24 px-6 max-w-7xl mx-auto"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          My <span className="text-cyan-400">Skills</span>
        </h2>

        <p className="text-gray-400 mt-4">
          Technologies and tools I use to build modern applications.
        </p>

        <div className="w-24 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></div>
      </motion.div>

      {/* Skills Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">

        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            className="
              bg-zinc-900
              border
              border-cyan-500/20
              rounded-2xl
              p-5
              hover:border-cyan-400
              hover:shadow-lg
              hover:shadow-cyan-500/20
              transition-all
              duration-300
            "
          >
            {/* Icon */}
            <div className="text-3xl text-cyan-400 mb-4">
              {skill.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-white mb-4">
              {skill.title}
            </h3>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item, i) => (
                <span
                  key={i}
                  className="
                    px-3 py-1.5
                    text-sm
                    rounded-full
                    bg-black
                    border border-cyan-500/20
                    text-gray-300
                    hover:text-cyan-400
                    hover:border-cyan-400
                    transition
                  "
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-center">
        <div>
          <h3 className="text-4xl font-bold text-cyan-400">
            5+
          </h3>
          <p className="text-gray-400 mt-2">
            Projects
          </p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-cyan-400">
            MERN
          </h3>
          <p className="text-gray-400 mt-2">
            Developer
          </p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-cyan-400">
            AI
          </h3>
          <p className="text-gray-400 mt-2">
            Enthusiast
          </p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-cyan-400">
            15+
          </h3>
          <p className="text-gray-400 mt-2">
            Technologies
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;