import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Box,Button } from "@mui/material";
import { ShoppingBasket, Login, Logout } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import { open,close } from '../features/cart/cartSlice'

const HeaderMUI = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }}>Goals App</Typography>
          {user ? (
            <>
              <Button onClick ={()=>{navigate('/weather')}}  sx={{ color: 'white', display: 'block' }}>Weather</Button>
              <Button onClick ={()=>{navigate('/shop')}}  sx={{ color: 'white', display: 'block',ml:2 }}>Task Shop</Button>
              <IconButton color="inherit" onClick={onLogout} sx={{ ml: 3 }}>
                <Logout />
              </IconButton>
              <IconButton color="inherit" sx={{ ml: 3 }} onClick={()=> dispatch(open())}>
                <ShoppingBasket />
              </IconButton>
            </>
          ) : (
            <IconButton color="inherit">
              <Login />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default HeaderMUI;
