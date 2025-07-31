import React from 'react'
import { useParams } from 'react-router-dom'


const Cart = () => {
    const {id}=useParams()
  return (
    <div>
      total cart item is {id}
    </div>
  )
}

export default Cart
