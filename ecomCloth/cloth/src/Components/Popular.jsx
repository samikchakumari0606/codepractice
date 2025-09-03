import React from 'react'
import Item from './Item'
import data_product from "../assets/data"

const Popular = () => {
  return (
    <div>
   
   {
    data_product.map((item,i)=>{
        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
    })
   }
      
    </div>
  )
}

export default Popular
