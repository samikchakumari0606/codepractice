import React,{useState} from 'react'


const Log = () => {

  const[currState,setCurrstate]=useState("signup")

  function handleSubmit(){

  }
  return (
    <div>
      
      <form onSubmit={handleSubmit}>
        {
          currState==="Login"?<></>: <input type="text" placeholder='enter your email' />
        }
     
        <br/>
         <input type="text" placeholder='enter your username' />
        <br/>
         <input type="text" placeholder='enter your password' />
        <br/>
        
         <button type="submit">
          {
            currState==="signup"?"create new account":"Login"
          }
         </button>
         {
          currState==="Login"?<p onClick={()=>setCurrstate("signup")}>signup</p>:<p onClick={()=>setCurrstate("Login")}>Login</p>
         }
        
      </form>
    </div>
  )
}

export default Log
