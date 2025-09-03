import React,{useState} from 'react'

const HandleRadio = () => {

    const [gender,setGender]=useState(true)

    function handleGender(e){
          console.log(e.target.value)
          setGender(e.target.value)
    }

  return (
    <div>
      <h1>{gender}</h1>
      <input type="radio" name='gender' value={"male"} placeholder='enter your gender' onChange={handleGender} />
    <label htmlFor='male'>male</label>
    <input type="radio" name='gender'value={"female"} placeholder='enter your gender' onChange={handleGender} />
     <label htmlFor='female'>female</label>

     
    </div>
  )
}

export default HandleRadio
