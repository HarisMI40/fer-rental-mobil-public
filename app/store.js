import { configureStore } from '@reduxjs/toolkit'
import stepPembayaranReducer from '../features/stepPembayaran/stepPembayaranSlice'
import customerOrderReducer from '../features/stepPembayaran/customerOrderSlice'
import authReducer from '../features/auth/authSlice'
export default configureStore({
  reducer: {
    stepPembayaran : stepPembayaranReducer,
    customerOrder : customerOrderReducer,
    auth : authReducer
  },
})