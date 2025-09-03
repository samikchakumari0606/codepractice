import React from 'react'

const Breadcrum = (props) => {
    const {product}=props
  return (
    <div>
      HOME ==== SHOP ===== {product.category}======{product.name}
    </div>
  )
}

export default Breadcrum
