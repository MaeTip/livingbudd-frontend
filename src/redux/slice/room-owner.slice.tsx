import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRoomOwner } from "../dto";

interface IReservationState {
  roomOwner: IRoomOwner | null;
}

const initialState: IReservationState = {
  roomOwner: null,
};

export const roomOwnerSlice = createSlice({
  initialState,
  name: "roomOwnerSlice",
  reducers: {
    roomOwnerState: (state, action: PayloadAction<IRoomOwner>) => {
      state.roomOwner = action.payload;
    },
  },
});

export default roomOwnerSlice.reducer;

export const { roomOwnerState } = roomOwnerSlice.actions;
