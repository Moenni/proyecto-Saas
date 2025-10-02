import React from 'react';
import './ChatbotToggle.css';

function ChatbotToggle({ onToggle }) {
    return(
        <button className="chatbot-toggle" onClick={onToggle}>
           💬
 
        </button>
    );
}
export default ChatbotToggle;