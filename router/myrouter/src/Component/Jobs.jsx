import React from 'react'
import {Link,Outlet} from "react-router-dom"

const Jobs = () => {
  return (
    <div>
        
      jobs

      <Link to="dev">dev jobs</Link> <br/>
      <Link to="test">tester jobs</Link> <br/>
      <Link to="design">Design jobs</Link> 

      <Outlet/>

    </div>
  )
}

export default Jobs
