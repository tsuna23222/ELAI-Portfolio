import React from 'react';
import './About.css';

function About() {
  const skills = [
    { name: 'Basic Programming', level: 70, icon: '💻' },
    { name: 'Lua Scripting', level: 75, icon: '🎮' },
    { name: 'Roblox Studio', level: 80, icon: '🏗️' },
    { name: 'AI Prompt Engineering', level: 60, icon: '🤖' },
    { name: 'Game Design', level: 72, icon: '🎲' },
  ];

  return (
    <div className="page about-page">
      <div className="glow-blob" />

      <div className="about-header">
        <span className="page-label">// about me</span>
        <h1 className="page-title">Who I Am</h1>
      </div>

      <div className="about-grid">
        <div className="about-bio">
          <div className="bio-card">
            <div className="bio-avatar">
              <img src="/richard.jpg" alt="Richard Casinillo" />
            </div>
            <div className="bio-info">
              <h2>Richard Casinillo</h2>
              <p className="bio-role">BSIT Student & Game Developer</p>
              <p className="bio-school">🏫 University of Cebu</p>
            </div>
          </div>

          <p className="bio-text">
            I'm a BS Information Technology student at the University of Cebu with a passion for 
            game development and artificial intelligence. I create immersive Roblox games using 
            Lua scripting and constantly push the boundaries of what's possible with AI prompt engineering.
          </p>

          <p className="bio-text">
            When I'm not coding games or experimenting with AI, I'm learning new technologies 
            and exploring creative ways to merge gaming and artificial intelligence.
          </p>

          <div className="bio-details">
            <div className="detail-item">
              <span className="detail-label">Degree</span>
              <span className="detail-value">BS Information Technology</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">School</span>
              <span className="detail-value">University of Cebu</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Status</span>
              <span className="detail-value status-active">Currently Enrolled</span>
            </div>
          </div>
        </div>

        <div className="about-skills">
          <h3 className="skills-title">Skills & Tools</h3>
          <div className="skills-list">
            {skills.map((skill, i) => (
              <div key={i} className="skill-item" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="skill-header">
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-pct">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-fill"
                    style={{ '--width': `${skill.level}%`, animationDelay: `${i * 0.15}s` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="interests">
            <h3 className="skills-title">Interests</h3>
            <div className="interest-tags">
              {['Game Development', 'Roblox', 'Lua', 'AI/ML', 'Prompt Engineering', 'Programming', 'Technology'].map((tag, i) => (
                <span key={i} className="interest-tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
