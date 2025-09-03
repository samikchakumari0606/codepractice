import React from 'react'
import {useState,useEffect} from "react"

const Auto = () => {
    const [search,SetSearch]=useState("");
    const[result,setResult]=useState([])

       function handleSearch(e){
        console.log(e.target.value)
        SetSearch(e.target.value)
    }

    useEffect(()=>{
    
      async function fetchData(){
       let res=await fetch(`https://dummyjson.com/recipes/search?q=${search}`)
        
       let data=await res.json();
       console.log(data.recipes)
       setResult(data.recipes)
    
    }
    fetchData()
   
    },[search])

  return (
    <div>
    <h3>Autosearch results</h3> 

    <input type="text" placeholder='enter your search' onChange={handleSearch} />

      
      {
        result.map((item)=>{
            return (
                <div>
                    <h3>{item.name}</h3>
                </div>
            )
        })
      }

    </div>
  )
}

export default Auto
