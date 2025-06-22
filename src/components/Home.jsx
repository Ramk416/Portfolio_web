import React from 'react';
import { Link } from 'react-router-dom'; // 👈 import Link

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
      style={{
        background: 'radial-gradient(circle at 30% 30%, #0f1c2e, #020617)',
      }}
    >
      {/* Glowing Lights */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 opacity-30 blur-3xl rounded-full z-0" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 opacity-20 blur-2xl rounded-full z-0" />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between w-full text-white">

        <div className="md:w-1/2 text-center md:text-left mt-10 md:mt-0">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            Hi, I'm <span className="text-cyan-400">Ramkishan</span>
          </h1>
          <h2 className="text-xl sm:text-2xl font-medium text-gray-200">
            Front-End Developer | UI Enthusiast
          </h2>

          <p className="mt-6 text-gray-300 text-base sm:text-lg">
            I craft responsive websites that are fast, easy to use, and built with modern aesthetics.
          </p>

          <div className="mt-8 flex justify-center md:justify-start gap-4">
            <Link
              to="/projects" // 👈 change from href="#projects"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition"
            >
              View Projects
            </Link>
            <a
              href="#contact"
              className="px-6 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <div className="w-60 h-60 rounded-full overflow-hidden border-4 border-cyan-400 shadow-2xl">
            <img
              src="/assets/images/logo1.jpg"
              alt="Ramkishan"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
