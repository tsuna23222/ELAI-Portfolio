import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Chatbot.css';

const navMap = [
  { keywords: ['about', 'profile', 'who is', 'background', 'bio', 'education'], path: '/about' },
  { keywords: ['project', 'work', 'portfolio', 'game', 'roblox', 'built'], path: '/projects' },
  { keywords: ['contact', 'reach', 'email', 'message', 'hire'], path: '/contact' },
  { keywords: ['home', 'main', 'start'], path: '/' },
];

function detectNav(text) {
  const lower = text.toLowerCase();
  for (const route of navMap) {
    if (route.keywords.some(kw => lower.includes(kw))) {
      return route.path;
    }
  }
  return null;
}

function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: "Hi! I'm Richard's AI assistant. Ask me anything or say 'go to about page' to navigate!" }
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
    setLoading(true);

    // Check navigation intent
    const navPath = detectNav(userText);

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

      if (navPath) {
        setMessages(prev => [...prev, { role: 'bot', text: `Navigating you there now... 🚀` }]);
        setTimeout(() => navigate(navPath), 1000);
      }
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
      {/* Chat button */}
      <button className="chat-fab" onClick={() => setOpen(!open)}>
        {open ? '✕' : '💬'}
      </button>

      {/* Chat window */}
      {open && (
        <div className="chat-window">
          <div className="chat-header">
            <span>Richard's Assistant</span>
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
                <span />
                <span />
                <span />
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

          <div className="chat-footer">Powered by Richard A. Casinillo Jr</div>
        </div>
      )}
    </>
  );
}

export default Chatbot;
