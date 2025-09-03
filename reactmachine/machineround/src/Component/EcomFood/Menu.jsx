import React,{useState,useEffect} from 'react'
import { menu_list } from '../assets/frontend_assets/assets'
import MenuShow from './MenuShow'
import MenuAll from './MenuAll'
import { food_list } from '../assets/frontend_assets/assets'

const Menu = () => {
  const[menuList,setMenuList]=useState(menu_list)
  const[foodList,setFoodList]=useState(food_list)
  console.log("foodlist",food_list)
  console.log(menuList)
  return (
    <div>
      menu page
       <MenuShow menuList={menuList} />
       <MenuAll foodList={foodList} />
     
    </div>
  )
}
 
export default Menu
