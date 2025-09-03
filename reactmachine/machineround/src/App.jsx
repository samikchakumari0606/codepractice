import { useState } from 'react'
import Todo from './Component/TodoList/Todo'
import Progress from './Component/Progress/Progress'
import Auto from './Component/AutoSearch/Auto'
import Calc from "./Component/Calculator/Calc"
import Login from './Component/LoginForm/Login'
import Accordian from './Component/Accordian/Accordian'
import Pagination from './Component/Pagination/Pagination'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Basic from './Component/FeaturesReact/Basic'
import About from './Component/FeaturesReact/About'
import Log from "./Component/FeaturesReact/Log"
import Theme from './Component/FeaturesReact/Theme'
import Navbar from './Component/FeaturesReact/Navbar'
import Data from './Component/FeaturesReact/Data'
import Home from './Component/EcomFood/Home'
import Menu from './Component/EcomFood/Menu'
import Contact from './Component/EcomFood/Contact'
import LoginFood from './Component/EcomFood/LoginFood'



function App() {

  // const [color,setColor]=useState(80)
  return (
    <>
      {/* <Todo/> */}
      {/* <Progress color={color} /> */}
      {/* <Auto/> */}
      {/* <Calc/> */}
      {/* <Login  /> */}
      {/* <Accordian/> */}
      {/* <Pagination/> */}

      {/* <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Basic />} />
          <Route path="/about" element={<About />} />
          <Route path="/data" element={<Data/>} />
          <Route path="/log" element={<Log />} />
           <Route path="/theme" element={<Theme/>} />
        </Routes>
      </BrowserRouter> */}



      <BrowserRouter>
 
      <Routes>
        <Route path="/" element={<Home/>} />
       
        <Route path="/foodmenu" element={<Menu/>} />
        <Route path="/foodcontact" element={<Contact/>} />
        <Route path="/foodlogin" element={<LoginFood/>} />
      </Routes>

      </BrowserRouter>


    </>
  )
}

export default App
