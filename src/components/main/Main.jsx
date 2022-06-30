import React from "react";
import logon from "../../img/logon.png";
import {Link} from 'react-router-dom';

import "./Main.scss";
const Main = () => {
  return (
    <div className="main">
      <div className="m-left">
        <img src={logon}/>
      </div>
      <div className="m-right">
        <div className="mrrr">
        <div className="title">About The Game</div>
        <div className="desc">
        FoxFarm, a unique P2E game that connects to the Metaverse and NFT in close contact with real life is based on BlockChain technology and is the perfect integration between DeFi & SocialFi
        </div>
        
        <div className="buttons">
        <Link className='link' to="/Ido"> <div className="butt1"><span className="textbut">IDO</span></div></Link>
          <div className="butt2"><span className="textbut">Airdrop</span></div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Main;
