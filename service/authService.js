import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../database/firebaseConfig";

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/' }),
    endpoints: (builder) => ({
        signUp: builder.mutation({
            queryFn: async ({ email, password }) => {
                try {
                    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                    const user = {
                        uid: userCredential.user.uid,
                        email: userCredential.user.email,
                    };
                    return { data: user };
                } catch (error) {
                    console.error('Sign up error:', error);
                    return { error: { status: 'CUSTOM_ERROR', data: error.message } };
                }
            },
        }),
        login: builder.mutation({
            queryFn: async ({ email, password }) => {
                try {
                    const userCredential = await signInWithEmailAndPassword(auth, email, password);
                    const user = {
                        uid: userCredential.user.uid,
                        email: userCredential.user.email,
                    };
                    return { data: user };
                } catch (error) {
                    console.error('Login error:', error);
                    return { error: { status: 'CUSTOM_ERROR', data: error.message } };
                }
            },
        }),
    }),
});

export const { useSignUpMutation, useLoginMutation } = authApi;



