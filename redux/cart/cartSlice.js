import { createSlice } from '@reduxjs/toolkit';
import cartData from '../../data/cart.json'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: cartData, //Se indica la data de donde se tomara los productos
    count: 0,
  },
  reducers: {

    //Agregar un producto al carrito
    addToCart: (state, action) => {
      //Verificar si el producto ya existe en el carrito
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
      state.count += action.payload.price;

    },

    //Eliminar producto del carrito
    removeFromCart: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },

    //Ingrementar cantidad en contador
    incrementQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
        item.totalPrice += item.price;
        state.count += item.price;
      }
    },

    //Aumentar cantidad en contador
    decrementQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        item.totalPrice -= item.price;
        state.count -= item.price;
      }
    },
  },
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
