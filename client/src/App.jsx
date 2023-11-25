import { Routes, Route } from 'react-router-dom';

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
  return (

      <>
      <Header />

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addnew" element={<AddNew />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<FourOFour />} /> {/* Catch-all route for 404 */}
      </Routes>

      <Footer />
      </>
  )
}


export default App
