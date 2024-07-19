import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    orders: [],
    totalOrders: 0,
  },
  reducers: {
    setOrders: (state, action) => {
      state.orders = action.payload;
      state.totalOrders = state.orders.length;
    },
  },
});

export const { setOrders } = orderSlice.actions;
export default orderSlice.reducer;
