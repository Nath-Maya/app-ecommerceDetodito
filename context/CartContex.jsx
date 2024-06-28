import React, { createContext, useContext, useState, useEffect } from 'react';
import cartData from '../data/cart.json';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(cartData);
  }, []);

  //Suma de los items que se encuentran contenidos en el Carrito
  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  //Suma de precios de los productos contenidos en el carrito.
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  //Eliminar elemento del carrito
  const removeItemFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    console.log('\x1b[31m%s\x1b[0m', 'Producto Eliminado: ' + id);
  };


  return (
    <CartContext.Provider value={{ cartItems, getTotalItems, getTotalPrice, removeItemFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
