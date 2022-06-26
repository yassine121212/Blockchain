import React from 'react'
import logo from "../../img/LOGO.png"
import "./Navbar.scss"
const Navbar = () => {
  return (
    <div className="n-navbar">
        <div className="n-logo">
          <img src={logo} alt="logo"/>
        </div>
        <div className="n-links">
            <ul>
                <li>WHITEPAPER</li>
                <li>ROADMAP</li>
                <li>AIRDROP</li>
                <li>IDO EVENT</li>
                <li>GAMEFI</li>
                <li>DASHBOARD</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar