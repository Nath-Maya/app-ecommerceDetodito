import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Card({title, price}) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>${price.toFixed(2)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
      borderRadius: 8,
      padding: 16,
      margin: 8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 8,
      elevation: 2,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    price: {
      fontSize: 16,
      color: '#888',
    },
  });