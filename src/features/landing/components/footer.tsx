import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="w-full fixed bottom-0 bg-transparent text-white px-4 py-3 flex flex-col sm:flex-row sm:justify-between items-center gap-4">
      <div className="text-center sm:text-left">
        <p className="mb-2 font-semibold text-orange-400">
          Full Stack / Backend Geliştirici
        </p>
        <p className="text-nowrap">
          Berat Kütükçü{" "}
          <a
            href="mailto:beratkutukcuu@gmail.com"
            className="underline hover:text-orange-400"
          >
            beratkutukcuu@gmail.com
          </a>
        </p>
        <p>
          <a href="tel:+905343524062" className="hover:text-orange-400">
            +90 534 352 40 62
          </a>
        </p>
      </div>

      <div className="flex gap-4 text-xl">
        <a
          href="https://www.linkedin.com/in/beratkutukcu/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-orange-400 transition"
        >
          <FaLinkedin /> LinkedIn
        </a>
        <a
          href="https://github.com/BeratKutukcuHub"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-orange-400 transition"
        >
          <FaGithub /> GitHub
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-orange-400 transition"
        >
          <FaInstagram /> Instagram
        </a>
      </div>
    </footer>
  );
};

export default Footer;