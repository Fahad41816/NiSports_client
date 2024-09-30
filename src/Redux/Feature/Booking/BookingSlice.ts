import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  date: null, 
  startTime: null,
  endTime: null,
  facility: null,
  pricePerHour: null
};

const BookingSlice = createSlice({
  name: "Booking",
  initialState,
  reducers: {
    AddBookingData: (state, action) => {
        state.date = action.payload.date
        state.startTime = action.payload.startTime
        state.endTime = action.payload.endTime
        state.facility = action.payload.facility
        state.pricePerHour = action.payload.pricePerHour
    }
  }
});

export const {AddBookingData} = BookingSlice.actions

export default BookingSlice;
