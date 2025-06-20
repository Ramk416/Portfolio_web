import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiRedux, SiMongodb } from "react-icons/si";
import { FiDownload, FiExternalLink } from "react-icons/fi";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  ];

  return (
    <section
      id="skills"
      className="py-20 px-4 bg-gradient-to-br from-[#0f1c2e] to-[#020617] text-white border-t border-gray-700"
    >
      <div className="max-w-6xl mx-auto">
        {/* Centered Skill Heading over skill column only */}
        <div className="md:w-2/3 mb-10 flex justify-center">
          <h2 className="text-4xl font-bold text-cyan-400">Skills</h2>
        </div>

        {/* Content: Skills & Resume */}
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left - Skills */}
          <div className="md:w-2/3 pr-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 bg-[#111827] rounded-xl shadow hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-4xl mb-2">{skill.icon}</div>
                  <p className="text-lg font-medium">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Resume */}
          <div className="md:w-1/3 bg-[#111827] p-6 rounded-xl shadow-lg text-center flex flex-col items-center justify-center">
            <h3 className="text-2xl font-semibold mb-4">My Resume</h3>
            <p className="mb-6 text-gray-300">
              You can view or download my resume for more details.
            </p>
            <div className="flex flex-col gap-4 w-full">
              <a
                href="/assets/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 bg-cyan-600 text-white rounded-md hover:bg-cyan-700 transition"
              >
                <FiExternalLink /> View Resume
              </a>
              <a
                href="/assets/resume.pdf"
                download
                className="flex items-center justify-center gap-2 px-4 py-2 border border-cyan-500 text-cyan-400 rounded-md hover:bg-cyan-800 transition"
              >
                <FiDownload /> Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
