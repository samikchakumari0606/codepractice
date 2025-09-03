import React from 'react'
import "./ExploreMenu.css"
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu'>
     <h1>Explore Menu</h1>

     {
        menu_list.map((item,index)=>{
            return(
                <div key={index} onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} >
                     <img src={item.menu_image} className={category===item.menu_name?"active":""} />
                     <p>{item.menu_name}</p>
                </div>
            )
        })
     }

    </div>
  )
}

export default ExploreMenu
