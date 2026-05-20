import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="page home-page">
      <div className="glow-blob" />
      <div className="glow-blob2" />

      <div className="home-content">
        <div className="home-tag">
          <span className="tag-dot" />
          Available for opportunities
        </div>

        <h1 className="home-title">
          <span className="title-line">Richard</span>
          <span className="title-line accent">Casinillo</span>
        </h1>

        <p className="home-subtitle">
          BSIT Student <span className="divider">·</span> Roblox Game Dev <span className="divider">·</span> AI Enthusiast
        </p>

        <p className="home-desc">
          A passionate BS Information Technology student at the{' '}
          <span className="highlight">University of Cebu</span>, building Roblox games with Lua and exploring the frontiers of AI prompt engineering.
        </p>

        <div className="home-actions">
          <Link to="/projects" className="btn-primary">View Projects</Link>
          <Link to="/about" className="btn-secondary">About Me</Link>
        </div>

        <div className="home-stats">
          <div className="stat">
            <span className="stat-num">UC</span>
            <span className="stat-label">University of Cebu</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">BSIT</span>
            <span className="stat-label">Degree Program</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">3+</span>
            <span className="stat-label">Skills & Tools</span>
          </div>
        </div>
      </div>

      <div className="home-grid-decoration">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="grid-cell" style={{ animationDelay: `${i * 0.1}s` }} />
        ))}
      </div>
    </div>
  );
}

export default Home;
