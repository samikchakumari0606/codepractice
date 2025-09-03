import React,{useState} from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'
import { useContext } from 'react'

const FoodItem = ({id,name,price,description,image}) => {
  
  // const [itemCount,setItemCount]=useState(0)
  const {cartItems,addToCart,removeFromCart}=useContext(StoreContext)

  return (
    <div style={{border:"2px solid red"}} key={id}>
    
      <h3>{name}</h3>
      <p>{price}</p>
      <p>{description}</p>
      {/* {
        !itemCount?<img src={assets.add_icon_white} onClick={()=>setItemCount(prev=>prev+1)} />
        :<div>
          <img onClick={()=>setItemCount(prev=>prev-1)} src={assets.remove_icon_red} />
          <p>Total Item- {itemCount}</p>
          <img onClick={()=>setItemCount(prev=>prev+1)}  src={assets.add_icon_green}/>
        </div>
      } */}

      {
        !cartItems[id]?<img src={assets.add_icon_white} onClick={()=>addToCart(id)} />
        :<div>
          <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} />
          <p>Total Item- {cartItems[id]}</p>
          <img onClick={()=>addToCart(id)}  src={assets.add_icon_green}/>
        </div>
      }
      <img src={image}/>
      <br/>
      <img src={assets.rating_starts} />
    </div>
  )
}

export default FoodItem
