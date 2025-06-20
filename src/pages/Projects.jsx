import React, { useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";
import AOS from 'aos';

const Projects = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0f1c2e] to-[#020617] px-6 py-12 pt-24">
      <h2 className="text-4xl font-bold text-center mb-10 text-cyan-400">
        My Projects
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center max-w-7xl mx-auto">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
