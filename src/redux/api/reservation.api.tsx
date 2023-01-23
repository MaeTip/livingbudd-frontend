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
    getAllReservations: builder.query<IReservation[], void>({
      query() {
        return {
          url: `/reservations`,
          credentials: 'include',
        };
      },
      transformResponse: (result: { data: IReservation[] }) => result.data
    }),
    updateReservation: builder.mutation<IReservation, { id: number; reservation: FormData }>(
      {
        query({ id, reservation }) {
          return {
            url: `/reservations/${id}`,
            method: 'PATCH',
            credentials: 'include',
            body: reservation,
          };
        },
        transformResponse: (response: { data: IReservation }) =>
          response.data,
      }
    ),
    deleteReservation: builder.mutation<IReservation, string>({
      query(id) {
        return {
          url: `/reservations/${id}`,
          method: 'Delete',
          credentials: 'include',
        };
      },
    }),
  }),
});

export const {
  useCreateReservationMutation,
  useUpdateReservationMutation,
  useGetAllReservationsQuery,
  useDeleteReservationMutation
} = reservationApi;
