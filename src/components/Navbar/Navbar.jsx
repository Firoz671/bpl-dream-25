import React from 'react';
import navImg from "../../assets/logo.png"
import navCoin from "../../assets/Currency.png"
const Navbar = ({availableBalance}) => {
    return (
<div className="navbar mt-5 max-w-[1200px] mx-auto">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl"><img src={navImg} alt="" /></a>
      </div>
      <div className="flex items-center gap-[15px]">
        <span>{availableBalance}</span>
        <span>Coin</span>
        <img src={navCoin} alt="" />
      </div>
    </div>
    );
};

export default Navbar;