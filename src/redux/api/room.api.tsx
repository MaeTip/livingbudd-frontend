import { createApi } from "@reduxjs/toolkit/query/react";
import baseApi from "./base.api";
import { IRoom } from "../dto";

export const roomApi = createApi({
  reducerPath: "roomApi",
  baseQuery: baseApi,
  tagTypes: ["rooms"],
  endpoints: (builder) => ({
    createRoom: builder.mutation<IRoom, FormData>({
      query(room) {
        return {
          url: "/rooms",
          method: "POST",
          credentials: "include",
          body: room,
        };
      },
      transformResponse: (result: IRoom) => result,
    }),
    getAllRooms: builder.query<IRoom[], void>({
      query() {
        return {
          url: `/rooms`,
          credentials: "include",
        };
      },
      transformResponse: (result: IRoom[]) => result,
    }),
  }),
});

export const { useCreateRoomMutation, useGetAllRoomsQuery } = roomApi;
