import React from 'react'
import {MdDone} from "react-icons/md"
import "./Roadmap.scss"
const Roadmap = () => {
  return (
    <div className='roadmap'>
         <div className="r-elements">
            <div className="r-road">Roadmap</div>
            <div className='class-r'>Q1 2022 <br /><br />

               <div className='r-circle'><MdDone className='mdone-r' /></div> <div>Start Projet</div>
               <div className='r-circle'><MdDone className='mdone-r' /></div><div>Smart Contract build</div>
               <div className='r-circle'><MdDone className='mdone-r' /></div><div>Social Media</div>
               <div className='r-circle'><MdDone className='mdone-r' /></div><div>Website</div>

            </div>
            <div  className='class-r'>Q2 2022 <br /><br />


            <div className='r-circle'><MdDone className='mdone-r' /></div><div>Pubdivc Pre-Sale</div>
            <div className='r-circle'><MdDone className='mdone-r' /></div><div>Livquidity on Pancakeswap</div>
            <div className='r-circle'></div><div>Livsting on CoinMarketCap / CoinGecko</div>
            <div className='r-circle'></div><div>Marketing</div>
            <div className='r-circle'></div><div>Successful Partnerships</div>

            </div>
            <div  className='class-r'>Q3 2022 <br /><br />


            <div className='r-circle'></div><div>CEX divstings</div>
            <div className='r-circle'></div><div>The first trailer for the game</div>
            <div className='r-circle'></div><div>Introducing the first NFTs package</div>
            <div className='r-circle'></div><div>Beta testing Game release</div>

            </div>
            <div  className='class-r'>Q4 2022 <br /><br />


            <div className='r-circle'></div><div>launch the game</div>
            <div className='r-circle'></div><div>Design more farms and animals</div>
            <div className='r-circle'></div><div>Mobile version launched (IOS & Android)</div>
            <div className='r-circle'></div><div>More Marketing</div>

            </div>

        </div> 
         
    </div>
  )
}

export default Roadmap