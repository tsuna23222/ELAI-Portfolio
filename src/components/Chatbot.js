import React, { useEffect } from 'react';

function Chatbot() {
  useEffect(() => {
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
            footer: {
              textColor: "#111118",
              text: "",
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
    };
  }, []);

  return null;
}

export default Chatbot;