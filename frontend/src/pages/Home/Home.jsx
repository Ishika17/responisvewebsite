import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Exploremenu from '../../components/Exploremenu/Exploremenu'
import FoodDisply from '../../components/FoodDsiply/FoodDisply'
import AppDowlond from '../../components/AppDowlond/AppDowlond'
const Home = () => {
  const[category , setCategory] = useState("All");
  return (
    <div>
     
  <Header />
  <Exploremenu category = {category} setCategory = {setCategory} />
  <FoodDisply category = {category} />
  <AppDowlond />
    </div>
  )
}

export default Home