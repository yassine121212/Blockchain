import React from "react";
import "./Footer.scss";
import logo from "../../img/LOGO.jpeg";
import { BsTelegram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { SiDiscord } from "react-icons/si";
import { CgMail } from "react-icons/cg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="globalfott">
      <div className="footer">
        <div className="propos space">
          <div className="tit">About the game</div>
          <div className="ele">Docs</div>
        </div>
        <div className="commer space">
          <div className="tit">Dashboard</div>
          <Link className="link" to="/Ido">
            <div className="ele">Ido</div>
          </Link>
          <div className="ele">Airdrop</div>
        </div>
        <div className="compte space">
          <div className="tit">Community</div>
          <div className="commu">
            <a href="">
              {" "}
              <BsTelegram className="commu-n" />{" "}
            </a>
            <a href="">
              {" "}
              <BsTelegram className="commu-n" />{" "}
            </a>
            <a href="">
              {" "}
              <BsTwitter className="commu-n" />
            </a>
            <a href="">
              <SiDiscord className="commu-n" />
            </a>
          </div>
          <div className="tit2">Support</div>
          <div className="email">
            <CgMail className="comail" />
            <span className="suppor">support@foxfarmtoken.com</span>
          </div>
          <a href="">
            {" "}
            <BsTelegram className="commu-n" />
            <span className="teleg">Telegram</span>
          </a>
        </div>
      </div>
      <span className="copyright">&copy; copyright 2022</span>
    </div>
  );
};

export default Footer;
