import React from "react";
import style from "./Header.module.css";
import fi_arrow_left from "../../../../assets/icon_card/fi_arrow_left.svg";
import Fi_check_white from "../../../../assets/fi_check_white.jsx";
import { useDispatch, useSelector } from "react-redux";
import { updateCompleted, updateStep } from "../../../../../features/stepPembayaran/stepPembayaranSlice.js";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, completed, step, metode_pembayaran } = useSelector(
    (state) => state.stepPembayaran
  );

  let currentPath = "";
  if (step == 2) {
    currentPath = (
      <>
       <div style={{cursor : "pointer"}} onClick={() => {
        dispatch(updateStep(1));
        dispatch(updateCompleted(0));
       }}> <img src={fi_arrow_left} /> Pembayaran{" "}</div>
      </>
    );
  } else if (step == 3) {
    currentPath = (
      <>
      <div style={{cursor : "pointer"}} onClick={() => {
        dispatch(updateStep(2));
        dispatch(updateCompleted(1));
        navigate("/pembayaran");
       }}>
          <img src={fi_arrow_left} /> {metode_pembayaran.bank} Transfer
        </div>
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
