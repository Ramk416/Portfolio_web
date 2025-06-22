import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import ScrollToTop from './components/ScrollToTop'; 
import Achievements from './components/Achievements';
import Contact from './components/Contact';


function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<><Home /><Skills /><Achievements /><Contact /></>} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
