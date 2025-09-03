import React from 'react'
import { useState } from "react"

const Todo = () => {

    const [task, setTask] = useState("")
    const [taskArr, setTaskArr] = useState([])

    function handleTodoInput(e) {
        //  console.log(e.target.value)
        setTask(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()

        setTaskArr(prev => [...prev, task])

        console.log(task)
        setTaskArr(" ")
    }

    function handleDelete(i){
         let newTodo=taskArr.filter((d)=>{
            return d.i!==i
         })
         setTaskArr(newTodo)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={task} type="text" placeholder='enter task' onChange={handleTodoInput} />
                <button type="submit" >submit</button>
            </form>

            {
               taskArr.map((i)=>{
                return (
                    <div key={i}>
                        <h3>{i}</h3>
                        <button onClick={()=>handleDelete(i)}>delete</button>
                    </div>
                )
               }) 
            }

        </div>
    )
}

export default Todo
