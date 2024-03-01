import React from "react";
import HeaderMain from "../../components/HeaderMain/HeaderMain";
import Header from "./components/Header/Header";
import Card from "../../components/Card/Card";
import style from "./Pembayaran.module.css";

import CardDetailPesanan from "./components/CardDetailPesanan/CardDetailPesanan";
import PilihPembayaran from "./components/Step/PilihPembayaran/Index";
import Transfer from "./components/Step/Transfer/Transfer";
import { useSelector } from "react-redux";

const Pembayaran = () => {
  const step = useSelector((state) => state.stepPembayaran.step);

  let StepPembayaran = "Loading";
  if (step == 1) {
    StepPembayaran = <PilihPembayaran />;
  } else if (step == 2) {
    StepPembayaran = <Transfer />;
  }

  return (
    <div>
      <HeaderMain>
        <Header />
      </HeaderMain>
      <Card>
        <CardDetailPesanan />
      </Card>
      <main
        className={`${style.container} container d-flex justify-content-between gap-4`}
      >
        {StepPembayaran}
      </main>
    </div>
  );
};

export default Pembayaran;
