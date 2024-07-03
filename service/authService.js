import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { DATABASE_URL } from "../database/database";
import { apiKey } from "../database/database";

export const authApi = createApi({
    
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: DATABASE_URL }),
    endpoints: builder => ({
        login: builder.mutation({
            query: ({ ...auth }) => ({
                url: `accounts:signInWithPassword.json?key=${apiKey}`,
                method: 'POST',
                body: auth,
            }),
        }),
        signUp: builder.mutation({
            query: ({ ...auth }) => ({
                url: `accounts:signUp.json?key=${apiKey}`,
                method: 'POST',
                body: auth,
            }),
        }),
    }),
});

export const { useLoginMutation, useSignUpMutation } = authApi;
