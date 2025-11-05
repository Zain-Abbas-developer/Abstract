import React from 'react'
import './Hero.css'
import arrow_icon from '../../assets/svg/7fcde2c6-3257-42b4-9359-d85e9c062758.svg'
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";


const Hero = () => {
  return (
    <div className="container">
      <h1>How can we help?</h1>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  );
}

export default Hero
