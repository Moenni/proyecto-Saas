import React, { useState } from 'react';
import './ChatbotPanel.css';

function ChatbotPanel({ visible, onClose }) {
  const [mensaje, setMensaje] = useState('');
  const [respuesta, setRespuesta] = useState('');

  const responder = (texto) => {
    const lower = texto.toLowerCase();

    if (lower.includes('automatización')) {
      return "Conectamos procesos con n8n y APIs para que tu narrativa fluya sin fricción.";
    } else if (lower.includes('testing')) {
      return "Detectamos errores antes que tus usuarios, cuidando la experiencia desde el inicio.";
    } else if (lower.includes('ia')) {
      return "Integramos IA con ética, para respuestas personalizadas y respetuosas.";
   
    }else if (lower.includes('frontend')){
      return "Creamos interfaces intuitivas y atractivas que cautivan a tus usuarios desde el primer clic.";
    }else if (lower.includes('backend')){
      return "Desarrollamos sistemas robustos y escalables que garantizan el rendimiento y la seguridad de tus aplicaciones.";
     } else {
      return "Podés preguntarme sobre automatización, testing, IA o cualquier servicio que te interese.";
     }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const r = responder(mensaje);
    setRespuesta(r);
    setMensaje('');
  };

  if (!visible) return null;

  return (
    <div className="chatbot-panel" onClick={(e) => e.stopPropagation()}>
      <div className="chatbot-header">
        <h3>Asistente Ético</h3>
        <button onClick={onClose}>✖</button>
      </div>
      <div className="chatbot-body">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            placeholder="Escribí tu pregunta..."
          />
          <button type="submit">Enviar</button>
        </form>
        {respuesta && <p className="respuesta">{respuesta}</p>}
      </div>
    </div>
  );
}

export default ChatbotPanel;