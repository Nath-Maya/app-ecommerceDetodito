import { createApi } from "@reduxjs/toolkit/query";
import { DATABASE_URL } from "../database/database";
import { apiKey } from "../database/database";

export const authApi = createApi({
    reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: DATABASE_URL}),
  endpoints: builder => ({
    signUp: builder.mutation({
      query: ({ ...auth }) => ({
        url: `accounts:signUp?key=${apiKey}`,
        method: 'POST',
        body: auth,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
    login: builder.mutation({
      query: ({ ...auth }) => ({
        url: `accounts:signInWithPassword?key=${apiKey}`,
        method: 'POST',
        body: auth,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
  }),
})

export const { useSignUpMutation, useLoginMutation} = authApi