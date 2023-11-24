import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Index from "./components/Index"
import Header from "./components/Header"
import Footer from "./components/Footer"
import FourOFour from "./components/FourOFour"
import Register from "./components/Register"
import Login from "./components/Login"
import AddNew from "./components/AddNew"
import Edit from "./components/Edit"
import Catalog from "./components/Catalog"
import Users from "./components/USers"



function App() {
  return (

      <>
      <Header />
<BrowserRouter>

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
</BrowserRouter>

      <Footer />
      </>
  )
}


export default App
