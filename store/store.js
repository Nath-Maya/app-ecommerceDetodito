import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../redux/cart/cartSlice';
import shopReducer from '../redux/shop/shopSlice';
import authReducer from '../redux/auth/authSlice'
import orderReducer from '../redux/order/orderSlice.js'
import { shopApi } from '../service/shopService';
import { authApi } from '../service/authService';
import { userApi } from '../service/userService';
import { setupListeners } from '@reduxjs/toolkit/query';


const store = configureStore({
  
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    shop: shopReducer,
    orders: orderReducer,
    [shopApi.reducerPath]: shopApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(shopApi.middleware)
      .concat(authApi.middleware)
      .concat(userApi.middleware)
});

setupListeners(store.dispatch);

export default store;
