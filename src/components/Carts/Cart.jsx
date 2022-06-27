import React from 'react'
import item1 from "../../img/items/trade.png"
import item2 from "../../img/items/sale.png"
import item3 from "../../img/items/sake.png"
import item4 from "../../img/items/pool.png"
import item5 from "../../img/items/metamask.png"
import item6 from "../../img/items/launch.png"
import item7 from "../../img/items/game.png"
import item8 from "../../img/items/airdrop.png"

import "./Cart.scss";




const items=[
    {img:item1,titre:"trade",id:1},
    {img:item2,titre:"sale",id:2},
    {img:item3,titre:"sake",id:3},
    {img:item4,titre:"pool",id:4},
    {img:item5,titre:"metamask",id:5},
    {img:item6,titre:"launch",id:6},
    {img:item7,titre:"game",id:7},
    {img:item8,titre:"airdrop",id:8}
]

const Cart = () => {
  return (
    <div className='carts'>
       <div className="c-cart">
         
           {items?.map(item =>(
            <div key={item.id} className="cart">
                <img src={item.img} className="c-img" alt="cart" />
                 
                <span className='c-titre'>{item.titre}</span>
            </div>
           ))}
            
       </div>
    </div>
  )
}

export default Cart