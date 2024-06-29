import { createSlice } from '@reduxjs/toolkit';
import productsData from '../../data/products.json';
import categoryData from '../../data/category.json';

export const shopSlice = createSlice({
  name: 'shop',
  initialState: {
    products: productsData,
    categories: categoryData,
    categorySelected: '', 
    productIdSelected: '',
    productsFilteredByCategory: [], 
  },
  reducers: {
    setCategorySelected: (state, action) => {
      state.categorySelected = action.payload; 
    },
    setProductIdSelected: (state, action) => {
      state.productIdSelected = action.payload;
    },
  },
});

export const { setCategorySelected, setProductIdSelected } = shopSlice.actions;

export default shopSlice.reducer;
