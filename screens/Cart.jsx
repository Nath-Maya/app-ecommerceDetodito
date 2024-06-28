import React from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useCart } from '../context/CartContex';
import TotalCart from '../components/TotalCart';
import CartItem from '../components/CartItem';

export default function Cart() {
  const { cartItems, removeItemFromCart } = useCart();

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CartItem {...item} handleDelete={removeItemFromCart} />
        )}
        ListEmptyComponent={<Text>No hay productos en el carrito</Text>}
        contentContainerStyle={styles.list}
      />
      <TotalCart />
    </SafeAreaView>
  );
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
