import React,{useState,useContext} from 'react'
import { StoreContext } from '../Context/StoreContext'


const Order = ({id}) => {
    const {food_list,cartItem,addToCart,removeItem,finalPrice}=useContext(StoreContext)
  return (
    <div>
      {
       food_list.map((item)=>{
        if(cartItem[item._id]>0){
            return(
            <div>
                <img src={item.image} />
                <p>{item.price}</p>
                <h1 onClick={()=>addToCart(item.id)}>initial add</h1>
                <h3 onClick={()=>addToCart(item.id)}>plus</h3>
                <h3 onClick={()=>removeItem(item.id)}>minus</h3>
                <h3>Total item {cartItem[item.id]}</h3>
                <h3>Total price{item.price*cartItem[item.id]}</h3>

            </div>
        )
        }
        
       })
      }

      <h1>Final Amount {finalPrice()}</h1>
    </div>
  )
}

export default Order
