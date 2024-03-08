import { useState } from "react";

import PembayaranItem from "./PembayaranItem";
import { useDispatch } from "react-redux";
import { updateMetodePembayaran } from "../../../../../../../../features/stepPembayaran/stepPembayaranSlice";
import dataRekening from "../../../../../../../../constant/dataRekening";

const ListPembayaran = () => {
  const dispatch = useDispatch();

  const [pembyaranAktif, setPembayaranAktif] = useState();
  const dataPembayaran = dataRekening;

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
