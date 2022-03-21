import React, { useState,useEffect } from "react";
import {toast} from "react-toastify"

import { Link, useNavigate } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
  IconButton,
  Box,
  Button,
  Divider,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { getWeather,reset} from "../features/weather/weatherSlice";

const Weather = () => {
  const [city, setCity] = useState("Jerusalem");
  const dispatch = useDispatch();
  const { isError, forecast ,message} = useSelector((state) => state.weather);

  const handleClick = () => {
    dispatch(getWeather(city));
    console.log(forecast);
  };
useEffect(()=>{
if(isError)
toast.error(message)
dispatch(reset())

},[isError])
  return (
    <>
      <Typography variant='h3' sx={{mt:2,mb:3}}>Weather</Typography>
      <TextField
        id="standard-basic"
        label="Standard"
        variant="standard"
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
          console.log(city)
        }}
      />
      <Button onClick={handleClick}>Get Weather</Button>
      <Box>
        <List>
        {forecast.location && <><ListItem>
            <ListItemText>Country : {forecast.location.country}</ListItemText>
            
        </ListItem>
        <ListItem>
        
            <ListItemText>Temperature in {forecast.location.name} is {forecast.current.temp_c} Celcius</ListItemText>
        </ListItem>
        <ListItem>
        <ListItemText>Humidity in {forecast.location.name} is {forecast.current.humidity} </ListItemText>
        </ListItem></>}
        </List>
      </Box>
    </>
  );
};

export default Weather;
