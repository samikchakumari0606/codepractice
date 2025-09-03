import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div>
    
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/data">Data</Link>
    <Link to="/log">Login</Link>
    <Link to="/theme">Theme</Link>
    </div>
  )
}

export default Navbar
