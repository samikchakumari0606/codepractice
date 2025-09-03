import React from 'react';
import { NavLink } from 'react-router-dom';
import {useState} from "react"
import Menu from './MenuAPi'
import Cart from './Cart';

const Navbar = () => {
    const [allMenu,setMenu]=useState(Menu)
    // console.log(allMenu)


    const handlefilter=(mychoice)=>{
        let filterFood=allMenu.filter((i)=>{
            return i.category===mychoice
          })

         console.log("filterFood", filterFood) 
         setMenu(filterFood)
    }

    return (
        <div>
            <ul>
                <NavLink to="/" > <li >Homepage </li> </NavLink>
                <li onClick={()=>handlefilter("Breakfast")}>Breakfast</li> 
                <li onClick={()=>handlefilter("Lunch")}>Lunch</li>
                 <li onClick={()=>handlefilter("Evening")}>Evening</li> 
               <li onClick={()=>handlefilter("Dinner")}>Dinner</li> 
                

            </ul>
            {
                allMenu.map((item,id)=>{
                    return(
                        <div key={id}>
                        <Cart item={item} />
                        </div>
                    ) 
                })
            }
            
        </div>
    )
}

export default Navbar
