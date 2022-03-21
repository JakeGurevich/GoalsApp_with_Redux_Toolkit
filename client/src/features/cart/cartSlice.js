import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  cart: [],
  isOpen: false,
}




export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    open (state,action) {
        console.log(state)
        console.log(action)
        state.isOpen=true
    },
    close(state) {state.isOpen=false},
    close(state) {state.isOpen=false},
    addToCart(state,action){state.cart.push(action.payload)}
  }
  
})

export const { open,close,addToCart } = cartSlice.actions
export default cartSlice.reducer