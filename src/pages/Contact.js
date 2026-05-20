import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="page contact-page">
      <div className="glow-blob" />

      <div className="contact-header">
        <span className="page-label">// get in touch</span>
        <h1 className="page-title">Contact</h1>
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          <p className="contact-intro">
            I'm currently a BSIT student at the University of Cebu, 
            open to collaborations, game dev projects, and AI experiments. 
            Feel free to reach out!
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-icon">🏫</span>
              <div>
                <span className="contact-label">School</span>
                <span className="contact-value">University of Cebu</span>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📚</span>
              <div>
                <span className="contact-label">Program</span>
                <span className="contact-value">BS Information Technology</span>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">🎮</span>
              <div>
                <span className="contact-label">Specialty</span>
                <span className="contact-value">Roblox Game Development</span>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">🤖</span>
              <div>
                <span className="contact-label">Interest</span>
                <span className="contact-value">AI & Prompt Engineering</span>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-cta">
          <div className="cta-card">
            <div className="cta-icon">💬</div>
            <h3>Chat with my AI Assistant</h3>
            <p>Ask the chatbot anything about me — my skills, projects, background, or education!</p>
            <div className="cta-hint">
              <span>Try asking:</span>
              <div className="cta-examples">
                <span>"What are Richard's skills?"</span>
                <span>"Tell me about his projects"</span>
                <span>"Where does he study?"</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
