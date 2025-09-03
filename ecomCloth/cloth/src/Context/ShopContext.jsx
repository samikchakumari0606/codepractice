import React,{useState} from "react"
import all_product from "../assets/all_product"

import { createContext } from "react";

export const ShopContext=createContext(null);

const getDefaultCart=()=>{
    let cart={};
    for(let index=0;index<all_product.length+1;index++){
        cart[index]=0
    }
}

const ShopContextProvider=(props)=>{

     const[cartItems,setCartItems]=useState(getDefaultCart())

     const addToCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log("addtocart",cartItems)
     }

    //  const RemoveFromCart=(itemId)=>{
    //     setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    //  }

    const contextValue={
       all_product,
       cartItems,
       addToCart
    }
    
   
   
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children} 
        </ShopContext.Provider>
    )
}
export default ShopContextProvider