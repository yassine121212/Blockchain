import React from 'react'
import bnb from "../../img/bnb.svg"
import "./Exchange.scss"
const Exchange = () => {
  return (
    <div className='exchange'>
        <div className="element">
        <div className="tags-up">
            <div className="tag-up">
            <img src={bnb} className="logo-bnb" alt="bnb" />
            <span className='curr-bnb'>BNB</span>
            </div>
        </div>
        <div className="tags-bottom">
           <div className="tag-curr">
              <span>Currency</span>
              <span>Balance: 0 BNB</span>
           </div>
           <div className="tag-balance">
               <div className="bal-lab">
                <span className='name-curr'>BNB</span>
               </div>
               <div className="bal-lab">
                <input className="bal-input" type="text" placeholder='0 BNB'></input>
                <span className="Max">Max</span>
               </div>
           </div>
           <div className="tag-Recieve">
           <div className="tag-curr">
            <span>Recieve</span>
            </div>
           <div className="tag-balance">
               <div className="bal-lab">
                <span className='name-curr'>FLAG</span>
               </div>
               <div className="bal-lab">
                <input className="bal-input" type="text" value={0} ></input>
                </div>
            </div>
            </div>
            <div className="tag-convert">
              <div className="txt-convert">
               <span className='txttoconvert'>1 BNB ~ 1385.6181 FLAG</span>
              </div>
            </div>
            <div className="tag-button">
              <button className='btn-ido' >Buy</button> 
            </div>
           </div>
           </div>
    </div>
  )
}

export default Exchange