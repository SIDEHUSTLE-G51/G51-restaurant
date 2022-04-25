import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {FaBars} from "react-icons/fa"
import { VscChromeClose } from "react-icons/vsc"
import "./Navbar.css";

const Navbar = () => {
const [responsive, setResponsive] = useState(false);

  return (
    <nav className="navbar">
      <img src={require("../../images/logo.png")} alt="logo" className="logo"/>
      <ul className={ responsive ? "nav-links-mobile" : "nav-links" }
      onClick={() => setResponsive(false)}
      >
        <Link to="/" className='home'>
          <li>Home</li>
        </Link>
        <Link to="/about" className='about'>
          <li>About</li>
        </Link>
        <Link to="/products" className='products'>
          <li>Products</li>
        </Link>
        <Link to="/contact" className='contact'>
          <li>Contact</li>
        </Link>
      </ul>
      <button className="mobile-menu-icon" onClick={() => setResponsive(!responsive)}>
        {responsive ? <VscChromeClose /> :  <FaBars />}
      </button>
    </nav>
  )
}

export default Navbar
