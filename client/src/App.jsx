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

  return (

      <>
      <AuthContext.Provider value={{ loginSubmitHandler }} >

      <Header />

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login loginSubmitHandler={loginSubmitHandler} />} />
        <Route path="/addnew" element={<AddNew />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<FourOFour />} /> {/* Catch-all route for 404 */}
      </Routes>

      <Footer />
      </AuthContext.Provider>
      </>
  )
}


export default App
