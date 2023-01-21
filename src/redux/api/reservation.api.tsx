import { createApi } from "@reduxjs/toolkit/query/react";
import { IReservation } from "../dto/reservation.dto";
import baseApi from "./base.api";

export const reservationApi = createApi({
  reducerPath: "reservationApi",
  baseQuery: baseApi,
  tagTypes: ["Reservations"],
  endpoints: (builder) => ({
    createReservation: builder.mutation<IReservation, FormData>({
      query(reservation) {
        return {
          url: "/reservations",
          method: "POST",
          credentials: "include",
          body: reservation,
        };
      },
      transformResponse: (result: { data: { reservation: IReservation } }) =>
        result.data.reservation,
    }),
  }),
});

export const {
  useCreateReservationMutation
} = reservationApi;