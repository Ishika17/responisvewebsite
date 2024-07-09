import React, { useContext } from 'react'
import './FoodDisply.css'
import { StoreContext } from '../../context/StoreContext'
import { food_list } from '../../assets/assets'
import FoodItem from '../FoodItem/FoodItem'

 const FoodDisply = ({category}) => {
    const {food_item} = useContext(StoreContext)

  return (

    <div className='food-disply' id='food-disply'>
        <h2>Top dishes near you</h2>
        <div className="food-disply-list">
          {/*ye return ke baad jo stattemnet he ye filter krn eke kaam aati he ism  ye he  food item ko uski catgory se match kra diya   */}

            {food_list.map((item , index) => {
              if(category === "All" || category===item.category) {
                return <FoodItem key={index} id = {item._id} name={item.name} price = {item.price} description={item.description}  image = {item.image}/> 
              }
            
            })}
        </div>

    </div>
  )
}
export default FoodDisply