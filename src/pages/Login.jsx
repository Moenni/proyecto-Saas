import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { loginUser } from '../services/api'; // Servicio que conecta con la API
import { useNavigate } from 'react-router-dom'; // Para redirigir después del login

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser({ email, password }); // Llama a la API o mock
      login(response.data); // Guarda el usuario en contexto
      navigate('/dashboard'); // Redirige al dashboard
    } catch (error) {
      alert('Login fallido: ' + (error.response?.data?.message || 'Error desconocido'));
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '2rem' }}>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="ejemplo@correo.com"
          required
        />

        <label>Contraseña:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="********"
          required
        />

        <button type="submit" style={{ marginTop: '1rem' }}>Ingresar</button>
      </form>
    </div>
  );
}

export default Login;