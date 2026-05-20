import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Chatbot() {
  const navigate = useNavigate();

  useEffect(() => {
    const navMap = [
      { keywords: ['about', 'profile', 'who is', 'background', 'bio'], path: '/about' },
      { keywords: ['project', 'work', 'portfolio', 'game', 'roblox', 'built'], path: '/projects' },
      { keywords: ['contact', 'reach', 'email', 'message', 'hire'], path: '/contact' },
      { keywords: ['home', 'main', 'start', 'back'], path: '/' },
    ];

    const observer = new MutationObserver(() => {
      const chatbot = document.querySelector('flowise-chatbot');
      const shadow = chatbot?.shadowRoot;
      const sendBtn = shadow?.querySelector('button[type="submit"], button.send-button');
      const chatInput = shadow?.querySelector('input, textarea');

      if (chatInput && !chatInput._navListenerAdded) {
        chatInput._navListenerAdded = true;
        chatInput.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            const text = chatInput.value.toLowerCase();
            for (const route of navMap) {
              if (route.keywords.some(kw => text.includes(kw))) {
                setTimeout(() => navigate(route.path), 1200);
                break;
              }
            }
          }
        });
      }

      if (sendBtn && !sendBtn._navListenerAdded) {
        sendBtn._navListenerAdded = true;
        sendBtn.addEventListener('click', () => {
          const chatInput2 = shadow?.querySelector('input, textarea');
          const text = (chatInput2?.value || '').toLowerCase();
          for (const route of navMap) {
            if (route.keywords.some(kw => text.includes(kw))) {
              setTimeout(() => navigate(route.path), 1200);
              break;
            }
          }
        });
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    const script = document.createElement('script');
    script.type = 'module';
    script.innerHTML = `
      import Chatbot from "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js";
      Chatbot.init({
        chatflowid: "1336c23f-f1a1-422c-ae0c-30983fc0f020",
        apiHost: "https://flowise-production-0d82.up.railway.app",
        theme: {
          button: {
            backgroundColor: "#00ff88",
            right: 20,
            bottom: 20,
            size: 52,
            iconColor: "#0a0a0f",
          },
          chatWindow: {
            showTitle: true,
            title: "Richard's Assistant",
            welcomeMessage: "Hi! I'm Richard's AI assistant. Try asking me to go to the About, Projects, or Contact page!",
            backgroundColor: "#111118",
            height: 520,
            width: 380,
            fontSize: 14,
            botMessage: {
              backgroundColor: "#1a1a24",
              textColor: "#e8e8f0",
            },
            userMessage: {
              backgroundColor: "#00ff88",
              textColor: "#0a0a0f",
            },
            textInput: {
              placeholder: "Ask me about Richard...",
              backgroundColor: "#1a1a24",
              textColor: "#e8e8f0",
              sendButtonColor: "#00ff88",
            },
            footer: {
              textColor: "#888",
              text: "Powered by Richard A. Casinillo Jr",
              company: "",
              companyLink: "",
            },
          },
        },
      });
    `;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      observer.disconnect();
    };
  }, [navigate]);

  return null;
}

export default Chatbot;