import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { getTotalItems, getTotalPrice } from '../redux/cart/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ConfirmOrderButton from './ConfirmOrderButton';

export default function TotalCart() {

  const dispatch = useDispatch();
  const totalItems = useSelector(state => state.cart.totalItems);
  const totalPrice = useSelector(state => state.cart.totalPrice);
  const cartItems = useSelector(state => state.cart.items)

  
  useEffect(() => {
    dispatch(getTotalItems());
    dispatch(getTotalPrice());
    console.log('Total: $' + totalPrice + "- Total productos: " + totalItems);
  }, [cartItems,dispatch])
  


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Total Items: {totalItems}</Text>
      <Text style={styles.text}>Total Price: ${totalPrice}</Text>
      <ConfirmOrderButton/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 16,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        alignItems: 'center',
      },
      text: {
        fontSize: 18,
        fontWeight: 'bold',
      },
})