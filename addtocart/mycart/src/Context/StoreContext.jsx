import {useContext,useEffect,useState} from "react"
import { createContext } from "react"
import { food_list } from "../assets/assets"


export const StoreContext=createContext(null)


const StoreContextProvider=(props)=>{

    const [cartItem,setCartItem]=useState(null)

    const addToCart=(itemId)=>{
       if(!cartItem[itemId]){
            setCartItem((prev)=>({...prev,[itemId]:1}))
       }
       else{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
       }
    }

    const removeFromCart=(itemId)=>{
       setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }


    const finalPrice=(itemId)=>{
      let totalPrice=0;
      for(let item in cartItem){
        let totalItemInfo=food_list.find((product)=>product._id===item)
        totalPrice=totalPrice+totalItemInfo.price*cartItem[item]
      }
      return totalPrice
    }

    const contextValue={
       food_list,
       cartItem,
       setCartItem,
       addToCart,
       removeFromCart,
       finalPrice
    }

   
 

    return(
        <>
        <StoreContext.Provider value={contextValue} >
           {props.children}
        </StoreContext.Provider>
        </>
    )
}
export default StoreContextProvider