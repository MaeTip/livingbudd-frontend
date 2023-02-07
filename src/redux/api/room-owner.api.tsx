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
    getAllRoomOwner: builder.query<IRoomOwner[], void>({
      query() {
        return {
          url: `/room-owners`,
          credentials: "include",
        };
      },
      transformResponse: (result: { data: IRoomOwner[] }) => result.data,
    }),
    updateRoomOwner: builder.mutation<
      IRoomOwner,
      { id: number; roomOwner: FormData }
    >({
      query({ id, roomOwner }) {
        return {
          url: `/room-owners/${id}`,
          method: "PATCH",
          credentials: "include",
          body: roomOwner,
        };
      },
      transformResponse: (response: IRoomOwner) => response,
    }),
  }),
});

export const {
  useRegisterRoomOwnerMutation,
  useGetAllRoomOwnerQuery,
  useUpdateRoomOwnerMutation,
} = roomOwnerApi;
