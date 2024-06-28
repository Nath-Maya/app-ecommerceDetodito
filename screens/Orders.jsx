import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import OrderItem from '../components/OrderItem'
import orderData from "../data/orders.json"

export default function Orders() {
  return (
    <View style={styles.orders}>
      <FlatList
        contentContainerStyle={styles.list}
        data={orderData}
        renderItem={({ item }) => <OrderItem {...item} />}
        ListEmptyComponent={<Text>No orders</Text>}
      />
    </View>
  )
}

export const styles = StyleSheet.create({
  orders: {
    backgroundColor: 'white',
    minHeight: '100%',
  },
  list: {
    gap: 32,
  },
})