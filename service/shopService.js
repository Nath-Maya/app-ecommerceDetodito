 import { DATABASE_URL } from "../database/database"
 import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

 export const shopApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl:DATABASE_URL }), //Defino la base de datos
    endpoints: builder => ({
        getProductsByCategory: builder.query({
            query: category =>
                `products.json?orderBy="category"&equalTo="${category}"`
        }),
        getCategories: builder.query({
            query: () => 'category.json',
          }),
    })
 })
 
 //Crear hooks para utilizarlos
 export const { useGetProductsByCategoryQuery, useGetCategoriesQuery} = shopApi