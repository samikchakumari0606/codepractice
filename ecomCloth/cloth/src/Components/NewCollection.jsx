import React from 'react'
import new_collection from "../assets/new_collections"
import Item from './Item'


const NewCollection = () => {
  return (
    <div>
        <h1>New Collection</h1>
      {
        new_collection.map((item,i)=>{
             return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })
      }
    </div>
  )
}

export default NewCollection
