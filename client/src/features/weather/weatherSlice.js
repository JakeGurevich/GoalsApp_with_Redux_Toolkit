import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from '../goals/goalService'
import axios from 'axios'

const initialState = {
  forecast: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Get user goals
export const getWeather = createAsyncThunk(
  "forecast/get",
  async (city, thunkAPI) => {
    
    try {
      const api = "http://api.weatherapi.com/v1/";
      // const tokenApiEnv = process.env.REACT_APP_WEATHER_API_KEY;
      
      const token = thunkAPI.getState().auth.user.token 
      const tokenApi =await Api.getApi() ;
      
      let option = `current.json?key=${tokenApi.key}&q=${city}&aqi=no`;
      const response =await axios.get(api + option);
      console.log(response.data)
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder

      .addCase(getWeather.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getWeather.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.forecast = action.payload;
      })
      .addCase(getWeather.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = weatherSlice.actions;
export default weatherSlice.reducer;
