import React from "react";
import spo from "../../img/sponso.png";
import "./Main.scss";
const Main = () => {
  return (
    <div className="main">
      <div className="m-left"></div>
      <div className="m-right">
        <div className="title">About The Game</div>
        <div className="desc">
        FoxFarm, a unique P2E game that connects to the Metaverse and NFT in close contact with real life is based on BlockChain technology and is the perfect integration between DeFi & SocialFi
        </div>
        
        <div className="buttons">
          <div className="butt1"><span className="textbut">IDO Event</span></div>
          <div className="butt2"><span className="textbut">Airdrop</span></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
