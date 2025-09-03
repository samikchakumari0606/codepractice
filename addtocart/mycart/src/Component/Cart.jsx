import React from 'react'
import { useContext } from 'react'
import { StoreContext } from '../Context/StoreContext'

const Cart = ({ category }) => {
    const { food_list } = useContext(StoreContext)

    return (
        <div>
            Cart
            {
                food_list.map((item) => {
                    if (category === "All" || category === item.category) {
                        return (
                            <div>
                                <h3 >{item.name}</h3>
                                <h3>{item.price}</h3>
                                <img src={item.image} />
                            
                            </div>
                        )
                    }

                })
            }
        </div>
    )
}

export default Cart
