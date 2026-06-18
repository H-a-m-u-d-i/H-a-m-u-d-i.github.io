import React from 'react';
import { ExternalLink, Code, MonitorPlay } from 'lucide-react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Money Map',
    description: 'A comprehensive finance tracking dashboard with complex data handling, interactive charts, and a highly polished dark mode UI.',
    tech: ['React', 'Vite', 'Tailwind', 'Recharts'],
    type: 'Frontend & Analytics',
    color: '#10b981', // Green
    image: '/images/money-map.png',
    live: 'https://money-map-a20a2.web.app/'
  },
  {
    id: 2,
    title: 'Netflix Clone',
    description: 'A full-featured streaming platform clone with dynamic movie categories, API integration for real-time media, and inline trailer playback.',
    tech: ['React', 'TMDB API', 'Styled Components', 'Framer Motion'],
    type: 'Media & API',
    color: '#ef4444', // Red
    image: '/images/netflix-enhanced.png',
    live: 'https://h-a-m-u-d-i.github.io/netflix-clone-deploy/'
  },
  {
    id: 3,
    title: 'Hifz Mastery Engine',
    description: 'A comprehensive Progressive Web App (PWA) designed to systematically test and track Quranic memorization. Built with a robust, crash-free architecture featuring seamless mobile responsiveness.',
    tech: ['React', 'Firebase', 'PWA', 'State Management'],
    type: 'Full Stack App',
    color: '#3b82f6', // Blue
    image: '/images/hifz-tester.png',
    live: 'https://the-hifz-master-quran.web.app/'
  },
  {
    id: 4,
    title: 'To-Do Pro',
    description: 'A powerful task management application featuring recurring tasks, intuitive scheduling, and seamless Firestore integration for real-time data syncing.',
    tech: ['React', 'Firebase', 'Firestore', 'State Management'],
    type: 'Productivity App',
    color: '#8b5cf6', // Purple
    image: '/images/to-do-pro.png',
    live: 'https://to-do-pro-1d219.web.app/'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section container projects-section">
      <div className="section-header">
        <h2 className="section-title">Featured Work</h2>
        <div className="section-line"></div>
      </div>
      
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card glass" style={{ '--project-color': project.color }}>
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-image-overlay"></div>
            </div>
            <div className="project-content">
              <div className="project-top">
                <div className="project-type" style={{ color: project.color }}>{project.type}</div>
                <div className="project-links">
                  {project.live !== '#' && <a href={project.live} target="_blank" rel="noreferrer" className="p-link" aria-label="Live Demo"><ExternalLink size={20} /></a>}
                </div>
              </div>
              
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
