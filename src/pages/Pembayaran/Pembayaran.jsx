import React from "react";
import HeaderMain from "../../components/HeaderMain/HeaderMain";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import style from "./Pembayaran.module.css";

const Pembayaran = () => {
  return (
    <div>
      <HeaderMain>
        <Header />
      </HeaderMain>
      <Card />

      <main className="container d-flex justify-content-between gap-4">
        <div className={`${style.content} border p-4`}>
          <h1>Pilih Bank Transfer</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            aperiam fugiat. Modi possimus illo temporibus consequuntur
          </p>
        </div>
        <div className={`${style.sidebar} border p-4`}>
          <div>
            <b>Innova</b>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Pembayaran;
