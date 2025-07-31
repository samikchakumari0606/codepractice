import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from "./Component/Navbar";
import Cart from "./Component/Cart";



function App() {
 

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>} />
         
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
