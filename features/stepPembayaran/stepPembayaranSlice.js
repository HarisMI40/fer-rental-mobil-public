import { createSlice } from "@reduxjs/toolkit";

const stepPembayaran = createSlice({
  name : "stepembayaran",
  initialState : 
  
  {
    step : 1,
    completed : 0,
    metode_pembayaran : "",
    data : [
    {
      "nomor" : "1",
      "deskripsi" : "Pilih Metode",
    },
    {
      "nomor" : "2",
      "deskripsi" : "Bayar",
    },
    {
      "nomor" : "3",
      "deskripsi" : "TIket",
    }
  ]
},
  reducers : {
    updateStep : (state, action) => {
      state.step = action.payload
      // state.completed += 1
      // state.data[state.completed - 1].complete = true
      // console.log(state.data)
    },
    updateCompleted : (state, action) => {
      state.completed = action.payload
    },

    updateMetodePembayaran : (state, action) => {
      state.metode_pembayaran = action.payload;
      // console.log(state.metode_pembayaran)
    }

  }
});

export const {updateStep, updateCompleted, updateMetodePembayaran} = stepPembayaran.actions 
export default stepPembayaran.reducer