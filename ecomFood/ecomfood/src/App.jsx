import React,{useState} from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/Pages/Home/Home";
import Cart from "./Component/Pages/Cart/Cart";
import PlaceOrder from "./Component/Pages/PlaceOrder/PlaceOrder"
import Login from "./Component/LoginPopUp/Login";

function App() {
 
  const [showLogin,setShowLogin]=useState(false)
    
  return (
    <>
     <BrowserRouter>
     {
      showLogin?<Login setShowLogin={setShowLogin}/>:<></>
     }
     <Navbar setShowLogin={setShowLogin} />
     <Routes>
      <Route path="/" element={<Home/>} />
       <Route path="/cart" element={<Cart/>} />
        <Route path="/order" element={<PlaceOrder/>} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
