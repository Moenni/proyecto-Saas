import React from 'react';
import './Servicios.css'; // Importa el archivo CSS para estilos

function Servicios(){
    return(
        <section className="servicios">
      <h2>¿Qué ofrecemos?</h2>
      <ul>
        <li><strong>Testing profesional</strong>: detectamos errores antes que tus usuarios.</li>
        <li><strong>Webs responsivas</strong>: diseño adaptado a todos los dispositivos.</li>
        <li><strong>Aplicaciones a medida</strong>: funcionalidad con impacto humano.</li>
      </ul>
    </section>
    );
}
export default Servicios;
