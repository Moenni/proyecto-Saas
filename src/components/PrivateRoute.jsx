import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function PrivateRoute({ children }) {
  const { user } = useAuth();

  // Si hay usuario, muestra el contenido. Si no, redirige al login.
  return user ? children : <Navigate to="/" />;
}

export default PrivateRoute;