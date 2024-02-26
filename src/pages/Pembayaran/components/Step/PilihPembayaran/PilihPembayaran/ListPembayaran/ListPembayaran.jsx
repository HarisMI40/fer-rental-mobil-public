import React, { useState } from "react";

import PembayaranItem from "./PembayaranItem";

const ListPembayaran = () => {
  const dataPembayaran = [
    { bank: "BCA", deskripsi: "BCA Transfer" },
    { bank: "BNI", deskripsi: "BNI Transfer" },
    { bank: "Mandiri", deskripsi: "Mandiri Transfer" },
  ];
  const [pembyaranAktif, setPembayaranAktif] = useState();

  function clickPembayaranHandler(bank) {
    setPembayaranAktif(bank);
  }

  return dataPembayaran.map((pembayaran) => (
    <PembayaranItem
      pembayaran={pembayaran}
      clickPembayaranHandler={clickPembayaranHandler}
      pembyaranAktif={pembyaranAktif}
    />
  ));
};

export default ListPembayaran;
