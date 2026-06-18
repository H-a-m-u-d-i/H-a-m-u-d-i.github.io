import React from 'react';
import { Sun, Moon } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className="navbar glass">
      <div className="container nav-container">
        <a href="#" className="nav-logo">
          {/* Initials monogram - clean, professional alternative to full name */}
          <div className="logo-monogram">AA</div>
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact" className="btn btn-outline nav-btn">Contact</a>

          {/* Theme Toggle */}
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
