import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from '../../contexts/authContext';
import Paths from '../../paths';


const GuardedRoute = (props) => {
    const { isAuthenticated } = useContext(AuthContext);
    if(!isAuthenticated){
        return <Navigate to={Paths.Login} replace />
    }
    
    return <Outlet />;
};

export default GuardedRoute;
