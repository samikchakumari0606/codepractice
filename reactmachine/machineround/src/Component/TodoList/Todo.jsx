import React from 'react'
import { useState } from "react"


const Todo = () => {
    const [input, setInput] = useState(" ")
    const [todoArr, setTodoArr] = useState([])

    function handleInput(e) {
        console.log(e.target.value)
        setInput(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        // console.log(input)

       setTodoArr((prev)=>[...prev,input]) 
       console.log(todoArr)
    }

    function handleDelete(id){
     let myArr=todoArr.filter((_,t)=>t !==id)
     setTodoArr(myArr)
    }

    return (
        <div>


            <h3>todolist</h3>

            <form onSubmit={handleSubmit}>
                <input type='text' value={input} placeholder='enter your todo' onChange={handleInput} />

                <button type="submit">submit task</button>
            </form>

            {
                todoArr.map((item,id)=>{
                    return (
                        <div key={id}>
                            <h4>{item} </h4>
                            <button onClick={()=>handleDelete(id)}>delete</button>
                        </div>
                    )
                })
            }

        </div>
    )
}











export default Todo
