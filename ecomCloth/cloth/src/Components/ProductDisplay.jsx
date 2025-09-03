import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'

const ProductDisplay = (props) => {
    const {product}=props
    const {addToCart}=useContext(ShopContext)
  return (
    <div>
      product display
      <img src={product.image}/>
      <br/>
      <p>{product.name}</p>
      <p>old price ${product.old_price}</p>
      <p>new price ${product.new_price}</p>

      <button onClick={()=>addToCart(product.id)}>Add to cart</button>
    </div>
  )
}

export default ProductDisplay
