import React from "react";
import spo from "../../img/sponso.png";
import "./Main.scss";
const Main = () => {
  return (
    <div className="main">
      <div className="m-left"></div>
      <div className="m-right">
        <div className="title">Blockchain network for the world</div>
        <div className="desc">
          FLAG - a decentralized blockchain network of the world-scale for NFT
          Gamfi Metaverse Web3 applications.
        </div>
        <div className="sponso">
          <img src={spo} alt="spo" />
          <p>Audited by TechRate</p>
        </div>
        <div className="buttons">
          <div className="butt1"><span className="textbut">IDO Event</span></div>
          <div className="butt2"><span className="textbut">Dashboard</span></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
