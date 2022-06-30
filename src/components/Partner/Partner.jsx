import React from 'react'

import img1 from "../../img/partners/bscan.png"
import img2 from "../../img/partners/binancesmartchaine.png"
import img3 from "../../img/partners/panke.png"
import img4 from "../../img/partners/Pocoin.png"
import img5 from "../../img/partners/coinmarket.png"
import img6 from "../../img/partners/coingeko.png"
const Partners=[
    {image:img1,statut:""},
    {image:img2,statut:""},
    {image:img3,statut:""},
    {image:img4,statut:""},
    {image:img5,statut:"soon"},
    {image:img6,statut:"soon"},
];
import "./Partner.scss"
const Partner = () => {
    
    return (
        <div className='partner'>
        <div className="p-left">
            <div className="p1">FoxFarm</div>
            <div className="p2">Partner</div>
        </div>
        <div className="p-right">
            <div className="p-item">
            {Partners.map(partner => (
                <>
            <img src={partner.image} className={partner.image==img5?"p-img zid":'p-img'} alt="bscan" />
                <span>{partner.statut}</span>
            </>
            ))
            }
            </div>
        </div>
    </div>
  )
}
export default Partner;
