import { projects } from "../../data/projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function Projects() {
  return (
    <section
      id="projects"
      className="bg-black py-20 overflow-hidden"
    >
      {/* Heading */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          My <span className="text-cyan-400">Projects</span>
        </h1>

        <div className="w-24 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></div>

        <p className="text-gray-400 mt-5">
          Here are some of my projects showcasing full-stack development.
        </p>
      </motion.div>

      {/* Slider */}

      <div className="max-w-6xl mx-auto px-6">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={20}
          slidesPerGroup={1}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="
                  max-w-[300px]
                  mx-auto
                  bg-[#081121]
                  border border-cyan-500/20
                  rounded-3xl
                  overflow-hidden
                  transition-all
                  duration-300
            hover:border-cyan-400/40
                  hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
                "
              >
                {/* Image */}

                <div className="overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    src={project.image}
                    alt={project.title}
                    className="
                      w-full
                      h-48
                      object-cover
                    "
                  />
                </div>

                {/* Content */}

                <div className="p-3 text-center">

                  <h2 className="text-2xl font-bold text-white mb-4">
                    {project.title}
                  </h2>

                  <p className="text-gray-400 text-sm leading-7 mb-5">
                    {project.description}
                  </p>

                  {/* Technologies */}

                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {project.technologies?.map((tech, i) => (
                      <span
                        key={i}
                        className="
                          px-3 py-1
                          text-xs
                          rounded-full
                          bg-black
                          border border-cyan-500/20
                          text-cyan-400
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}

                  <div className="flex gap-3">

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="
                          flex-1
                          py-3
                          rounded-xl
                          border border-cyan-400
                          flex items-center
                          justify-center
                          gap-2
                          text-white
                          hover:bg-cyan-500
                          transition
                        "
                      >
                        <FaGithub />
                        GitHub
                      </a>
                    )}

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="
                          flex-1
                          py-3
                          rounded-xl
                          bg-cyan-500
                          hover:bg-cyan-400
                          flex items-center
                          justify-center
                          gap-2
                          text-white
                          transition
                        "
                      >
                        <FaExternalLinkAlt />
                        Live
                      </a>
                    )}

                  </div>

                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Projects;