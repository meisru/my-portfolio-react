import React from 'react'

const About = () => {
  const stats = [
    { number: '10+', label: 'Personal Projects' },
    { number: '10+', label: 'Technologies Learned' },
    { number: '100%', label: 'Eagerness to Learn' },
    { number: '∞', label: 'Curiosity & Growth' }
  ]

  const experiences = [
    {
      year: '2025',
      title: 'Software & Data Intern',
      company: 'Itmam Center For Developers Services –– Qassim Municipality',
      description: 'Developed and maintained web features with HTML, CSS, and JavaScript, and performed data analysis using Python to provide actionable insights.'
    }
    // hopefully more to come :)
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>Who I Am</h3>
            <p>
              I'm a passionate and creative full stack developer with a love for building 
              beautiful, functional, and user-centered digital experiences. Driven by my love for 
              web & mobile development, I've had the privilege of working on a variety of projects that have 
              shaped my skills and passion for creating exceptional user experiences.
            </p>
            
            <p>
              My journey in development started with a curiosity about how websites work, 
              which quickly evolved into a passion for creating them. I believe that great design 
              is not just about aesthetics, but about creating intuitive and accessible experiences 
              that users love to interact with.
            </p>

            <div className="about-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-experience">
            <h3>My Experience</h3>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="timeline-year">{exp.year}</div>
                    <h4 className="timeline-title">{exp.title}</h4>
                    <div className="timeline-company">{exp.company}</div>
                    <p className="timeline-description">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
