import React from 'react'
import { useState } from 'react';

const Input = () => {
    const [name,setName]=useState("")
    const [age,setAge]=useState("")


    function handleSubmit(e){
           e.preventDefault()
           console.log(name,age)
           alert(name)
           alert(age)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h3>{name}</h3>
            <h3>{age}</h3>
            <input type="text"  placeholder='enter name' onChange={(e)=>setName(e.target.value)}/>
            <br/>
            <input type="number"  placeholder='enter age' onChange={(e)=>setAge(e.target.value)}/>
            <br/>
            <input type="submit"/>
            <br/>
        </form>
    </div>
   
  )
}

export default Input
