import React from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import TotalCart from '../components/TotalCart';
import CartItem from '../components/CartItem';


export default function Cart() {

  const cartItems = useSelector((state) => state.cart.items);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CartItem {...item}  />
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
