import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementQuantity, decrementQuantity } from '../redux/cart/cartSlice'

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
      <Button title="-" onPress={handleDecrement} />
        <Text>{item.quantity}</Text>
      <Button title="+" onPress={handleIncrement} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 5,
    marginTop: 10
  },
  button: {
    backgroundColor: '#007bff',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
  quantityText: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 5
  },
})