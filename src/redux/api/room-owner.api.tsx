import { createApi } from "@reduxjs/toolkit/query/react";
import { IRoomOwner } from "../dto";
import baseApi from "./base.api";
import { IReservation } from "../dto/reservation.dto";

export const roomOwnerApi = createApi({
  reducerPath: "roomOwnerApi",
  baseQuery: baseApi,
  tagTypes: ["RoomOwners"],
  endpoints: (builder) => ({
    registerRoomOwner: builder.mutation<IRoomOwner, FormData>({
      query(roomOwner) {
        return {
          url: "/room-owners/register",
          method: "POST",
          credentials: "include",
          body: roomOwner,
        };
      },
      transformResponse: (result: { data: { roomOwner: IRoomOwner } }) =>
        result.data.roomOwner,
    }),
    getAllRoomOwner: builder.query<IRoomOwner[], void>({
      query() {
        return {
          url: `/room-owners`,
          credentials: "include",
        };
      },
      transformResponse: (result: { data: IRoomOwner[] }) => result.data,
    }),
  }),
});

export const { useRegisterRoomOwnerMutation, useGetAllRoomOwnerQuery } =
  roomOwnerApi;
