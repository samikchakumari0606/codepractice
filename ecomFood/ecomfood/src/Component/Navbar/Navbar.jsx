import React,{useState} from 'react'
import {assets} from "../../assets/assets"
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = ({setShowLogin}) => {
    const[menu,setMenu]=useState("home")

  return (
    <div>
       
        <img src={assets.logo}/>
        <ul className='navbar'>
            <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</li>
            <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""} >menu</li>
            <li onClick={()=>setMenu("mobile")} className={menu==="mobile"?"active":""}>mobile</li>
            <li onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us</li>
        </ul>
    <Link to="/cart"><h1 >Add To Cart</h1></Link>   
        <button onClick={()=>setShowLogin(true)}>sign in</button>
    </div>
  )
}

export default Navbar
