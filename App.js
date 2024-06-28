import React from 'react';
import MainNavigator from './navigation/MainNavigator';
import { CartProvider } from './context/CartContex';
import { store } from './store/store';
import { Provider } from 'react-redux';


export default function App() {

  return (

      <CartProvider> 
        <MainNavigator/>
      </CartProvider> 


  )
}


