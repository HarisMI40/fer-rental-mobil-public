import React from "react";
import fi_check from "../../../../../../../assets/fi_check.svg";
import style from "../PilihPembayaran.module.css";
const PembayaranItem = ({
  pembayaran,
  clickPembayaranHandler,
  pembyaranAktif,
}) => {
  return (
    <div
      className={`${style.containerPilihPembayaran} d-flex align-items-center gap-3 border-bottom py-3 px-2`}
      onClick={() => clickPembayaranHandler(pembayaran.bank)}
    >
      <div className={`card p-2 d-inline-block w-25 text-center`}>
        {pembayaran.bank}
      </div>
      <div>{pembayaran.deskripsi}</div>
      <div className="ms-auto">
        {pembyaranAktif === pembayaran.bank ? <img src={fi_check} /> : ""}
      </div>
    </div>
  );
};

export default PembayaranItem;
