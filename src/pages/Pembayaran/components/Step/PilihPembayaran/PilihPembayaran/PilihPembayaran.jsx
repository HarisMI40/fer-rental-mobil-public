import React, { useState } from "react";
import style from "./PilihPembayaran.module.css";
import ListPembayaran from "./ListPembayaran/ListPembayaran";
import Sidebar from "../Sidebar/Sidebar";
const PilihPembayaran = () => {
  return (
    <div className={`${style.content} border p-4`}>
      <h4>Pilih Bank Transfer</h4>
      <p>
        Kamu bisa membayar dengan transfer melalui ATM, Internet Banking atau
        Mobile Banking
      </p>

      <div className={`mt-5 d-flex flex-column gap-3`}>
        <ListPembayaran />
      </div>
    </div>
  );
};

export default PilihPembayaran;
