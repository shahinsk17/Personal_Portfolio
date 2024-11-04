import React from "react";
import logo from "../assets/f2-Photoroom.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="relative mb-20 flex items-center justify-between py-6 px-6 shadow-md">
      <div className="flex items-center">
        <img src={logo} alt="Shahin Shaikh Logo" className="h-20 w-auto" />
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/shahin-shaikh-5b6568229/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/shahinsk17"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/shahin56367/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
      </div>

      <div className="absolute right-0 bottom-0 m-4 flex flex-col items-end">
        <div className="text-sm text-gray-400 mt-1">
          <a href="mailto:shahinshaikh6828@example.com">
            shahinshaikh6828@example.com
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
