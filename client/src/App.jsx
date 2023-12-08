import {  Routes, Route } from 'react-router-dom';

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
import Favourites from "./components/Favourites/Favourites"
import GuardedRoute from './components/GuardedRoute/GuardedRoute';

function App() {
  return (

      <>
      <AuthProvider>

      <Header />

      <Routes>
        <Route path={Paths.Home} element={<Index />} />
        <Route
        path={Paths.Register}
        element={
          <GuardedRoute>
            <Register />
          </GuardedRoute>
        } />
        <Route
        path={Paths.Login}
        element={
          <GuardedRoute>
            <Login />
          </GuardedRoute>
        } />
        <Route path={Paths.Logout} element={<Logout />} />
        <Route path={Paths.AddNew} element={<AddNew />} />
        <Route path={Paths.Catalog} element={<Catalog />} />
        <Route path="/items/:itemId" element={<Details />} />
        <Route path={Paths.Edit} element={<Edit />} />
        <Route path={Paths.Favourites} element={<Favourites />} />
        <Route path="*" element={<FourOFour />} /> {/* Catch-all route for 404 */}
      </Routes>

      <Footer />
      </AuthProvider>
      </>
  )
}


export default App


