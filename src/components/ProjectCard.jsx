import React from "react";
import { Link } from "react-router-dom";
import 'aos/dist/aos.css';

const ProjectCard = ({ project }) => {
  return (
    <Link to={`/projects/${project.id}`}>
      <div
        className="w-72 max-w-sm rounded-xl overflow-hidden shadow-2xl border border-gray-800 bg-gradient-to-br from-[#1e293b] to-[#0f172a] hover:scale-105 transform transition duration-300 hover:shadow-cyan-500/40"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-48 object-cover rounded-t-xl"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-cyan-400 mb-1">
            {project.title}
          </h3>
          <p className="text-gray-300 text-sm">{project.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
