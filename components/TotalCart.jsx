import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useCart } from '../context/CartContex';

export default function TotalCart() {

const { getTotalItems, getTotalPrice } = useCart();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Total Items: {getTotalItems()}</Text>
      <Text style={styles.text}>Total Price: ${getTotalPrice().toFixed(2)}</Text>
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