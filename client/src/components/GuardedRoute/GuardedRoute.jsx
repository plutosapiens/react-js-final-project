import { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import AuthContext from '../../contexts/authContext';
import Paths from '../../paths';


const GuardedRoute = ({ children }) => {
    const { isAuthenticated } = useContext(AuthContext);
    console.log(isAuthenticated)
    if(!isAuthenticated){
        return <Navigate to={Paths.Login} replace />
    }
    
    return children;
};

export default GuardedRoute;
