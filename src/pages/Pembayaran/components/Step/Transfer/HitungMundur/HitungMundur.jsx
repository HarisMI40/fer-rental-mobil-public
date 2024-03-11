import React, { useEffect, useState } from "react";
import style from "../DataTransfer/DataTransfer.module.css";
import dataSelisihWaktu from "../../../../../../../helpers/selisihWaktuNantiDanSekarang";

const HitungMundur = () => {
    const [waktu, setWaktu] = useState({
        jam : 0,
        menit : 0,
        detik : 0
    })


    // const {jam, menit, detik} = dataSelisihWaktu();

    useEffect(() => {
     
        setInterval(() => {
            const {waktu_dibuat} = JSON.parse(localStorage.getItem("dataOrder"));

            // Ambil tanggal created_at
            const createdAt = new Date(waktu_dibuat);
        
            // Buat variabel tanggal_1_hari_setelah_created_at
            const oneDayAfterCreatedAt = new Date(
              createdAt.getTime() + 24 * 60 * 60 * 1000
            );
        
            // Buat variabel waktu sekarang
            const currentTime = new Date();

            
            const {jam, menit, detik} = dataSelisihWaktu(oneDayAfterCreatedAt, currentTime);
            setWaktu({jam, menit, detik})
            // console.log("test")

            // console.log(jam)
        }, 1000);
    }, []);

  return (
    <div className={`${style.boxs} d-flex justify-content-betwen gap-2`}>
      <div className="box">{waktu.jam}</div> :<div className="box">{waktu.menit}</div> :{" "}<div className="box">{waktu.detik}</div>
    </div>
  );
};

export default HitungMundur;
