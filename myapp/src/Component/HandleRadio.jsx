 import React from 'react'
 import {useState} from "react";

const HandleRadio = () => {
    const[gender,setGender]=useState(true)
    const[city,setCity]=useState("delhi")

  return (
    <div>
        <h3>{gender}</h3>
       
      <input type="radio" value={"male"} name="gender" onChange={(event)=>setGender(event.target.value)}/>
      <label htmlFor='male'>Male</label>
      <br/>
     
       <input type="radio" name="gender" value={"female"} onChange={(event)=>setGender(event.target.value)} />
      <label htmlFor='female'>Female</label>


      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <h3>{city}</h3>
      <select defaultValue={"delhi"} onChange={(event)=>setCity(event.target.value)}>
        <option value="chennai">Chennai</option>
        <option value="delhi">Delhi</option>
        <option value="Himachal">Himachal</option>
      </select>

    </div>
  )
}

export default HandleRadio
