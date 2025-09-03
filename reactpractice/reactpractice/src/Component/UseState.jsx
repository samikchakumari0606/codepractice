import React from 'react'
import { useState } from 'react'

const UseState = () => {
    const [count,setCount]=useState(0)

    function handlePlus(){
          setCount(prev=>prev+1)
    }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handlePlus}>plus</button>
    </div>
  )
}

export default UseState
