import { createSlice } from "@reduxjs/toolkit";

const customerOrder = createSlice({
  name : "stepembayaran",
  initialState : 
  
  {
    id_order : "554324",
    start_rent_at : "2022-01-01",
    finish_rent_at : "2022-01-02",
    car_id : 1,
    nama_mobil : "Ayla",
    kapasitas : "4 - 5 orang",
    kategori : "innova",
    harga : 300000,
    total_harga : 300000,
    status : false,
    user_id: 1,
    payment_slip : ""

  },
  reducers : {
    // updateMetodePembayaran : (state, action) => {
    //   state.metode_pembayaran = action.payload;
    // }
  }
});

export const {updateMetodePembayaran} = customerOrder.actions 
export default customerOrder.reducer