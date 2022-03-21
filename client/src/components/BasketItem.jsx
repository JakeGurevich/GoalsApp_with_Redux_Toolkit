import React from 'react'
import {
   
    ListItem,
    ListItemIcon,
    ListItemText,
   Button
  } from "@mui/material";
  import { Close } from "@mui/icons-material";
  import { removeFromCart } from "../features/cart/cartSlice";
  import { useSelector, useDispatch } from "react-redux";

const BasketItem = ({name,price,qty,id}) => {

    const dispatch = useDispatch()
  return (
    <ListItem>
        <ListItemText>
        Name: "{name}" , price: {price}$ , qty x {qty}
        </ListItemText>
        <ListItemIcon>
            <Button onClick ={()=>dispatch(removeFromCart({id}))}>
            <Close/>
            </Button>
        </ListItemIcon>
    </ListItem>
  )
}

export default BasketItem