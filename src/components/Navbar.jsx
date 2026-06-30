import { useState } from "react";
import { Link } from "react-scroll";
import {
  FaGithub,
  FaLinkedin,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-cyan-400 text-2xl font-bold cursor-pointer">
          Nathiya.
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-white">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-cyan-400 transition"
          >
            Home
          </Link>

          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-cyan-400 transition"
          >
            About
          </Link>

          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-cyan-400 transition"
          >
            Projects
          </Link>

          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-cyan-400 transition"
          >
            Skills
          </Link>

          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-cyan-400 transition"
          >
            Contact
          </Link>
        </div>

        {/* Desktop Right Side */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href="https://github.com/Nathiyamanickam"
            target="_blank"
            rel="noreferrer"
            className="text-white text-xl hover:text-cyan-400"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/nathiya-juniordeveloper"
            target="_blank"
            rel="noreferrer"
            className="text-white text-xl hover:text-cyan-400"
          >
            <FaLinkedin />
          </a>

          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer px-5 py-2 rounded-full bg-cyan-500 text-white hover:bg-cyan-400 transition"
          >
            Contact Me
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-cyan-400 text-2xl"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg">
          <div className="flex flex-col items-center py-6 gap-6 text-white">

            <Link to="home" smooth onClick={() => setOpen(false)}>
              Home
            </Link>

            <Link to="about" smooth onClick={() => setOpen(false)}>
              About
            </Link>

<Link to="skills" smooth onClick={() => setOpen(false)}>
              Skills
            </Link>
            <Link to="projects" smooth onClick={() => setOpen(false)}>
              Projects
            </Link>

            

            <Link to="contact" smooth onClick={() => setOpen(false)}>
              Contact
            </Link>

            <div className="flex gap-5 text-2xl">
              <FaGithub className="hover:text-cyan-400 cursor-pointer" />
              <FaLinkedin className="hover:text-cyan-400 cursor-pointer" />
            </div>

            <Link
              to="contact"
              smooth
              onClick={() => setOpen(false)}
              className="px-6 py-3 rounded-full bg-cyan-500 text-white"
            >
              Contact Me
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;