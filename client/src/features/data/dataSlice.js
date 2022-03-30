import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from 'axios'

const initialState = {
  data: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Get user goals
export const getData = createAsyncThunk(
  "data/get",
  async (_, thunkAPI) => {
    
    try {
      const api = "http://localhost:5000/api/data";
      // const tokenApiEnv = process.env.REACT_APP_WEATHER_API_KEY;
      
     
      
      //let option = `current.json?key=${tokenApi.key}&q=${city}&aqi=no`;
      const response =await axios.get(api );
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

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder

      .addCase(getData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = action.payload;
      })
      .addCase(getData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = dataSlice.actions;
export default dataSlice.reducer;
