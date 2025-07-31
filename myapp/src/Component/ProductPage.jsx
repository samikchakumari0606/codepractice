import React from 'react'
import { useParams } from 'react-router-dom'

const ProductPage = () => {
    const {id}=useParams()
  return (
    <div>
      ProductPage
      <h1>product id : {id}</h1>
    </div>
  )
}

export default ProductPage
