import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0f1c2e] to-[#020617] text-gray-300 pt-10 pb-6 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">

        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold text-cyan-400">Ramkishan</h2>
          <p className="mt-2 text-sm text-gray-400">
            Front-End Developer | Crafting modern, responsive web experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-cyan-300">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-cyan-400 transition">About</a></li>
            <li><a href="#skills" className="hover:text-cyan-400 transition">Skills</a></li>
            <li><a href="#projects" className="hover:text-cyan-400 transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-cyan-300">Connect</h3>
          <div className="flex justify-center md:justify-start space-x-5">
            <a href="https://github.com/Ramk416" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400" aria-label="GitHub">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/ramkishan-suthar-b6aa3625b/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400" aria-label="LinkedIn">
              <FaLinkedin size={20} />
            </a>
            <a href="mailto:er.rkjangir9602@email.com" className="hover:text-cyan-400" aria-label="Email">
              <FaEnvelope size={20} />
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-400 break-all">er.rkjangir9602@gmail.com</p>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-10">
        © {new Date().getFullYear()} Ramkishan. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
