import { databaseURL } from '../database/firebaseConfig'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

 export const shopApi = createApi({
    
    baseQuery: fetchBaseQuery({ baseUrl: databaseURL }), 
    endpoints: builder => ({
        getProductsByCategory: builder.query({
            query: category =>
                `products.json?orderBy="category"&equalTo="${category}"`
        }),
        getCategories: builder.query({
            query: () => 'category.json',
        }),
        postOrder: builder.mutation({
            query: order => ({
                url: 'orders.json',
                method: "POST",
                body: order,
            })
        })
    })
 })
 
 //Crear hooks para utilizarlos
 export const { useGetProductsByCategoryQuery, useGetCategoriesQuery, usePostOrderMutation } = shopApi