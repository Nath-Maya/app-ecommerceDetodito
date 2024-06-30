import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../redux/cart/cartSlice'
import shopReducer from '../redux/shop/shopSlice'
import { setupListeners } from '@reduxjs/toolkit/query';
import { shopApi } from '../service/shopService';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        shop: shopReducer,
        [ shopApi.reducerPath]: shopApi.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware()
          .concat(shopApi.middleware)
});

setupListeners(store.dispatch)

export default store