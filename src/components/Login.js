import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Iniciar sesión</h2>
        <form>
          <input type="email" placeholder="Correo electrónico" required />
          <input type="password" placeholder="Contraseña" required />
          <button type="submit">Ingresar</button>
        </form>
        <p className="registro">¿No tenés cuenta? <a href="#">Registrate</a></p>
      </div>
    </div>
  );
}

export default Login;