import React from "react";
import style from "./Header.module.css";
import fi_arrow_left from "../../../../assets/icon_card/fi_arrow_left.svg";
const Header = () => {
  return (
    <div className={`container ${style.container}`}>
      <div className={`${style.wrapper}`}>
        <div className="">
          <img src={fi_arrow_left} />
          Pembayaran
        </div>

        <div className={`${style.step_pembayaran}`}>
          <div className={`${style.container_angka} ${style.active}`}>01</div>
          <div className={`${style.garis}`}></div>
          <div className={`${style.container_angka}`}>02</div>
          <div className={`${style.garis}`}></div>
          <div className={`${style.container_angka}`}>03</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
