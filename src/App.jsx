import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light-mode');
    } else {
      root.classList.remove('light-mode');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      <div className="bg-gradient"></div>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)' }}>
        <p>© {new Date().getFullYear()} Abdulhamid Ahmed. Built with React & Vite.</p>
      </footer>
    </>
  );
}

export default App;
