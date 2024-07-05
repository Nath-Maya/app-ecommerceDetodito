import { databaseURL } from "../database/firebaseConfig";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: databaseURL }),
    endpoints: builder => ({
        getProfileImage: builder.query({
            query: localId => `profileImages/${localId}.json`,
          }),
          postProfileImage: builder.mutation({
            query: ({ image, localId }) => ({
              url: `profileImages/${localId}.json`,
              method: 'PUT',
              body: { image },
            }),
          }),
    })
})

export const { useGetProfileImageQuery, usePostProfileImageMutation } = userApi