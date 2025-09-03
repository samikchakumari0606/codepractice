import React,{useState} from 'react'


const Login = () => {
    const[currState,setState]=useState("signup")

  return (
    <div>
      <form>
        {
            currState==="login"?<></>:<input type="text" placeholder='enter your name' />
        }
        
        <br/>
        <input type="text" placeholder='enter your email' />
        <br/>
 
        <input type="text" placeholder='enter your password' />
         <br/>
        <button type="submit" >
            {currState==="signup"?"create new account":"login"}
        </button>
        {
            currState==="login"?<p onClick={()=>setState("signup")} >create new account</p>:<p onClick={()=>setState("login")}>want to login</p>
        }
      </form>
    </div>
  )
}

export default Login
