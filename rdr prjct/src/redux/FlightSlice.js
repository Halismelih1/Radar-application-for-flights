import { createSlice } from "@reduxjs/toolkit";
import { getFlights } from "./Actions";

const initialState = {
  flights: [],
  isLoading: true,
  isError: false,
};

const flightSlice = createSlice({
  name: "flightSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [getFlights.pending]: (state) => {
      state.isLoading = true;
    },
    [getFlights.fulfilled]: (state, Action) => {
      state.flights = Action.payload;
      state.isLoading = false;
      state.isError = false;
    },
    [getFlights.rejected]: (state) => {
      state.isLoading = false;
      state.isError = "oops,uçuş verilerini alırken bir hata oluştu";
    },
  },
});

export default flightSlice.reducer;
