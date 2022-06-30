import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Main from '../../components/main/Main'
import Desc from "../../components/Desc/Desc";
import Road from "../../components/Road/Roadmap";
import Partner from '../../components/Partner/Partner';
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Main/>
        <Desc/>
        <Road/>
        <Partner/>
        <Footer/>
    </div>
  )
}

export default Home