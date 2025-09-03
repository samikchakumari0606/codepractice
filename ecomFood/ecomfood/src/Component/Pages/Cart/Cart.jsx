import React,{useContext} from 'react'
import "./Cart.css"
import { StoreContext } from '../../../Context/StoreContext'

const Cart = () => {
  const {cartItems,food_list,removeFromCart,getTotalCartAmount}=useContext(StoreContext)
  return (
    <div>
      cart page
{/* 
      <div className='cart-items'>
       <p>Items</p>
       <p>Title</p>
       <p>Price</p>
       <p>Quantity</p>
       <p>Total</p>
       <p>Remove</p>
      </div> */}

      {
        food_list.map((item,index)=>{
          if(cartItems[item._id]>0){
            return(
              <div key={index}>
                <img src={item.image}/>
                 <p>{item.name}</p>
                 <p>{item.price}</p>
                 <p>Total Item {cartItems[item._id]}</p>
                 <p>Total price {item.price*cartItems[item._id]}</p>
                 <p onClick={()=>removeFromCart(item._id)}>Remove Item</p>
              </div>
            )
          }
        })
      }


       <div>
        Final cart Total - {getTotalCartAmount()}

       </div>
    </div>
  )
}

export default Cart
