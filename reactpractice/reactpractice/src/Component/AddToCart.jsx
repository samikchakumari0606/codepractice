import React from 'react'
import { useParams } from 'react-router-dom'

const AddToCart = () => {
    const {id}=useParams()
  return (
    <div>
      addtocart id :{id}
    </div>
  )
}

export default AddToCart
