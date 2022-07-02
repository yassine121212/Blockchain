import React from 'react'
import Connect from "../../components/Connect/Connect"
import Exchange from '../../components/Exchange/Exchange'
import "./Ido.css"
import Footer from "../../components/Footer/Footer";
import Details from '../../components/Ido_Details/Details';
const Ido = () => {
  return (
    <div>
       <Connect />
       <Exchange/>
       <Details/>
       <Footer/>

    </div>
  )
}

export default Ido