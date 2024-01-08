import React from "react";
import "./CtaBanner.css";
const CtaBanner = () => {
  return (
    <div className="d-flex justify-content-center">
        <div className="kotak">
            <div className="judul"><h1 className="text-center">Sewa Mobil di (Lokasimu) Sekarang</h1></div>
            <div className="deskripsi text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </div>

            <button className="btn btn-success">Mulai Sewa Mobil</button>
        </div>

    </div>
  );
};

export default CtaBanner;
