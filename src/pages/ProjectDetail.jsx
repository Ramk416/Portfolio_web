import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import projects from "../data/projects";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  if (!project) return <div className="p-6 text-red-600">Project not found.</div>;

  return (
    <div className="min-h-screen px-6 py-12 bg-gradient-to-br from-[#0f1c2e] to-[#020617] text-white pt-24 relative">
      {/* Title */}
      <h2 className="text-4xl font-bold text-center mb-8 text-cyan-400">
        {project.title}
      </h2>

      {/* Image Grid */}
      <div className="flex flex-wrap gap-4 mb-6 justify-center">
        {project.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Screenshot ${index}`}
            className="w-64 h-40 object-cover rounded-lg shadow-lg cursor-pointer hover:scale-105 transition"
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>

      {/* Description */}
      <p className="mb-6 text-gray-300 text-lg text-center max-w-3xl mx-auto">
        {project.description}
      </p>

      {/* Tech */}
      <div className="mb-4 text-center text-sm text-gray-400">
        <strong>Tech Used:</strong> {project.tech.join(", ")}
      </div>

      {/* Links */}
      <div className="flex justify-center gap-6 mt-4">
        <a
          href={project.liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:underline text-lg"
        >
          🔗 Live Demo
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:underline text-lg"
        >
          💻 GitHub
        </a>
      </div>

      {/* Modal for image view */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Enlarged"
            className="max-w-3xl max-h-[80vh] rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()} // prevent modal close on image click
          />
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
