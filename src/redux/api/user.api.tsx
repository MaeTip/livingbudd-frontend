import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setUser } from "../slice/user.slice";
import { IUser } from "../dto";
import type { RootState } from "../store";

const API_BASE_URL = process.env.REACT_APP_API_ENDPOINT as string;

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_BASE_URL}/users/`,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
        return headers;
      }
    },
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getMe: builder.query<IUser, void | null>({
      query() {
        return {
          url: "me",
        };
      },
      transformResponse: (result: IUser) => result,
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
        } catch (error) {}
      },
    }),
  }),
});

export const { useGetMeQuery } = userApi;
