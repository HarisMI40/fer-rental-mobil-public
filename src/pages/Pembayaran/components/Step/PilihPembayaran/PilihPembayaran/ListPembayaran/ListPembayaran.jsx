import React, { useState } from "react";

import PembayaranItem from "./PembayaranItem";
import { useDispatch } from "react-redux";
import { updateMetodePembayaran } from "../../../../../../../../features/stepPembayaran/stepPembayaranSlice";

const ListPembayaran = () => {
  const dispatch = useDispatch();
  const dataPembayaran = [
    { bank: "BCA", deskripsi: "BCA Transfer" },
    { bank: "BNI", deskripsi: "BNI Transfer" },
    { bank: "Mandiri", deskripsi: "Mandiri Transfer" },
  ];
  const [pembyaranAktif, setPembayaranAktif] = useState();

  function clickPembayaranHandler(bank) {
    setPembayaranAktif(bank);
    dispatch(updateMetodePembayaran(bank));
  }

  return dataPembayaran.map((pembayaran, index) => (
    <PembayaranItem
      key={index}
      pembayaran={pembayaran}
      clickPembayaranHandler={clickPembayaranHandler}
      pembyaranAktif={pembyaranAktif}
    />
  ));
};

export default ListPembayaran;
