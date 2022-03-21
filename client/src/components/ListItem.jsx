import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  Button
} from "@mui/material";
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../features/cart/cartSlice'

const ListItem = ({ item }) => {

    const dispatch = useDispatch();
  return (
    <Grid item xs={6} md={4}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={item.poster}
          alt={item.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
           {item.name}
          </Typography>
          <Typography variant="body1" color="text.secondary">
          {item.price}$
        </Typography>
        </CardContent>
        <CardActions>
          <Button size="medium"
          variant="outlined" onClick={()=>{dispatch(addToCart(item))}}>Add </Button>
          
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ListItem;
