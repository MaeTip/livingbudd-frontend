import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { authApi } from "./api/auth.api";
import { userApi } from "./api/user.api";
import { reservationApi } from "./api/reservation.api";
import { roomOwnerApi } from "./api/room-owner.api";
import userReducer from "./slice/user.slice";
import authReducer from "./slice/auth.slice";
import reservationReducer from "./slice/reservation.slice";
import roomOwnerReducer from "./slice/room-owner.slice";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [reservationApi.reducerPath]: reservationApi.reducer,
    [roomOwnerApi.reducerPath]: roomOwnerApi.reducer,
    reservation: reservationReducer,
    roomOwner: roomOwnerReducer,
    user: userReducer,
    auth: authReducer,
  },
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([
      authApi.middleware,
      userApi.middleware,
      reservationApi.middleware,
      roomOwnerApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
