import React,{useState} from 'react'
import "./Navbar.css"


const Navbar = () => {
    const[curr,setState]=useState(false)

  return (
    <div className='navbar'>
    
      <div className='home'>Home</div>
       
       <h1 className='menu' onClick={()=>setState(!curr)}>Menu bar</h1>

        <ul className={curr?"myNav active":"myNav"}>
            <li onClick={()=>setState(!curr)}>About</li>
            <li onClick={()=>setState(!curr)}>Contact</li>
            <li onClick={()=>setState(!curr)}>Help</li>
        </ul>
      
    </div>
  )
}

export default Navbar
