import React from "react";
import HeaderMain from "../../components/HeaderMain/HeaderMain";
import Header from "./components/Header/Header";
import Card from "../../components/Card/Card";
import style from "./Pembayaran.module.css";

import CardDetailPesanan from "./components/CardDetailPesanan/CardDetailPesanan";
import PilihPembayaran from "./components/Step/PilihPembayaran";
import Transfer from "./components/Step/Transfer/Transfer";

const Pembayaran = () => {
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
        {/* <PilihPembayaran /> */}

        <Transfer />
      </main>
    </div>
  );
};

export default Pembayaran;
