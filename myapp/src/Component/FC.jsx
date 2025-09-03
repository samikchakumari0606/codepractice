import React from 'react'
import {useState} from 'react'

const FC = () => {
   
const[theme,setTheme]=useState({
    color:"white",
    backgroundColor:"black"
})

function handleChange(){
    if(theme.color === "white"){
        setTheme({
            color:"black",
            backgroundColor:"white"
        })
    }else{
        setTheme({
            color:"white",
            backgroundColor:"black"
        })
    }
}

  return (
    <div>
      
       <nav style={theme}>
        <p>home</p>
        <p>about</p>
        <p>contact</p>
       </nav>
        
        <button onClick={handleChange}>change theme</button>
    </div>
  )
}

export default FC
