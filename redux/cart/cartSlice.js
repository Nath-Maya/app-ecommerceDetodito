import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalItems: 0,
    totalPrice: 0,
    user: 'userLogged',
    updateAt: new Date().toLocaleString()
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += action.payload.price;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
          totalPrice: action.payload.price,
        });
      }
      state.totalItems = state.items.reduce((total, item) => total + item.quantity, 0);
      state.totalPrice = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    },
    removeFromCart: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.items.splice(index, 1);
      }
      state.totalItems = state.items.reduce((total, item) => total + item.quantity, 0);
      state.totalPrice = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    },
    incrementQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
        item.totalPrice += item.price;
        state.totalPrice += item.price;
        state.totalItems += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        item.totalPrice -= item.price;
        state.totalPrice -= item.price;
        state.totalItems -= 1;
      }
    },
    getTotalItems: (state) => {
      state.totalItems = state.items.reduce((total, item) => total + item.quantity, 0);
    },
    getTotalPrice: (state) => {
      state.totalPrice = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }
  },
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity, getTotalItems, getTotalPrice } = cartSlice.actions;
export default cartSlice.reducer;
