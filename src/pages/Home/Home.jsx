import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Main from '../../components/main/Main'
import Cart from '../../components/Carts/Cart'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Main/>
        <Cart/> 
    </div>
  )
}

export default Home