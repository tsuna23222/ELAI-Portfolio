import React, { useEffect } from 'react';

function Chatbot() {
  useEffect(() => {
    // Load Flowise chatbot script
    const script = document.createElement('script');
    script.type = 'module';
    script.innerHTML = `
      import Chatbot from "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js";
      Chatbot.init({
        chatflowid: "YOUR_CHATFLOW_ID",
        apiHost: "https://flowise-production-61a0.up.railway.app",
        theme: {
          button: {
            backgroundColor: "#00ff88",
            right: 20,
            bottom: 20,
            size: 52,
            iconColor: "#0a0a0f",
          },
          chatWindow: {
            welcomeMessage: "Hi! I'm Richard's AI assistant. Ask me anything about him!",
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
          },
        },
      });
    `;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}

export default Chatbot;
