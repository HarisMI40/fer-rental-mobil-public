import { useEffect, useRef, useState } from "react";
import style from "./Sidebar.module.css";
import axios from "axios";
import dataSelisihWaktu from "../../../../../../../helpers/selisihWaktuNantiDanSekarang";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const isKonfirmasiPembayaran = localStorage.getItem("waktu_konfirmasi_pembayaran");
  const [isClickedKonfirmasiPembayaran, setClickedKonfirmasiPembayaran] = useState(isKonfirmasiPembayaran ? true : false)

  const handleKonfirmasiPembayaran = () => {
    localStorage.setItem("waktu_konfirmasi_pembayaran", new Date());
    setClickedKonfirmasiPembayaran(true)
  }

  const handleCancelPembayaran = () => {
    setClickedKonfirmasiPembayaran(false)
  }
  return (
    <div className={`${style.container} border p-4 align-self-start`}>
      <div>

      {
      isClickedKonfirmasiPembayaran 
        ? <KonfirmasiPembayaranSection handleCancelPembayaran={handleCancelPembayaran}/> 
        : (
            <>
              <p>Klik konfirmasi pembayaran untuk mempercepat proses pengecekan</p>
              <div className="d-grid gap-2 mt-4">
                <button
                  className={`btn btn-success mt-4 ${style.button}`}
                  type="button"
                  onClick={handleKonfirmasiPembayaran}
                >
                  Konfirmasi Pembayaran
                </button>
              </div>
            </>
        )}
      </div>
    </div>
  );
};

const KonfirmasiPembayaranSection = ({handleCancelPembayaran}) => {
  const [imageUpload, setImageUpload] = useState();
  const [imagePreview, setImagePreview] = useState();
  const [waktu, setWaktu] = useState({menit : 0, detik : 0})
  const navigate = useNavigate();

  const inputFotoRef = useRef(null);

  const { idOrder } = JSON.parse(localStorage.getItem("dataOrder"));

  function handleChangeImage(e) {
    const fileImage = e.target.files[0];
    setImageUpload(fileImage);
    setImagePreview(URL.createObjectURL(fileImage));
    e.target.value = null;
  }

  async function handleUpload() {

    const formData = new FormData();

    formData.append("slip", imageUpload)
    const response = await axios.put(
      `https://api-car-rental.binaracademy.org/customer/order/${idOrder}/slip`, formData,
      {
        headers: {
          access_token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTcxMDA1NTgwNX0.qdkF6BrmMQ8N9pYuqAtjT-2vB7yyVkpDBP5EqHg0-h8"
          },
      }
    );
    
    alert("Berhasil Upload Bukti Pembayaran")
    navigate("/tiket")
  }

  
  function searchFotoHandler(){
    inputFotoRef.current.click()
  }

  useEffect(() => {
    
    const countDown = setInterval(countDownProses, 1000);

    function countDownProses() {
      const waktu_konfirmasi_pembayaran = localStorage.getItem("waktu_konfirmasi_pembayaran")

      const createdAt = new Date(waktu_konfirmasi_pembayaran);
  
      const sepuluh_menit_setelah_konfirmasi_pembayaran = new Date(createdAt.getTime() + (10 * 60 * 1000));
  
      const currentTime = new Date();

      const { menit, detik} = dataSelisihWaktu(sepuluh_menit_setelah_konfirmasi_pembayaran, currentTime);

      if(menit < 0){
        localStorage.removeItem('waktu_konfirmasi_pembayaran');
        clearInterval(countDown);
        handleCancelPembayaran();
        return 
      }
      
      setWaktu({menit, detik});
    }
  }, [])
  
  return (
    <>
      <div className="d-flex justify-content-between">
        <h6>Konfirmasi Pembayaran</h6>
        <div className={`${style.boxs} d-flex justify-content-betwen gap-2`}>
          <div className="box">{waktu.menit}</div> :<div className="box">{waktu.detik}</div>
        </div>
      </div>
      <div className="mt-4">
        <p>
          Terima kasih telah melakukan konfirmasi pembayaran. Pembayaranmu akan
          segera kami cek tunggu kurang lebih 10 menit untuk mendapatkan
          konfirmasi.
        </p>

        <p className="my-4">Upload Bukti Pembayaran</p>

        <p>
          Untuk membantu kami lebih cepat melakukan pengecekan. Kamu bisa upload
          bukti bayarmu
        </p>
      </div>

      <div
        className={`${style.upload} my-4`}
        onClick={searchFotoHandler}
      >
        <img src={imagePreview} width="80%" />
      </div>
      <input
        ref={inputFotoRef}
        type="file"
        className={`${style.inputFoto}`}
        name="foto_bukti_pembayaran"
        accept="image/png, image/jpeg"
        onChange={handleChangeImage}
      />

      <div className="d-grid gap-2 mt-4">
        <button
          className={`btn btn-success ${style.button}`}
          type="button"
          onClick={imagePreview ? handleUpload : searchFotoHandler}
        >
          {imagePreview ? "Konfirmasi Pembayaran" : "Upload"}
        </button>
      </div>
    </>
  );
};

export default Sidebar;
