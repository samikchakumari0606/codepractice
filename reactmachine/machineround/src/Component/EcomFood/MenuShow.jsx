import React,{useState,useEffect} from 'react'

const MenuShow = ({menuList}) => {

  const[filterItem,setFilterItem]=useState("")
  
  // let FilteredFood=menuList.filter((category)=>{
  //   return category===menuList.menu_name
  // })
  // setFilterItem(FilteredFood)

  return (
    <div>
      showing menu list
      {
        menuList.map((item,id)=>{
            return (
                <div onClick={()=>handleFilterItem(item.name)} style={{display:"flex",flexWrap:"wrap"}} key={id}>
                    <h3>{item.menu_name}</h3>
                    <img src={item.menu_image} />
                </div>
            )
        })
      }
    </div>
  )
}

export default MenuShow
