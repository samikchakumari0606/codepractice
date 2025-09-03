import React,{useState} from 'react'

const Calc = () => {
     const[num,setNum]=useState(" ")
      let arr=["1","2","3","4","5","6","7","8","9","0","=","/","*","-","+","C"]
    
     function handleInput(e){
      console.log(e.target.value)
      setNum(e.target.value)
     }

     function handleClick(e){
         console.log(e.target.id)
         const id=e.target.id;

         if(id==="C"){
          setNum(" ")
         }
         else if(id==="="){
          handleSubmit()
         }
         else{
          setNum((val)=>val+id)
         }
     }

     function handleSubmit(e){
          e?.preventDefault()

          try{
          const result=eval(num)
          setNum(result)
          }
          catch(err){
            alert("invalud input")
          }
     }

  return (
    <div>
     <h1>calculator</h1>
        <input type="text" value={num} onChange={handleInput} />
       {
        arr.map((item,id)=>{
          return(
            <div key={id} onClick={handleClick} id={item}>
                <p>{item}</p>
            </div>
          )
        })
       }
      
    </div>
  )
}

export default Calc
