import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import men_banner from "./assets/banner_mens.png"
import women_banner from "./assets/banner_women.png"
import kids_banner from "./assets/banner_kids.png"

function App() {


  return (
    <>


      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path="/" element={<Shop />} />

          <Route path="/mens" element={<ShopCategory category="men" banner={men_banner} />}  />
          <Route path="/womens" element={<ShopCategory category="women" banner={women_banner} />}  />
          <Route path="/kids" element={<ShopCategory category="kid" banner={kids_banner} />}  />

          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>

          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
