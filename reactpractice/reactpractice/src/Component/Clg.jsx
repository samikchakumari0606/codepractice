import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Clg = () => {
  return (
    <div>
      main clg page
      <Link to="stu">student page</Link>
      <Link to="dept">department page</Link>
      <Outlet/>
    </div>
  )
}

export default Clg
