import React from 'react'
import './AppDowlond.css'
import { assets } from '../../assets/assets'

const AppDowlond = () => {
  return (
    <div className='app-download' id='app download'>
        <p>For Better Experience Dowloand <br/>Tomato App</p>
        <div className="app-download-platform">
            <img  src={assets.play_store} alt=''/>
            <img src= {assets.app_store} alt='' />
        </div>
        </div>
  )
}

export default AppDowlond