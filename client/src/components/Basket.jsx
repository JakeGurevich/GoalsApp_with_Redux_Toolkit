import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  Divider,
  Typography,
  Button
} from "@mui/material";
import { ShoppingBasket } from "@mui/icons-material";
import BusketItem from '../components/BasketItem'
import { useSelector, useDispatch } from "react-redux";
import { open, close, addToCart } from "../features/cart/cartSlice";

const Basket = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isOpen, cart,total } = useSelector((state) => state.cart);
  console.log(isOpen);
  const calculateTotal=()=>{

  }
  return (
    <Drawer anchor="right" open={isOpen} onClose={() => dispatch(close())}>
      <List sx={{ width: "400px" }}>
        <ListItem>
          <ListItemIcon>
            <ShoppingBasket sx={{ml:2}}/>
            <ListItemText sx={{ml:2}}>Cart</ListItemText>
          </ListItemIcon>
        </ListItem>
        <Divider />
        {cart.length<1?(<ListItemText
        sx={{ml:2}}>Your Cart is emty !</ListItemText>):(cart.map((item) => (
          <BusketItem key={item.id} {...item}/>
        )))}
      </List>
      <Divider />
       <Typography variant='h6' sx={{ml:2,mt:2}}>Total price: {total} $</Typography>
       <Button size="medium"
          variant="outlined">Buy</Button>
    </Drawer>
  );
};

export default Basket;
