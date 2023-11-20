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

import firebase from './utils/firebase'; // Import the Firebase configuration file



function App() {
  return (
    <>
      <Header />
      <Catalog />
      <AddNew />
      <Users />
      <Footer />
    </>
  )
}

export default App
