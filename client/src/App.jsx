import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import * as authService from './services/authService';
import AuthContext from './contexts/authContext';
import Paths from './paths';

import Index from "./components/Index/Index"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import FourOFour from "./components/FourOFour/FourOFour"
import Register from "./components/Register/Register"
import Login from "./components/Login/Login"
import AddNew from "./components/AddNew/AddNew"
import Edit from "./components/Edit/Edit"
import Catalog from "./components/Catalog/Catalog"
import Users from "./components/Users/Users"



function App() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({});

  const loginSubmitHandler = async (values) => {
    const result = await authService.login(values.email, values.password);
    
    setAuth(result);

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

      navigate(Paths.Home)
  }

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    username: auth.username,
    email: auth.email,
    isAuthenticated: !!auth.username,
  };

  return (

      <>
      <AuthContext.Provider value={values} >

      <Header />

      <Routes>
        <Route path={Paths.Home} element={<Index />} />
        <Route path={Paths.Register} element={<Register />} />
        <Route path={Paths.Login} element={<Login loginSubmitHandler={loginSubmitHandler} />} />
        <Route path={Paths.AddNew} element={<AddNew />} />
        <Route path={Paths.Edit} element={<Edit />} />
        <Route path={Paths.Catalog} element={<Catalog />} />
        <Route path={Paths.Users} element={<Users />} />
        <Route path="*" element={<FourOFour />} /> {/* Catch-all route for 404 */}
      </Routes>

      <Footer />
      </AuthContext.Provider>
      </>
  )
}


export default App
