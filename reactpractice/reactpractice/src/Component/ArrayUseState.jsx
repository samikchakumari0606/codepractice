import React,{useState} from 'react'

const ArrayUseState = () => {
    const[firstTodo,setFirstTodo]=useState("")
    const[todoArr,setTodoArr]=useState([])


    function handleSubmit(e){
        e.preventDefault()
        
        const item={
            id:0,
            text:firstTodo
        }
        
        setTodoArr(prev=>[...prev,item])
        console.log(firstTodo)

    }
    
    function handleDelete(id){
        let myDeleteTask=todoArr.filter((i)=>{
                    return i.id!==id
        })
        setTodoArr(myDeleteTask)
    }

    

  return (
    <div>
      <form >
        <input value={firstTodo} placeholder='enter your task' onChange={(e)=>setFirstTodo(e.target.value)} />
        <button onClick={handleSubmit}>submit task</button>
     
        {
            todoArr.map((i,id)=>{
                return(
                    <div key={id}>
                    <h1>{i.text}</h1>
                       <button onClick={()=>handleDelete(id)}>delete task</button>
                    </div>
                )
            })
        }
      </form>
    </div>
  )
}

export default ArrayUseState
