import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../database/firebaseConfig";
import { setUser } from "../redux/auth/authSlice"; 

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/' }),
    endpoints: (builder) => ({
        signUp: builder.mutation({
            queryFn: async ({ email, password }, { dispatch }) => { 
                try {
                    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                    const user = {
                        uid: userCredential.user.uid,
                        email: userCredential.user.email,
                        token: userCredential.user.stsTokenManager.accessToken,
                    };

                    dispatch(setUser({ email: user.email, localId: user.uid, token: user.token }));
                    return { data: user };
                } catch (error) {
                    console.error('Sign up error:', error);
                    return { error: { status: 'CUSTOM_ERROR', data: error.message } };
                }
            },
        }),
        login: builder.mutation({
            queryFn: async ({ email, password }, { dispatch }) => { 
                try {
                    const userCredential = await signInWithEmailAndPassword(auth, email, password);
                    const user = {
                        uid: userCredential.user.uid,
                        email: userCredential.user.email,
                        token: userCredential.user.stsTokenManager.accessToken,
                    };
 
                    dispatch(setUser({ email: user.email, localId: user.uid, token: user.token }));
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
