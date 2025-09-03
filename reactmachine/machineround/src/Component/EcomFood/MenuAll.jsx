import React,{useState,useEffect} from 'react'

const MenuAll = ({foodList}) => {
  return (
    <div>
      complete food menu
       {
        foodList.map((item,id)=>{
            return(
                <div key={id} style={{border:"2px solid red"}}>
                    <h3>name - {item.name}</h3>
                    <h3>category - {item.category}</h3>
                    <h2>{item.description}</h2>
                    <img src={item.image} />
                </div>
            )
        })
       }
    </div>
  )
}

export default MenuAll
