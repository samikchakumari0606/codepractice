import React from 'react'


const Cart = ({item}) => {
    // console.log("item in cart page",item)
    
  return (
    <div style={{border:"2px solid red"}}>


     <p>category :{item.category}</p>
     <p>description :{item.description}</p>
     <h3>name:{item.name}</h3>
    </div>
  )
}

export default Cart
