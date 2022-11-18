import React from "react";
import "./popup.css";
import metamask from '../assets/metamask.png';
import walletconnect from '../assets/walletconnect.png';
import x from '../assets/x.jpg';
import vector from '../assets/vector.png';


const Popup = () => {
  return (
    <div className="popup">
      <div className="pop-content">
        <div className="pop-box">
        <div className="top">
        <h3>Connect wallet</h3><img src={x} alt="x-logo" />
        </div>
   
        <p>Connect your preferred wallet:</p>
        <div className="metamask">
          <img width={40} src={metamask} alt="metamask-logo" /><h4>Metamask</h4>
          <img className="vector-icon" src={vector} alt="vector-logo" />
        </div>
        <div className="walletconnect">
          <img src={walletconnect} alt="walletconnect-logo" /><h4>Walletconnect</h4>
          <img className="vector-icon" src={vector} alt="vector-logo" />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Popup;