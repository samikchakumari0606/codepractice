import React from 'react';
import {useState,useEffect} from "react"

const SpreadOperator = () => {
  //  const [data,setData]=useState(['apple','banana'])

   
  //  const addMango=(()=>{
  //      setData(prevItem=>[...prevItem,"mango"])
  //  })
   

  

  //  const [user,setUser]=useState({ name: 'Alice', age: 25 })

  //  function handleChangeAge(){
  //      setUser(prevUser=>({...prevUser,age:30}))
  //  }



  const [todo,setTodo]=useState([
                            { id: 1, task: 'Code', done: false },
                            { id: 2, task: 'Sleep', done: false }])


       function handleToggle(id){
         setTodo(prev=> prev.map(myTask=>myTask.id===id?{...myTask, done:!todo.done}:todo))
       }                     
 
                            return (
    <div>
      SpreadOperator
      {/* <button onClick={addMango}>add mango</button>
     {
      data.map((fruit,index)=>{
        return <p key={index}>{fruit}</p>
      })
     } */}

      {/* <p>{user.name} </p>
      <p>{user.age}</p>
     
      
      <button onClick={handleChangeAge}>change age</button> */}

      
      <p>{todo.task} - {todo.done ? "Done":"Pending"}</p>
    
      <button onClick={()=>handleToggle(todo.id)}>toggle done</button>

    </div>
  )
}

export default SpreadOperator
