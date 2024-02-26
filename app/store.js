import { configureStore } from '@reduxjs/toolkit'
import stepPembayaranReducer from '../features/stepPembayaran/stepPembayaranSlice'
export default configureStore({
  reducer: {
    stepPembayaran : stepPembayaranReducer,
  },
})