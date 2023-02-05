import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IReservation } from "../dto/reservation.dto";

interface IReservationState {
  reservation: IReservation | null;
}

const initialState: IReservationState = {
  reservation: null,
};

export const reservationSlice = createSlice({
  initialState,
  name: "reservationSlice",
  reducers: {
    reservationState: (state, action: PayloadAction<IReservation>) => {
      state.reservation = action.payload;
    },
  },
});

export default reservationSlice.reducer;

export const { reservationState } = reservationSlice.actions;
