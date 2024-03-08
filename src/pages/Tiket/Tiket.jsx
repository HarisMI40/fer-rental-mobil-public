import React, {useEffect} from "react";
import {Container} from "react-bootstrap";
import HeaderMain from "../../components/HeaderMain/HeaderMain";
import Header from "../Pembayaran/components/Header/Header";
import Footer from "../../components/Footer/Footer";
// import Footer from "../../components/Footer/Footer";

import icon_success from "../../assets/success.svg";
import style from "./Tiket.module.css";
import fi_download from "../../assets/fi_download.svg";
import etiket from "../../assets/etiket/etiket.png";
import {useDispatch} from "react-redux";
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

      {/* belum ditambah shadow di box*/}
      <div className="d-flex align-items-center justify-content-center mt-5  flex-column gap-5 ">
        <div className="logo text-center">
          <img src={icon_success} />
          <h5 className="text-center my-3 fw-bold">Pembayaran Berhasil</h5>

          <p className="text-muted">
            Tunjukkan invoice ini ke petugas BCR di titik temu.
          </p>
        </div>

        <div className="border w-50 p-4 shadow-sm rounded">
          <div className="d-flex justify-content-between align-items-start">
            <div>
              <p className="fw-bold">Invoice</p>
              <p className="text-muted fw-bold mt-2">*no invoice</p>
            </div>
            <a
              className={`${style.button_unduh} btn btn-outline-primary d-flex align-items-center gap-2 fw-bold`}
              href="https://www.jurnal.id/wp-content/uploads/2021/09/contoh-nota-kosong-434x628.png"
              target="_blank"
              rel="noreferrer"
            >
              <img src={fi_download} />
              Unduh
            </a>
          </div>
          <div className={`${style.pdf_preview} mt-5  text-center `}>
            <img src={etiket} className={style.marginImage} />
          </div>
        </div>
      </div>
      {/* <Container className={style.containerFooter}>
        <Footer />
      </Container> */}
      <Container className={style.containerFooter}>
        <Footer />
      </Container>
    </div>
  );
};

export default Tiket;
