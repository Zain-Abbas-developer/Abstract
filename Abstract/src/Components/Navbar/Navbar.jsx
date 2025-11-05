import React, { useState } from 'react'
import './Navbar.css'
import logo from "../../assets/svg/74131c02-23e8-4222-92da-5674d60a28f5.svg";
import menu_icon from '../../assets/menu-burger.png'

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const showMenu = () => {
    setMenu(!menu)
  }

  return (
    <nav className="display">
      <div className="right-side">
        <img src={logo} alt="" className="logo" />
        <div className="line"></div>
        <p className="help">Help Center</p>
      </div>
      <ul className={`${menu ? "" : "mobile-menu"}`}>
        <li>
          <input type="text" placeholder="Search" />
        </li>
        <li>
          <button className="get-btn">Submit a request</button>
        </li>
        <li>
          <button className="sign-in-btn">Sign in</button>
        </li>
      </ul>
      <img src={menu_icon} alt="" className="menu-icon" onClick={showMenu} />
    </nav>
  );
}

export default Navbar
