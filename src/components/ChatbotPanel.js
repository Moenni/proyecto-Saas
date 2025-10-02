import React from 'react';
import './ChatbotPanel.css';

function ChatbotPanel({ visible, onClose }) {
    if(!visible) return null;
    return(
        <div className="chatbot-panel" onClick={(e)=>e.stopPropagation()}>
        <div className="chatbot-header">
           <h3>Asistente Virtual</h3> 
           <button onClick={onClose}>✖</button>
          </div>  
          <div className="chat-body">
            <p>¿En qué puedo ayudarte hoy?</p>
            {}
          </div>
        </div>
    );
}

export default ChatbotPanel;