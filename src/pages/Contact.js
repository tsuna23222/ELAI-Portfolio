import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Opens mailto with form data
    const mailto = `mailto:richardcasinillo@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailto;
    setSent(true);
  };

  const socials = [
    { label: 'GitHub', icon: '🐙', url: 'https://github.com/', handle: '@richardcasinillo' },
    { label: 'Facebook', icon: '📘', url: 'https://facebook.com/', handle: 'Richard Casinillo' },
    { label: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/', handle: 'Richard Casinillo' },
  ];

  return (
    <div className="page contact-page">
      <div className="glow-blob" />

      <div className="contact-header">
        <span className="page-label">// get in touch</span>
        <h1 className="page-title">Contact Me</h1>
        <p className="contact-subtitle">Have a question or want to work together? Let's talk!</p>
      </div>

      <div className="contact-grid">

        {/* LEFT — Info + Socials */}
        <div className="contact-left">
          <div className="contact-info-card">
            <h3>Contact Info</h3>
            <div className="info-items">
              <div className="info-item">
                <span className="info-icon">🎓</span>
                <div>
                  <span className="info-label">School</span>
                  <span className="info-value">University of Cebu</span>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">📚</span>
                <div>
                  <span className="info-label">Program</span>
                  <span className="info-value">BS Information Technology</span>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">📍</span>
                <div>
                  <span className="info-label">Location</span>
                  <span className="info-value">Cebu, Philippines</span>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">✉️</span>
                <div>
                  <span className="info-label">Email</span>
                  <span className="info-value">richardcasinillo@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="socials-card">
            <h3>Socials</h3>
            <div className="socials-list">
              {socials.map((s, i) => (
                <a key={i} href={s.url} target="_blank" rel="noreferrer" className="social-item">
                  <span className="social-icon">{s.icon}</span>
                  <div>
                    <span className="social-label">{s.label}</span>
                    <span className="social-handle">{s.handle}</span>
                  </div>
                  <span className="social-arrow">→</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — Form */}
        <div className="contact-right">
          <div className="contact-form-card">
            <h3>Send Me a Message</h3>
            {sent ? (
              <div className="form-success">
                <span>🎉</span>
                <p>Message sent! I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="What's this about?"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    name="message"
                    placeholder="Write your message here..."
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn-submit">
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Contact;
