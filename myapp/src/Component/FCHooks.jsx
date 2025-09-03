import React from 'react';
import { useState, useEffect,useRef } from 'react';


const FCHooks = () => {
    
    const inputRef=useRef(null)


    function handleInput(event) {
        console.log(event.target.value);

        inputRef.current.style.color="blue"
    }

  return (
    <div>
       <input ref={inputRef} placeholder='enter details'  onChange={handleInput} />
    
    </div>
  )
}

export default FCHooks
