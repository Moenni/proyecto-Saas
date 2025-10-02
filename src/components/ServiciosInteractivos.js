import React, { useState, useEffect, useRef } from 'react';
import './ServiciosInteractivos.css';

function ServiciosInteractivos() {
  const [activo, setActivo] = useState(null);
  const [desapareciendo,setDesapareciendo]= useState(false);
  const wrapperRef = useRef(null);

  const servicios = {
    testing: "Detectamos errores antes que tus usuarios.",
    automatizaciones: "Conectamos procesos con n8n y APIs.",
    frontend: "Diseño visual moderno y responsivo.",
    backend: "Lógica robusta y escalable.",
    ia: "Integración de IA para respuestas éticas y personalizadas."
  };

  useEffect(() => {
  const cerrarDescripcion = () => {
    if (activo) {
      setDesapareciendo(true);
      setTimeout(() => {
        setActivo(null);
        setDesapareciendo(false);
      }, 300);
    }
  };

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      cerrarDescripcion();
    }
  };

  document.addEventListener("click", handleClickOutside);
  return () => {
    document.removeEventListener("click", handleClickOutside);
  };
}, [activo]);

  return (
    <div className="servicios-int" ref={wrapperRef}>
      <h2>Servicios</h2>
      <div className="botones">
        {Object.keys(servicios).map((key) => (
          <button
            key={key}
            className={activo === key ? 'activo' : ''}
            onClick={(event) => {
            event.stopPropagation();
            setActivo(key);
            setDesapareciendo(false);
}}
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </button>
        ))}
      </div>
      {activo && (
  <p className={`descripcion ${desapareciendo ? 'fade-out' : 'fade-in'}`}>
    {servicios[activo]}
  </p>
)}
    </div>
  );
}

export default ServiciosInteractivos;