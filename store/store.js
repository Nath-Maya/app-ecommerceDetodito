import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../redux/cart/cartSlice'
import shopReducer from '../redux/shop/shopSlice'

const store = configureStore({
    reducer: {
        cart: cartReducer,
        shop: shopReducer,
    }
});

export default store