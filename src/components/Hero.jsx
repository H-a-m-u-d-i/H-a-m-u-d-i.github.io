import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';

import './Hero.css';

const Hero = () => {
  return (
    <section id="about" className="hero section container">
      <div className="hero-content">
        <p className="hero-greeting">Hello, I'm</p>
        <h1 className="hero-name">Abdulhamid Ahmed,</h1>
        <p className="hero-role">a Full Stack <span className="highlight-role">Web Developer</span></p>
        <p className="hero-subtitle">
          I specialize in building beautiful, high-performance, and scalable web applications. 
          With a strong foundation in modern frontend architectures and robust backend systems, 
          I transform complex requirements into seamless, intuitive digital experiences that users love.
        </p>
        
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            View My Work <ArrowRight size={18} />
          </a>
          <div className="hero-socials">
            <a href="https://github.com/H-a-m-u-d-i" target="_blank" rel="noreferrer" aria-label="GitHub" className="social-link"><FaGithub size={24} /></a>
            <a href="https://www.linkedin.com/in/abdulhamid-ahmed-98a985286/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-link"><FaLinkedin size={24} /></a>
            <a href="https://t.me/hami_du" target="_blank" rel="noreferrer" aria-label="Telegram" className="social-link"><FaTelegram size={24} /></a>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="hero-decoration">
        <div className="glass code-card floating-slow">
          <pre>
            <code>
              <span className="code-keyword">const</span> <span className="code-variable">developer</span> = {'{'}
              <br/>
              &nbsp;&nbsp;name: <span className="code-string">'Abdulhamid Ahmed'</span>,
              <br/>
              &nbsp;&nbsp;skills: [<span className="code-string">'React'</span>, <span className="code-string">'Spring Boot'</span>],
              <br/>
              &nbsp;&nbsp;passion: <span className="code-string">'Clean Code'</span>
              <br/>
              {'}'};
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
};

export default Hero;
