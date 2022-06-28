import React,{useState} from 'react'
import logo from "../../img/LOGO.jpeg"
import {MdClose} from "react-icons/md"
import "./Navbar.scss"
const Navbar = () => {
  const [active, setactive] = useState(false)
  const handlclick=()=>{
    if(active===false) setactive(true)
    if(active==true) setactive(false)
  }
  
  return (
    <div className="n-navbar">
        <div className="n-logo">
          <img src={logo} alt="logo"/>
        </div>
        {
          !active && (
        <div className="n-links">
            <ul>
                <li>WHITEPAPER</li>
                <li>ROADMAP</li>
                <li>AIRDROP</li>
                <li>IDO</li>
                <li>GAMEFI<sup>soon</sup></li>
             </ul>
        </div>)
        }
        {active ?(
        <div className="hamburger" onClick={handlclick}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
        </div>):(
        <div className="n-close"> 
            <MdClose onClick={handlclick}/>
        </div>)
        }

    </div>
  )
}

export default Navbar