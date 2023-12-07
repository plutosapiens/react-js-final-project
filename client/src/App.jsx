import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import * as authService from './services/authService';
import { AuthProvider } from './contexts/authContext';
import Paths from './paths';

import Index from "./components/Index/Index"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import FourOFour from "./components/FourOFour/FourOFour"
import Register from "./components/Register/Register"
import Login from "./components/Login/Login"
import Logout from './components/Logout/Logout';
import AddNew from "./components/AddNew/AddNew"
import Edit from "./components/Edit/Edit"
import Catalog from "./components/Catalog/Catalog"
import Details from './components/Details/Details';
import Users from "./components/Users/Users"



function App() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(() => {
    localStorage.removeItem('accessToken');

    return{};
  });

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
      values.name,
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
    isAuthenticated: !!auth.accessToken,
  };

  return (

      <>
      <AuthProvider value={values} >

      <Header />

      <Routes>
        <Route path={Paths.Home} element={<Index />} />
        <Route path={Paths.Register} element={<Register />} />
        <Route path={Paths.Login} element={<Login />} />
        <Route path={Paths.Logout} element={<Logout />} />
        <Route path={Paths.AddNew} element={<AddNew />} />
        <Route path={Paths.Catalog} element={<Catalog />} />
        <Route path="/items/:itemId" element={<Details />} />
        <Route path={Paths.Edit} element={<Edit />} />
        <Route path={Paths.Users} element={<Users />} />
        <Route path="*" element={<FourOFour />} /> {/* Catch-all route for 404 */}
      </Routes>

      <Footer />
      </AuthProvider>
      </>
  )
}


export default App
