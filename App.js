import React from 'react';
import MainNavigator from './navigation/MainNavigator';
import { CartProvider } from './context/CartContex';


export default function App() {

  return (
    <CartProvider>
        <MainNavigator/>
    </CartProvider>
  )
}


