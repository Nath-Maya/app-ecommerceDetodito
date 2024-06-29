import { createSlice } from '@reduxjs/toolkit'
import productsData from '../../data/products.json'
import categoryData from '../../data/category.json'


export const shopSlice = createSlice({
    name: 'shop',
  initialState: {
    products: productsData,
    categories: categoryData,
    categorySeleted: '',
    productIdSelected: '',
    productsFilteredByCategory: [],
  },
  reducers: {
    setCategorySelected: (state, action) => {
      state.categorySeleted = action.payload
      state.productsFilteredByCategory = state.products.filter(
        product => product.brand === action.payload
      )
    },
    setProductIdSelected: (state, action) => {
      state.productIdSelected = action.payload
    },
  },
})

export const { setCategorySelected, setProductIdSelected } = shopSlice.actions

export default shopSlice.reducer