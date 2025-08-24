import React from 'react'

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend Development',
      skills: [
        { name: 'HTML/CSS', level: 85 },
        { name: 'JavaScript', level: 75 },
        { name: 'TypeScript', level: 70 },
        { name: 'React', level: 70 }      ]
    },
    {
      category: 'Backend & Tools',
      skills: [
        { name: 'Node.js & Express', level: 65 },
        { name: 'Git & GitHub', level: 80 },
        { name: 'PostgreSQL', level: 65 },
        { name: 'Docker', level: 30 }
      ]
    },
    {
      category: 'Mobile Development',
      skills: [
        { name: 'Swift (iOS)', level: 40 },
        { name: 'Xcode', level: 30 }
      ]
    }
  ]

  const otherSkills = [
    'RESTful APIs',
    'Jasmine Framework',
    'Postman',
    'Basic Data Analysis (Python/Excel)',
    'Figma'
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </div>

        <div className="skills-content">
          <div className="skills-categories">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="skill-category">
                <h3 className="category-title">{category.category}</h3>
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="other-skills">
            <h3>Other Skills & Technologies</h3>
            <div className="skills-tags">
              {otherSkills.map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="skills-summary">
            <div className="summary-card">
              <h4>Continuous Learning</h4>
              <p>
                I'm always exploring new technologies and best practices to stay current 
                with industry trends and deliver cutting-edge solutions.
              </p>
            </div>
            <div className="summary-card">
              <h4>Problem Solving</h4>
              <p>
                I enjoy tackling complex challenges and finding elegant solutions that 
                balance functionality, performance, and user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
