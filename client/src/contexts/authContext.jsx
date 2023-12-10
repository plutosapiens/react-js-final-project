import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { registerValidation, loginValidation } from '../utils/validation';
import * as authService from '../services/authService';
import usePersistedState from '../hooks/usePersistedState';
import Paths from "../paths";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const navigate = useNavigate();
    const [auth, setAuth] = usePersistedState('auth', {});
    const [errors, setErrors] = useState();
    
    const [errorMessages, setErrorMessages] = useState({}); // New state to manage error messages

    const loginSubmitHandler = async (values) => {
      try{
        setErrorMessages({});
        const validationErrors = loginValidation(values);

        if(Object.keys(validationErrors).length > 0) {
          setErrorMessages(validationErrors);
          throw new Error('Login faied!');
        }

        const result = await authService.login(values.email, values.password);
        
        setAuth(result);
    
        localStorage.setItem('accessToken', result.accessToken);
        navigate(Paths.Home);
      }catch(error) {
        console.error('Login failed:', error);
      }
    }
    
      const registerSubmitHandler = async (values) => {
        try{
          setErrors({});
          const validationErrors = registerValidation(values);

          if(Object.keys(validationErrors).length > 0){
            throw validationErrors
            // return setErrors(state => ({...state, validationErrors}));
          }

        const result = await authService.register(
          values.email,
          values.password,
          values.username,
          values.avatar
          );
    
          setAuth(result);
    
          localStorage.setItem('accessToken', result.accessToken);
          navigate(Paths.Home)

          if(!Response.ok) {
            setErrors(state => ({...state, registerError: Response.message}));
          }
      }
    catch(error) {
      console.error('Register failed:', error);
    }
  }
    
      const logoutHandler = () => {
        setAuth({});
        localStorage.removeItem('accessToken');
      }
    
      const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        errorMessages,
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