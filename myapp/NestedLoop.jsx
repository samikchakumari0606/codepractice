

import React from 'react'

const NestedLoop = () => {

  let arrObj=[
    {id:1, name:"samiksha", age:22, city:"delhi"},
    {id:2, name:"simmi", age:23, city:"mumbai"},
    {id:3, name:"riya", age:24, city:"pune"},
    {id:4, name:"sonam", age:25, city:"bangalore"}
  ] 

  return (
    <div>
      nested
     {
      arrObj.map((item)=>{
        return(
          <>
          <h1>{item.name}</h1>
          </>
        )
      })
     }
    </div> 

  )
}

export default NestedLoop
