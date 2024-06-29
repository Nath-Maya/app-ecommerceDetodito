import { createSlice } from '@reduxjs/toolkit';
import cartData from '../../data/cart.json';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: cartData, // Se indica la data de donde se tomarán los productos
    totalItems: 0,
    totalPrice: 0,
  },
  reducers: {

    // Agregar un producto al carrito
    addToCart: (state, action) => {
      // Verificar si el producto ya existe en el carrito
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

    // Eliminar producto del carrito
    removeFromCart: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.items.splice(index, 1);
      }
      state.totalItems = state.items.reduce((total, item) => total + item.quantity, 0);
      state.totalPrice = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    },

    // Incrementar cantidad en contador
    incrementQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
        item.totalPrice += item.price;
        state.totalPrice += item.price;
        state.totalItems += 1;
      }
    },

    // Decrementar cantidad en contador
    decrementQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        item.totalPrice -= item.price;
        state.totalPrice -= item.price;
        state.totalItems -= 1;
      }
    },

    // Suma de Total Items en Carrito
    getTotalItems: (state) => {
      state.totalItems = state.items.reduce((total, item) => total + item.quantity, 0);
    },

    // Suma de los precios
    getTotalPrice: (state) => {
      state.totalPrice = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

  },
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity, getTotalItems, getTotalPrice } = cartSlice.actions;
export default cartSlice.reducer;
