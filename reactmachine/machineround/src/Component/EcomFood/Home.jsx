import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
    
        <Link to="/">Home</Link>
     
         <Link to="/foodcontact">Contact</Link>
            <Link to="/foodmenu">Menu</Link>
               <Link to="/foodlogin">Login</Link>
    </div>
  )
}

export default Home
