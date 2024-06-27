import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CartProvider, useCart } from '../context/CartContex'
import TotalCart from '../components/TotalCart'
import CartItem from '../components/CartItem'

export default function Cart() {

  const { cartItems } = useCart();

  return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <CartItem {...item} />}
          contentContainerStyle={styles.list}
        />
        <TotalCart />
      </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  list: {
    flexGrow: 1,
  },
});