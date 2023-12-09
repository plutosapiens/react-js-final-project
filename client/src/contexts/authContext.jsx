import { createContext } from "react";
import { useNavigate } from "react-router-dom";

import * as authService from '../services/authService';
import usePersistedState from '../hooks/usePersistedState';
import Paths from "../paths";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const navigate = useNavigate();
    const [auth, setAuth] = usePersistedState('auth', {});
    const loginSubmitHandler = async (values) => {
        const result = await authService.login(values.email, values.password);
        
        setAuth(result);
    
        localStorage.setItem('accessToken', result.accessToken);
        navigate(Paths.Home);
      };
    
      const registerSubmitHandler = async (values) => {
        const result = await authService.register(
          values.email,
          values.password,
          values.username,
          values.avatar
          );
    
          setAuth(result);
    
          localStorage.setItem('accessToken', result.accessToken);
          navigate(Paths.Home)
      }
    
      const logoutHandler = () => {
        setAuth({});
        localStorage.removeItem('accessToken');
      }
    
      const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        username: auth.username || auth.email,
        email: auth.email,
        userId: auth._id,
        isAuthenticated: !!auth.accessToken,
      };
    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;