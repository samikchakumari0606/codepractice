import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../App'

const ChildC = () => {
    let {theme,setTheme}=useContext(ThemeContext)

     function handleClick(){
        if(theme==="light"){
            setTheme("dark")
        }
        else{
            setTheme("Light")
        }
     }

  return (
    <div>
      this is child C

      <button onClick={handleClick}>Change theme</button>
      
    </div>
  )
}

export default ChildC
