import React from 'react';
import './Contacto.css';

function Contacto() {
    return(
        <section className="contacto">
            <h2>Consultanos</h2>
            <form>
                <input type="text" placeholder='Escribe tu nombre aquí' required></input>
                <input type="email" placeholder='Escribe tu email aquí' required></input>
                <textarea placeholder='¿que servicio necesitás?' required></textarea>
                <button type="submit">Envía tu consulta</button>
            </form>
        </section>
    );
}
export default Contacto;