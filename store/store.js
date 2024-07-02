import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../redux/cart/cartSlice'
import shopReducer from '../redux/shop/shopSlice'
import { setupListeners } from '@reduxjs/toolkit/query';
import { shopApi } from '../service/shopService';
import { authApi } from '../service/authService';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        shop: shopReducer,
        [ shopApi.reducerPath]: shopApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware()
          .concat(shopApi.middleware)
});

setupListeners(store.dispatch)

export default store