import { createSlice } from "@reduxjs/toolkit";

const stepPembayaran = createSlice({
  name : "stepembayaran",
  initialState : 
  
  {
    step : 1,
    completed : 0,
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
    }
  }
});

export const {updateStep, updateCompleted} = stepPembayaran.actions 
export default stepPembayaran.reducer