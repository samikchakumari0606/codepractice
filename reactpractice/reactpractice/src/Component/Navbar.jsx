import React from 'react'
import {Link,NavLink} from "react-router-dom"
import { useNavigate } from 'react-router-dom'



const Navbar = () => {
    
    // let navigate=useNavigate("/")

    // function handleLogin(){
    //       navigate("/login")
    // }

  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/cart">Add to cart</Link>
      {/* <button onClick={handleLogin}>Login</button> */}
      <Link to="/clg">clg</Link>

      <Link to="/user/login">Login</Link>
       <Link to="/user/signup">Signup</Link>
    </div>
  )
}

export default Navbar
