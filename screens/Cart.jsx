import React from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import TotalCart from '../components/TotalCart';
import CartItem from '../components/CartItem';
import { useTheme } from 'react-native-paper';


export default function Cart() {

  const { colors } = useTheme()
  const styles = createStyles(colors);
  
  const items = useSelector((state) => state.cart.items);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={items}
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

const createStyles = (colors) => StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.secondaryContainer
  },
  list: {
    flexGrow: 1,
  },
});
