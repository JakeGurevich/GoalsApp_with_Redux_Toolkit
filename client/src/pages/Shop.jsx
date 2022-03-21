import React,{useEffect,useState}from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Grid,Box,Typography } from "@mui/material";
import {products} from '../data/products'
import ListItem from '../components/ListItem'
import Basket from '../components/Basket'


const Shop = () => {
const [items,setItems]= useState([...products])
    useEffect(()=>{

    })
  return (
      <>
    <Link to='/' >
            
            Go Back
        
         </Link>
    <Typography variant="h2" sx={{my:1}}>Shop</Typography>
    <Box sx={{ flexGrow: 1 ,mt:3}}>
    <Grid container spacing={2}>
        {items.map((item) => (
        <ListItem key={item.id} item={item}/>
        )

        )}
    </Grid>
    </Box>
    <Basket/>
    </>
  )
}

export default Shop