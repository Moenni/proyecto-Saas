import React from 'react'; // Importa React para usar JSX
import ReactDOM from 'react-dom/client'; // Para renderizar la app
import App from './App'; // Importa el componente principal
import { AuthProvider } from './contexts/AuthContext'; // Importa el contexto
import './services/mock'; // activa la simulación
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
// Envuelve la app con AuthProvider para manejar autenticación