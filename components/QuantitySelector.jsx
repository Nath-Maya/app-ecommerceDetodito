import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementQuantity, decrementQuantity } from '../redux/cart/cartSlice'
import { IconButton, MD3Colors } from 'react-native-paper'


export default function QuantitySelector({ id }) {

  const dispatch = useDispatch();
  const item = useSelector((state) => state.cart.items.find(item => item.id === id));


  const handleIncrement = () => {
    dispatch(incrementQuantity({ id }));
  };

  const handleDecrement = () => {
    dispatch(decrementQuantity({ id }));
  };

  return (
    <View style={styles.container}>
      <IconButton 
        icon="minus-thick"
        iconColor="navy"
        size ={10}
        mode='contained'
        onPress={handleDecrement}
        accessibilityLabel='Increment product'
      />
        <Text style={styles.quantityText}>{item.quantity}</Text>
      <IconButton 
        icon='plus-thick'
        iconColor="navy"
        size ={10}
        mode='contained'
        onPress={handleIncrement} 
        accessibilityLabel='decrement product'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 3,
  },
  quantityText: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 8
  },
})