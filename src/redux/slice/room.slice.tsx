import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRoom } from "../dto";

interface IReservationState {
  room: IRoom | null;
}

const initialState: IReservationState = {
  room: null,
};

export const roomSlice = createSlice({
  initialState,
  name: "roomSlice",
  reducers: {
    roomOwnerState: (state, action: PayloadAction<IRoom>) => {
      state.room = action.payload;
    },
  },
});

export default roomSlice.reducer;

export const { roomOwnerState } = roomSlice.actions;
