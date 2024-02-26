import React, { useEffect } from "react";
import HeaderMain from "../../components/HeaderMain/HeaderMain";
import Header from "../Pembayaran/components/Header/Header";

import icon_success from "../../assets/success.svg";
import style from "./Tiket.module.css";
import fi_download from "../../assets/fi_download.svg";
import { useDispatch } from "react-redux";
import {
  updateCompleted,
  updateStep,
} from "../../../features/stepPembayaran/stepPembayaranSlice";

const Tiket = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateStep(3));
    dispatch(updateCompleted(2));
  }, []);

  return (
    <div>
      <HeaderMain>
        <Header />
      </HeaderMain>

      <div className="d-flex align-items-center justify-content-center mt-4 flex-column gap-5">
        <div className="logo text-center">
          <img src={icon_success} />
          <h5 className="text-center my-3 fw-bold">Pembayaran Berhasil</h5>

          <p className="text-muted">
            Tunjukkan invoice ini ke petugas BCR di titik temu.
          </p>
        </div>

        <div className="border w-75 p-4">
          <div className="d-flex justify-content-between align-items-start">
            <div>
              <p className="fw-bold">Invoice</p>
              <p className="text-muted fw-bold mt-2">*no invoice</p>
            </div>
            <button
              className={`${style.button_unduh} btn btn-outline-primary d-flex align-items-center gap-2 fw-bold`}
            >
              <img src={fi_download} />
              Unduh
            </button>
          </div>
          <div className={`${style.pdf_preview} mt-5`}></div>
        </div>
      </div>
    </div>
  );
};

export default Tiket;
