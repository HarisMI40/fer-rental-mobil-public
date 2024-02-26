import React from "react";
import style from "./CardDetailPesanan.module.css";
const CardDetailPesanan = () => {
  return (
    <div>
      {" "}
      <h6>Detail Pesananmu</h6>
      <div className={`${style.container_detail_pesanan}`}>
        <div>
          <p className="m-0">Nama / Tipe Mobil</p>
          <p className="text-muted">Innova</p>
        </div>
        <div>
          <p className="m-0">Kategori</p>
          <p className="text-muted">Innova</p>
        </div>
        <div>
          <p className="m-0">Tanggal Mulai Sewa</p>
          <p className="text-muted">Innova</p>
        </div>
        <div>
          <p className="m-0">Tanggal Akhir Sewa</p>
          <p className="text-muted">Innova</p>
        </div>
      </div>
    </div>
  );
};

export default CardDetailPesanan;
