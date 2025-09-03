import React from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Navbar from "./Component/Navbar";
import Jobs from "./Component/Jobs";
import DevJob from "./Component/DevJob";
import Tester from "./Component/Tester";
import Design from "./Component/Design";
import Admin from "./Component/Admin";
import Login from "./Component/Login";
import Signup from "./Component/Signup";
import Cart from "./Component/Cart";


function App() {


  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />


        <Route path="/jobs" element={<Jobs/>}>
         
         <Route path="dev" element={<DevJob/>} />
         <Route index element={<Tester/>} />
         <Route path="design" element={<Design/>} />
        
        </Route>

        <Route path="/admin" element={<Admin/>}>
         <Route path="login" element={<Login/>} />
         <Route path="signup" element={<Signup/>} />
         </Route>

       
       <Route path="/cart/:id" element={<Cart/>} />


      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
