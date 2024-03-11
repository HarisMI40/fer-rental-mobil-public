import { createSlice } from "@reduxjs/toolkit";
import dataRekening from "../../constant/dataRekening";

const stepPembayaran = createSlice({
  name: "stepembayaran",
  initialState: {
    step: 1,
    completed: 0,
    metode_pembayaran: {
      bank : "",
      deskripsi : "",
      no_rek : ""
    },
    data: [
      {
        nomor: "1",
        deskripsi: "Pilih Metode",
      },
      {
        nomor: "2",
        deskripsi: "Bayar",
      },
      {
        nomor: "3",
        deskripsi: "TIket",
      },
    ],
  },
  reducers: {
    updateStep: (state, action) => {
      state.step = action.payload;
      // state.completed += 1
      // state.data[state.completed - 1].complete = true
      // console.log(state.data)
    },
    updateCompleted: (state, action) => {
      state.completed = action.payload;
    },

    updateMetodePembayaran: (state, action) => {
      let rekeningDipilih = dataRekening.find(
        (rek) => rek.bank == action.payload
      );
      state.metode_pembayaran = rekeningDipilih;
    },
  },
});

export const { updateStep, updateCompleted, updateMetodePembayaran } =
  stepPembayaran.actions;
export default stepPembayaran.reducer;
