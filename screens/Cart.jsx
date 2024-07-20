import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import TotalCart from "../components/TotalCart";
import CartItem from "../components/CartItem";
import { useTheme } from "react-native-paper";

export default function Cart() {
  const { colors } = useTheme();
  const styles = createStyles(colors);

  const items = useSelector((state) => state.cart.items);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CartItem {...item} />}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No hay productos en el carrito</Text>
          </View>
        }
        contentContainerStyle={styles.list}
      />
      <TotalCart />
    </SafeAreaView>
  );
}

const createStyles = (colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: colors.secondaryContainer,
    },
    list: {
      flexGrow: 1,
    },
    emptyContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    emptyText: {
      color: colors.text,
      fontSize: 18,
    },
  });
