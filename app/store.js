import { configureStore } from '@reduxjs/toolkit'
import stepPembayaranReducer from '../features/stepPembayaran/stepPembayaranSlice'
import customerOrderReducer from '../features/stepPembayaran/customerOrderSlice'
export default configureStore({
  reducer: {
    stepPembayaran : stepPembayaranReducer,
    customerOrder : customerOrderReducer
  },
})