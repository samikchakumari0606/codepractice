import React, { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({ category }) => {

  const { food_list } = useContext(StoreContext)

  return ( 

    <div>
      <h1>Food list array</h1>

      {
        food_list.map((item, index) => {
          { console.log(category, item.category) }
          if (category === "All" || category === item.category) {
            return (
              <div key={index}>
                <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
              </div>
            )
          }

        })
      }

    </div>
  )
}

export default FoodDisplay
