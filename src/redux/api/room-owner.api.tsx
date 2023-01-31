import { createApi } from "@reduxjs/toolkit/query/react";
import { IRoomOwner } from "../dto";
import baseApi from "./base.api";

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
  }),
});

export const {
  useRegisterRoomOwnerMutation
} = roomOwnerApi;
