
import React from 'react'
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  let navigate=useNavigate()

   function handleSignup(){
       navigate("/")
   } 

  return (
    <div>
      <Link to="/">Home</Link>
      <br/>
      <Link to="/about">About</Link>
         <br/>
      <Link to="/contact">Contact</Link>
         <br/>
      <Link to="/login">Login</Link>
         <br/>
      <Link to="/clg">College</Link>
         <br/>
      <Link to="user">User</Link>
         <br/>
      <Link to="admin">Admin</Link>
         <br/>
      <Link to="/product">Product</Link>
         <br/>
      <button onClick={handleSignup}>Signup</button>
    </div>
  )
}

export default Navbar
