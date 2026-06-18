import React from 'react';
import { Layout, Server, Wrench } from 'lucide-react';
import './Skills.css';

const skillCategories = [
  {
    title: 'Frontend Engine',
    icon: <Layout className="skill-icon" size={24} color="#3b82f6" />,
    skills: ['React & Next.js', 'Vite', 'Tailwind CSS', 'Framer Motion', 'UI/UX Design']
  },
  {
    title: 'Backend & Architecture',
    icon: <Server className="skill-icon" size={24} color="#10b981" />,
    skills: ['Java & Spring Boot', 'REST APIs', 'Node.js', 'Firebase & Firestore', 'Microservices']
  },
  {
    title: 'Testing & DevOps',
    icon: <Wrench className="skill-icon" size={24} color="#f59e0b" />,
    skills: ['JUnit 5 & Mockito', 'Testcontainers', 'Docker', 'CI/CD Pipelines', 'E2E Testing']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section container skills-section">
      <div className="section-header">
        <h2 className="section-title">Technical Expertise</h2>
        <div className="section-line"></div>
      </div>
      
      <div className="skills-layout">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category-card glass">
            <div className="skill-category-header">
              {category.icon}
              <h3 className="category-title">{category.title}</h3>
            </div>
            <ul className="slick-skills-list">
              {category.skills.map((skill, i) => (
                <li key={i} className="slick-skill-item">
                  <span className="skill-bullet"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
