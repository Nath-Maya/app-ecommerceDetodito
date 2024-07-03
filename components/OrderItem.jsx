import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { formatDate } from '../utils/formatDate'
import { formatPrice } from '../utils/formatPrice'


export default function OrderItem({createdAt, totalPrice}) {

  return (
    <View style={styles.orderItem}>
        <Text>{formatDate(createdAt)}</Text>
        <Text>{formatPrice(totalPrice)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    orderItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
      },
})