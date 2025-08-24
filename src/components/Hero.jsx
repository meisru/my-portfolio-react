import React, { useState, useEffect } from 'react'

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  const texts = [
    "Web Developer",
    "Problem Solver",
    "Creative Thinker",
    "Mobile Apps Developer"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % texts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [texts.length])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleResumeDownload = async () => {
    try {
      const response = await fetch('/resume.pdf')
      
      if (response.ok) {
        // File exists, proceed with download
        const blob = await response.blob()
        const url = window.URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = 'Rudi_Aleidan_Resume.pdf'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        window.URL.revokeObjectURL(url)
      } else {
        // File doesn't exist, show fallback message
        alert('Resume file not found. Please contact me directly for a copy.')
      }
    } catch (error) {
      console.error('Resume download error:', error)
      // Fallback: open email client
      window.location.href = 'mailto:rudialeidan@gmail.com?subject=Resume Request&body=Hi Rudi, I would like to request a copy of your resume. Thank you!'
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Rudi</span>
          </h1>
          <h2 className="hero-subtitle">
            I'm a <span className="typing-text">{texts[currentTextIndex]}</span>
            <span className="cursor">|</span>
          </h2>
          <p className="hero-description">
            Passionate about creating beautiful, functional, and user-centered digital experiences. 
            Let's build something amazing together!
          </p>
          
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </button>
            <button 
              className="btn btn-resume"
              onClick={handleResumeDownload}
            >
              📄 Download Resume
            </button>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="hero-avatar">
            <div className="avatar-placeholder">
              <span>👩🏻‍💻</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
        <span>Scroll Down</span>
      </div>
    </section>
  )
}

export default Hero