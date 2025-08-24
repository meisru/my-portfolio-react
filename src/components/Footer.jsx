import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Portfolio</h3>
            <p>
              A passionate developer creating beautiful and functional digital experiences.
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Connect</h4>
            <ul className="footer-links">
              <li><a href="https://github.com/meisru" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/rudi-aleidan-9a479b2b0/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="mailto:rudialeidan@gmail.com">Email</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Let's Work Together</h4>
            <p>Ready to start your next project? Let's create something amazing together!</p>
            <button 
              className="btn btn-primary footer-cta-btn"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </button>
            <div className="footer-contact-info">
              <p>📍 Saudi Arabia</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} Rudi. All rights reserved.</p>
          </div>
          <div className="footer-credits">
            <p>Built with ❤️ using React</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer