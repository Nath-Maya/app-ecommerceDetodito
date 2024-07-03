import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../redux/cart/cartSlice';
import shopReducer from '../redux/shop/shopSlice';
import authReducer from '../redux/auth/authSlice'
import { setupListeners } from '@reduxjs/toolkit/query';
import { shopApi } from '../service/shopService';
import { authApi } from '../service/authService';

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    shop: shopReducer,
    [shopApi.reducerPath]: shopApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }).concat(shopApi.middleware).concat(authApi.middleware),
  devTools: true, 
});

setupListeners(store.dispatch);

export default store;
