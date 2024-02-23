import React from "react";
import style from "./Header.module.css";
const Header = () => {
  return (
    <div className={`container ${style.container}`}>
      <div className={`${style.wrapper}`}>
        <p className="">Pembayaran</p>
        <div className={`${style.step_pembayaran}`}>
          <div>01</div>
          <div>02</div>
          <div>03</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
