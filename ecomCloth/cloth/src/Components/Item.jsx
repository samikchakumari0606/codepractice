import React from 'react'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div>
   <Link to={`/product/${props.id}`}><img src={props.image} /></Link>   
      <p>{props.name}</p>
      <p>new price {props.new_price}</p>
        <p>old price {props.old_price}</p>
    </div>
  )
}

export default Item
