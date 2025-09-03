import React from 'react'

import { NavLink, Outlet } from 'react-router-dom'

const Clg = () => {
  return (
    <div>
      clg

       <NavLink to="one" >Class One</NavLink>
       <NavLink to="" >Class Two</NavLink>
        <NavLink to="three" >Class Three</NavLink>

       <Outlet/>
    </div>
  )
}

export default Clg
