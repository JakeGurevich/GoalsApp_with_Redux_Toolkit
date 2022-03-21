import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  cart: [],
  isOpen: false,
  total:0
}



const calculateTotal=(cart)=>{
    let total = cart.reduce((prev,curr)=>{
        console.log(prev)
        console.log(curr)
      return prev+(curr.price *curr.qty)
    },0)
    console.log(total)
    return total
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
    addToCart(state,action){
        let item;
        const itemToAdd=action.payload
        const existedItem=state.cart.find(item=>item.id===itemToAdd.id)
    if(!existedItem){

         item={id:itemToAdd.id,name:itemToAdd.name,price:itemToAdd.price,poster:itemToAdd.poster,qty:1}
         state.cart.push(item)
    }else {
        existedItem.qty=existedItem.qty+1
    
    }
      state.total= calculateTotal(state.cart)
       },
       removeFromCart(state,action){
          state.cart= state.cart.filter(item=>item.id!==action.payload.id)
          state.total= calculateTotal(state.cart)
       }
  }
  
})

export const { open,close,addToCart ,removeFromCart} = cartSlice.actions
export default cartSlice.reducer