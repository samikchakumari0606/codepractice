import React from 'react'
import {Link} from "react-router-dom"


const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/jobs">Jobs</Link>

      <Link to="/admin">Admin</Link>
      <Link to="login">login</Link>
      <Link to="signup">Signup</Link>

      {/* <Link to="/cart">Cart</Link> */}

    </div>
  )
}

export default Navbar
