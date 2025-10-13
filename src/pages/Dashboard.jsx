import {useAuth} from '../contexts/AuthContext';
import {useNavigate} from 'react-router-dom';

function Dashboard(){
    const {user,logout}= useAuth();
    const navigate =useNavigate();

    const handleLogout =()=>{
        logout();
        navigate('/');
    };
return(
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '2rem' }}>
      <h2>Bienvenido, {user?.email}</h2>
      <p>Estás dentro del dashboard privado.</p>
      <button onClick={handleLogout} style={{ marginTop: '1rem' }}>
        Cerrar sesión
      </button>
    </div>

) ;
}
export default Dashboard;