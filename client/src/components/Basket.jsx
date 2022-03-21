import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  Divider,
} from "@mui/material";
import { ShoppingBasket } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { open, close, addToCart } from "../features/cart/cartSlice";

const Basket = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isOpen, cart } = useSelector((state) => state.cart);
  console.log(isOpen);
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
          <ListItemText
          sx={{ml:2}}>{item.name}</ListItemText>
        )))}
      </List>
    </Drawer>
  );
};

export default Basket;
