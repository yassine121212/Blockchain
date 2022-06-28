import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Main from '../../components/main/Main'
import Desc from "../../components/Desc/Desc";
import Road from "../../components/Road/Roadmap";

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Main/>
        <Desc/>
        <Road/>
    </div>
  )
}

export default Home