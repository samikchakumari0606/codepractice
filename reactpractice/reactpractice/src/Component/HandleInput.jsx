import React, { useState, useEffect } from 'react'

const HandleInput = () => {

    const [data, setData] = useState({ name: "", email: "" })

    function handleInput(e) {
          console.log(e.target.value)

          setData(prev=>({
            ...prev,
            [e.target.name]:e.target.value
          }))
    }

    function handleSubmit(e){
           e.preventDefault()
           console.log(` name ${data.name} and email ${data.email}`)
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input type="text" name="name" value={data.name} placeholder='enter your name' onChange={handleInput} />
                <input type="text" name="email" value={data.email}  placeholder='enter your name' onChange={handleInput} />
                <button type="submit">submit</button>
            </form>


        </div>
    )
}

export default HandleInput
