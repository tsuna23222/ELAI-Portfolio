import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: 'Roblox Game Development',
      desc: 'Designed and developed interactive Roblox games using Lua scripting. Built custom game mechanics, physics interactions, and immersive game environments in Roblox Studio.',
      tags: ['Lua', 'Roblox Studio', 'Game Design', 'Scripting'],
      icon: '🎮',
      status: 'Active',
    },
    {
      title: 'AI Prompt Engineering',
      desc: 'Exploring and experimenting with AI language models through creative prompt engineering. Developing skills in crafting effective prompts for various AI applications.',
      tags: ['AI', 'Prompt Engineering', 'NLP', 'ChatGPT'],
      icon: '🤖',
      status: 'Learning',
    },
    {
      title: 'Portfolio Chatbot (RAG)',
      desc: 'Built a Retrieval-Augmented Generation chatbot using Flowise and Google Gemini API. The chatbot answers questions about my profile and navigates visitors to relevant pages.',
      tags: ['Flowise', 'RAG', 'Gemini API', 'AI'],
      icon: '💬',
      status: 'Completed',
    },
  ];

  return (
    <div className="page projects-page">
      <div className="glow-blob2" />

      <div className="projects-header">
        <span className="page-label">// my work</span>
        <h1 className="page-title">Projects</h1>
        <p className="projects-subtitle">
          Things I've built, explored, and experimented with.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <div
            key={i}
            className="project-card"
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            <div className="project-top">
              <span className="project-icon">{project.icon}</span>
              <span className={`project-status status-${project.status.toLowerCase()}`}>
                {project.status}
              </span>
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.desc}</p>
            <div className="project-tags">
              {project.tags.map((tag, j) => (
                <span key={j} className="project-tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
