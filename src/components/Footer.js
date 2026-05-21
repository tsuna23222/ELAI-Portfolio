import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const socials = [
    { label: 'GitHub', icon: '🐙', url: 'https://github.com/tsuna23222' },
    { label: 'Facebook', icon: '📘', url: 'https://www.facebook.com/RichardPH11' },
    { label: 'Twitter / X', icon: '🐦', url: 'https://x.com/richard69605781' },
  ];

  return (
    <footer className="footer">
      <div className="footer-inner">

        <div className="footer-brand">
          <span className="footer-logo"><span className="lb">[</span>RC<span className="lb">]</span></span>
          <p className="footer-tagline">BSIT Student · Game Dev · AI Enthusiast</p>
          <p className="footer-school">📍 University of Cebu, Philippines</p>
        </div>

        <div className="footer-links">
          <span className="footer-section-label">Navigation</span>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-socials">
          <span className="footer-section-label">Socials</span>
          {socials.map((s, i) => (
            <a key={i} href={s.url} target="_blank" rel="noreferrer" className="footer-social">
              <span>{s.icon}</span> {s.label}
            </a>
          ))}
        </div>

      </div>

      <div className="footer-bottom">
        <span>© 2025 <strong>Richard A. Casinillo Jr</strong>. All rights reserved.</span>
        <span className="footer-credit">Built with React & Flowise AI</span>
      </div>
    </footer>
  );
}

export default Footer;
