import React from 'react'
import "./Connect.scss"
import logo from "../../img/LOGO.jpeg"
import {Link} from 'react-router-dom';

const Connect = () => {
  return (
    <div className='connect'>

        <div className="c-left">
        <Link className='link' to="/">

            <img src={logo} className="c-logo" alt="logo" />
            </Link>

        </div>
        <div className="c-right">
       <button className='btn-connect'>
        Connect
       </button>

        </div>
     </div>
  )
}

export default Connect