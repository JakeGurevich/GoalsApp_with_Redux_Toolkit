import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import goalReducer from '../features/goals/goalSlice'
import cartReducer from '../features/cart/cartSlice'
import weatherReducer from '../features/weather/weatherSlice'
import dataReducer from '../features/data/dataSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    goals: goalReducer,
    cart:cartReducer,
    weather:weatherReducer,
    data:dataReducer
  },
})
