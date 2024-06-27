import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function QuantitySelector() {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={() => decreaseQuantity()}>
        <Text style={styles.buttonText}>-</Text>
      </Pressable>
      <Text style={styles.quantityText}>3</Text>
      <Pressable style={styles.button} onPress={() => increaseQuantity()}>
        <Text style={styles.buttonText}>+</Text>
      </Pressable>
    </View>
  )
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