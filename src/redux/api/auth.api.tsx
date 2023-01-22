import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { LoginInput } from 'containers/pages/admin/LoginPage';
import { userApi } from './user.api';

const API_BASE_URL = process.env.APP_SERVER_ENDPOINT as string;

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_BASE_URL}/api/auth/`,
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation<
      { access_token: string; status: string },
      LoginInput
      >({
      query(data) {
        return {
          url: 'signin',
          method: 'POST',
          body: data,
          credentials: 'include',
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          await dispatch(userApi.endpoints.getMe.initiate(null));
        } catch (error) {}
      },
    })
  }),
});

export const {
  useLoginUserMutation
} = authApi;
