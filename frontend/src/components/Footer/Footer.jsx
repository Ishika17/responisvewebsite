import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id = 'footer'>
  <div className="footer-content">
    <div className="footer-content-left">
        <img src={assets.logo} alt = ""/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam non explicabo et, minima quia soluta!</p>
        <div className="footer-social-icon">
            <img src= {assets.facebook_icon} alt='' />
            <img src= {assets.twitter_icon} alt='' />
            <img src= {assets.linkedin_icon} alt='' />
        </div>
    </div>
    <div className="footer-content-center">
        <h2>COMPANY</h2>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Delivery</li>
          <li>Privacy Policy</li>
        </ul>
        </div>
    <div className="footer-content-right">
<h2>GET IN TOUCH</h2>
<ul>
  <li>7424958193</li>
  <li>ishi@gmail.com</li>
</ul>
    </div>
  </div>
  <hr/>
  <p className='footer-copyrigth'>Copyright 2024 @ Tomato.com- All right Reserved</p>
    </div>
  )
}

export default Footer