import React, { useState } from 'react'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile Apps' }
  ]

  const projects = [
    {
      id: 1,
      title: 'StoreFront Backend',
      category: 'web',
      image: '🛒',
      description: 'A backend service for an e-commerce platform. It provides a RESTful API to manage users, products, and orders.',
      technologies: ['Node.js', 'Express', 'TypeScript', 'PostgreSQL', 'Docker'],
      liveUrl: null, 
      githubUrl: 'https://github.com/meisru/StoreFront-Backend',
      featured: true
    },
    {
      id: 2,
      title: 'Tadabur',
      category: 'mobile',
      image: '📿',
      description: 'Swift-based iOS application that allows users to explore the Qur’an, while writing and saving personal reflections (تدبرات).',
      technologies: ['Swift', 'SwiftUI', 'Core Data', 'API integration'],
      liveUrl: null, 
      githubUrl: null,
      featured: false
    },
    {
      id: 3,
      title: 'AI Book Recommendations',
      category: 'web',
      image: '📚',
      description: 'A web app that calls an AI model to recommend books based on preferred genres and previously liked books.',
      technologies: ['React', 'Vite', 'Express', 'Claude'],
      liveUrl: null,
      githubUrl: 'https://github.com/meisru/book-recs',
      featured: false
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      category: 'web',
      image: '🌤️',
      description: 'A weather dashboard that displays current weather conditions and temperature chart using weather API.',
      technologies: ['React', 'OpenWeather API', 'Chart.js'],
      liveUrl: null,
      githubUrl: 'https://github.com/meisru/weather-dashboard',
      featured: false
    }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">Some of my recent work</p>
        </div>

        <div className="projects-filters">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className={`project-card ${project.featured ? 'featured' : ''}`}>
              <div className="project-image">
                <div className="project-emoji">{project.image}</div>
                {project.featured && <span className="featured-badge">Featured</span>}
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  {project.liveUrl && (
                    <a href={project.liveUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                      <span>Live Demo</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15,3 21,3 21,9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  )}
                  <a href={project.githubUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                    <span>View Code</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <p>Interested in working together?</p>
          <button className="btn btn-primary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
            Let's Talk
          </button>
        </div>
      </div>
    </section>
  )
}

export default Projects