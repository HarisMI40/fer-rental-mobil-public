import React from "react";
import style from "./Header.module.css";
import fi_arrow_left from "../../../../assets/icon_card/fi_arrow_left.svg";
import Fi_check_white from "../../../../assets/fi_check_white.jsx";
import { useSelector } from "react-redux";

const Header = () => {
  const { data, completed, step, metode_pembayaran } = useSelector(
    (state) => state.stepPembayaran
  );

  let currentPath = "";
  if (step == 2) {
    currentPath = (
      <>
        <img src={fi_arrow_left} /> Pembayaran{" "}
      </>
    );
  } else if (step == 3) {
    currentPath = (
      <>
        <img src={fi_arrow_left} /> {metode_pembayaran} Transfer
      </>
    );
  }
  return (
    <div className={`container ${style.container}`}>
      <div className={`${style.wrapper}`}>
        <div className="">{currentPath}</div>

        <div className={`${style.step_pembayaran}`}>
          {data.map((data) => (
            <React.Fragment key={data.nomor}>
              <div className="d-flex align-items-center gap-3">
                <div
                  className={`
                  ${style.container_angka} 
                  ${data.nomor <= step ? style.active : ""}`}
                >
                  {data.nomor <= completed ? <Fi_check_white /> : data.nomor}
                </div>

                <div>{data.deskripsi}</div>
              </div>

              {data.nomor < 3 && <div className={`${style.garis}`}></div>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
