import React from 'react';
import FC from './Component/FC';
import CC from "./Component/CC"
import FCProps from './Component/FCProps';
import FCHooks from './Component/FCHooks';
import Input from './Component/Input';
import HandleRadio from './Component/HandleRadio';
import NestedLoop from '../NestedLoop';
import MyStyle from './Component/MyStyle';
import SpreadOperator from './Component/SpreadOperator';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Navbar from './Component/Navbar';
import Clg from './Component/Clg';
import ClassOne from './Component/ClassOne';
import ClassTwo from './Component/ClassTwo';
import ClassThree from './Component/ClassThree';
import Login from './Component/Login';
import { Navigate } from 'react-router-dom';
import User from './Component/User';
import Admin from './Component/Admin';
import ProductPage from './Component/ProductPage';


function App() {

  // let myObj={
  //   myName:"samiksha",
  //   myAge: 22,
  //   myCity: "delhi"
  // }

  // let myArr=[1,2,3,4,5];

  return (
    <>

      {/* <FC/> */}
      {/* <CC myName="samiksha" /> */}
      {/* <FCProps name="simmi" obj={myObj} arr={myArr} /> */}

      {/* <FCHooks/> */}
      {/* <Input/> */}
      {/* <HandleRadio /> */}
      {/* <NestedLoop/> */}
      {/* <MyStyle/> */}


      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* basic routing */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Route prefix */}
          <Route path="/signup">
            <Route path="user" element={<User />} />
            <Route path="admin" element={<Admin />} />
          </Route>

          <Route path="/login" element={<Login />}> </Route>

          {/* nested routing  and use of nested routing */}
          <Route path="/clg" element={<Clg />}>
            <Route path="one" element={<ClassOne />} />
            <Route index element={<ClassTwo />} />
            <Route path="three" element={<ClassThree />} />
          </Route>

          {/* use of Navigate */}
          <Route path="/login" element={<Navigate to="/login" />} />

          {/* page not found */}
          <Route path="/*" element={<h1>sorry page not found.....</h1>} />

          {/* useParams */}
          <Route path="/product/:id"  element={<ProductPage/>} />

        </Routes>

      </BrowserRouter>



      <SpreadOperator/>

    </>
  )
}

export default App
