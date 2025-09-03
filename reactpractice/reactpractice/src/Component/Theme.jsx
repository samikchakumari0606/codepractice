import React,{useEffect,useState} from 'react'
import styles from "./theme.module.css"


const Theme = () => {
    const[theme,setTheme]=useState({
                     color:"white",
                     backgroundColor:"black"
    })

    const[btn,setBtn]=useState("light")

    function handletheme(){
        if(theme.color=="white"){
            setTheme({
                color:"black",
                     backgroundColor:"white"
            })
            setBtn("dark")
        }
        else{
            setTheme({color:"white",
                     backgroundColor:"black"})

             setBtn("light")         
        }
       
    }

  return (
    <div style={theme}>
      <h1>hjj</h1>
      <button onClick={handletheme}>{btn}</button>

      <button className={styles.mybtn}>thank you</button>
    </div>
  )
}

export default Theme
