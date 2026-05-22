import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Chatbot.css';

const navMap = [
  { keywords: ['go to about', 'about page', 'navigate to about', 'show about'], path: '/about', label: 'About' },
  { keywords: ['go to project', 'project page', 'navigate to project', 'show project'], path: '/projects', label: 'Projects' },
  { keywords: ['go to game', 'games page', 'navigate to game', 'show games', 'game created'], path: '/games', label: 'Games' },
  { keywords: ['go to contact', 'contact page', 'navigate to contact', 'show contact'], path: '/contact', label: 'Contact' },
  { keywords: ['go home', 'home page', 'go to home', 'main page'], path: '/', label: 'Home' },
];

function detectNav(text) {
  const lower = text.toLowerCase();
  for (const route of navMap) {
    if (route.keywords.some(kw => lower.includes(kw))) {
      return route;
    }
  }
  return null;
}

function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: "Hi! I'm Richard's AI assistant. Ask me anything or say 'go to games page' to navigate!" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    const userText = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);

    // Check navigation intent FIRST before anything else
    const navRoute = detectNav(userText);
    if (navRoute) {
      setMessages(prev => [...prev, {
        role: 'bot',
        text: `Sure! Taking you to the ${navRoute.label} page now... 🚀`
      }]);
      setTimeout(() => navigate(navRoute.path), 800);
      return;
    }

    // No navigation — call Flowise API
    setLoading(true);
    try {
      const res = await fetch(
        'https://flowise-production-0d82.up.railway.app/api/v1/prediction/1336c23f-f1a1-422c-ae0c-30983fc0f020',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ question: userText }),
        }
      );
      const data = await res.json();
      const botReply = data.text || data.answer || "I'm not sure, try asking something else!";
      setMessages(prev => [...prev, { role: 'bot', text: botReply }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'bot', text: "Oops! Something went wrong. Please try again." }]);
    }
    setLoading(false);
  };

  const handleKey = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <>
      <button className="chat-fab" onClick={() => setOpen(!open)}>
        {open ? '✕' : '💬'}
      </button>

      {open && (
        <div className="chat-window">
          <div className="chat-header">
            <button onClick={() => setOpen(false)}>✕</button>
          </div>

          <div className="chat-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-msg ${msg.role}`}>
                {msg.text}
              </div>
            ))}
            {loading && (
              <div className="chat-msg bot typing">
                <span /><span /><span />
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div className="chat-input-row">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask me about Richard..."
            />
            <button onClick={sendMessage} disabled={loading}>➤</button>
          </div>

          <div className="chat-footer">Powered by <span className="chat-footer-link" onClick={() => { navigate('/'); setOpen(false); }}>Richard A. Casinillo Jr</span></div>
        </div>
      )}
    </>
  );
}

export default Chatbot;
