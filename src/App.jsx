import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'aos/dist/aos.css';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import ScrollToTop from './components/ScrollToTop'; 
import Achievements from './components/Achievements';




function App() {
  return (
    <Router>
      <ScrollToTop /> {/* 👈 add this inside Router */}
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<><Home/><Skills/><Achievements/></>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/projects/:id" element={<ProjectDetail/>} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
