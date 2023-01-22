import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import {RootState} from "../store";

const baseUrl = `${process.env.REACT_APP_API_ENDPOINT}`;

export interface GenericResponse {
  status: string;
  message: string;
}

const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token
    if (token) {
      headers.set('authorization', `Bearer ${token}`)
      return headers
    }
  },
});

const baseApi: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  return baseQuery(args, api, extraOptions);
};

export default baseApi;
