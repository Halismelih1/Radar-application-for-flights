import { configureStore } from "@reduxjs/toolkit";
import FlightSlice from "./FlightSlice";

export default configureStore({
  reducer: FlightSlice,
});
