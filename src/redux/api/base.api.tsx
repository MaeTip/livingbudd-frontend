import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";

const baseUrl = `${process.env.REACT_APP_SERVER_ENDPOINT}/api/`;

export interface GenericResponse {
  status: string;
  message: string;
}

const baseQuery = fetchBaseQuery({
  baseUrl,
});

const baseApi: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  return baseQuery(args, api, extraOptions);
};

export default baseApi;
