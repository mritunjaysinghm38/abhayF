import React, { useContext } from 'react'
import AppContext from './context/AppContext'
import ShowProduct from './components/product/ShowProduct'
import{BrowserRouter as Router,Routes ,Route} from 'react-router-dom'
import ProductDetail from './components/product/ProductDetail'
import Navbar from './components/Navbar'
import Register from './components/user/Register'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/user/Login'
import Profile from './components/user/Profile'
import Cart from './components/Cart'
import Address from './components/Address'
import Cheakout from './components/Cheakout'

const App = () => {
  const {Products} = useContext(AppContext)
  return (
    <Router>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/"element={<ShowProduct/>}/>
        <Route path= "/product/:id" element={<ProductDetail/>}   />
        <Route path= "/register" element={<Register />}   />
        <Route path= "/login" element={<Login />}   />
        <Route path= "/profile" element={<Profile />}   />
        <Route path= "/cart" element={<Cart />}   />
        <Route path= "/shipping" element={<Address />}   />
        <Route path= "/cheakout" element={<Cheakout />}   />

        </Routes>
     </Router>
  )
}

export default App;

