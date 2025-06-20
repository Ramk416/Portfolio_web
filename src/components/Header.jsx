import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FiSearch, FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Detect outside click to close search
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSearch(false);
        setSearchTerm("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Dark mode toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavClick = (sectionId) => {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(sectionId), 100);
    } else {
      scrollToSection(sectionId);
    }
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      const lower = searchTerm.toLowerCase();
      if (lower.includes("project")) {
        navigate("/projects");
      } else if (["skill", "home", "contact", "about"].some(w => lower.includes(w))) {
        if (location.pathname !== "/") {
          navigate("/");
          setTimeout(() => scrollToSection(lower), 100);
        } else {
          scrollToSection(lower);
        }
      }
      setSearchTerm("");
      setShowSearch(false);
    }
  };

  return (
    <nav className="fixed w-full z-50 top-0 left-0 shadow-md bg-gradient-to-r from-[#0f1c2e] to-[#020617] dark:from-black dark:to-gray-900 border-b border-cyan-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center text-white">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-cyan-400">
              <img
                src="/assets/images/logo1.jpg"
                alt="Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-2xl font-bold text-cyan-400">MyPortfolio</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 font-medium items-center">
            <button onClick={() => handleNavClick("home")} className="hover:text-cyan-400 transition">Home</button>
            <button onClick={() => handleNavClick("about")} className="hover:text-cyan-400 transition">About</button>
            <button onClick={() => handleNavClick("skills")} className="hover:text-cyan-400 transition">Skills</button>
            <Link to="/projects" className="hover:text-cyan-400 transition">Projects</Link>
            <button onClick={() => handleNavClick("contact")} className="hover:text-cyan-400 transition">Contact</button>

            <FiSearch className="text-xl cursor-pointer hover:text-cyan-400" onClick={() => setShowSearch(!showSearch)} />
            <button onClick={toggleTheme} className="ml-2 text-xl hover:text-yellow-300 transition">
              {darkMode ? <FiSun /> : <FiMoon />}
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <FiSearch className="text-xl cursor-pointer hover:text-cyan-400" onClick={() => setShowSearch(!showSearch)} />
            <button onClick={toggleTheme} className="text-xl hover:text-yellow-300 transition">
              {darkMode ? <FiSun /> : <FiMoon />}
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-2 flex flex-col space-y-3 py-4 bg-[#0f1c2e] dark:bg-gray-900 rounded-lg px-4 text-white">
            <button onClick={() => handleNavClick("home")} className="text-left hover:text-cyan-400">Home</button>
            <button onClick={() => handleNavClick("about")} className="text-left hover:text-cyan-400">About</button>
            <button onClick={() => handleNavClick("skills")} className="text-left hover:text-cyan-400">Skills</button>
            <Link to="/projects" onClick={() => setMenuOpen(false)} className="hover:text-cyan-400">Projects</Link>
            <button onClick={() => handleNavClick("contact")} className="text-left hover:text-cyan-400">Contact</button>
          </div>
        )}

        {/* Search Box */}
        {showSearch && (
          <div ref={searchRef} className="absolute top-16 right-6 z-30">
            <input
              type="text"
              placeholder="Search (e.g., skills, projects)..."
              className="bg-white text-black rounded-md p-2 w-full sm:w-64 focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleSearch}
              autoFocus
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
