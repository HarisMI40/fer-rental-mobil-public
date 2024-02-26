import React from "react";
import style from "./Sidebar.module.css";
const Sidebar = () => {
  return (
    <div className={`${style.container} border p-4 align-self-start`}>
      {/* <div>Klik konfirmasi pembayaran untuk mempercepat proses pengecekan</div> */}

      <div>
        <div className="d-flex justify-content-between">
          <h6>Konfirmasi Pembayaran</h6>
          <div className={`${style.boxs} d-flex justify-content-betwen gap-2`}>
            <div className="box">23</div> :<div className="box">55</div>
          </div>
        </div>
        <div className="mt-4">
          <p>
            Terima kasih telah melakukan konfirmasi pembayaran. Pembayaranmu
            akan segera kami cek tunggu kurang lebih 10 menit untuk mendapatkan
            konfirmasi.
          </p>

          <p className="my-4">Upload Bukti Pembayaran</p>

          <p>
            Untuk membantu kami lebih cepat melakukan pengecekan. Kamu bisa
            upload bukti bayarmu
          </p>
        </div>

        <div className={`${style.upload} my-4`}></div>
      </div>

      <div class="d-grid gap-2 mt-4">
        <button class="btn btn-success" type="button">
          Upload
          {/* 
          pertama
           Konfirmasi Pembayaran 

           Jika sudah klik Pembayaran
            Upload

          Jika sudah klik upload
            Konfirmasi yang mengarah ke step 3
          */}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
