import UseState from "./Component/UseState"
import FormUseState from "./Component/FormUseState"
import ArrayUseState from "./Component/ArrayUseState"
import ApiUseEffect from "./Component/ApiUseEffect"
import SearchInput from "./Component/SearchInput"
import HandleInput from "./Component/HandleInput"
import HandleRadio from "./Component/handleRadio"
import Prop from "./Component/Prop"
import Theme from "./Component/Theme"
import Axios from "./Component/Axios"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from "./Component/Navbar"
import Home from "./Component/Home"
import Contact from "./Component/Contact"
import Login from "./Component/Login"
import AddToCart from "./Component/AddToCart"
import ChildA from "./Component/ChildA"
import { createContext } from "react"
import {useState} from "react"
import Clg from "./Component/Clg"
import Student from "./Component/Student"
import Depart from "./Component/Depart"
import Signup from "./Component/Signup"
import Todo from "./Component/MachineRound/Todo"


const ThemeContext=createContext()

function App() {

  const [theme,setTheme]=useState("light")
  
// let myComnpany={
  //   company:"TCS",
  //   pacakage:"20LPA"
  // }

  // let myArr=[12,45,563,8797]

  return (
    <>

    {/* <ThemeContext.Provider value={{theme,setTheme}}>

         <div style={{backgroundColor:theme==="light"?"beige":"black"}}>
             <ChildA/>
         </div>
       

       </ThemeContext.Provider> */}


      {/* <UseState/> */}
      {/* <FormUseState/> */}
      {/* <ArrayUseState/> */}
      {/* <ApiUseEffect/> */}
      {/* <SearchInput/> */}
      {/* <HandleInput/> */}
      {/* <HandleRadio/> */}
      {/* <Prop myname="simmi" myCompany={myComnpany} myArr={myArr} /> */}
  
      {/* <Theme/> */}

      {/* <Axios/>   */}

      <Todo/>






      {/* <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />

        <Route path="user">
         <Route path="/user/login"  element={<Login/>} />
         <Route path="/user/signup"  element={<Signup/>} />
        </Route>
        



        <Route path="/*" element={"page not found"} />
        <Route path="/cart/:id" element={<AddToCart/>} />

        <Route path="/clg" element={<Clg/>}>
            <Route path="stu"  element={<Student/>} />
            <Route index  element={<Depart/>} />
        </Route>

      </Routes>
      </BrowserRouter> */}

    </>
  )
}

export default App

export  {ThemeContext}
