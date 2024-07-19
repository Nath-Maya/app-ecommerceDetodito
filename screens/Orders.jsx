import { View, Text, FlatList, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import OrderItem from "../components/OrderItem";
import { useGetOrderQuery } from "../service/shopService.js";
import { setOrders } from "../redux/order/orderSlice.js";
import { useDispatch } from "react-redux";

export default function Orders() {
  
  const dispatch = useDispatch();
  const { data: ordersObject = {}, isLoading, isError } = useGetOrderQuery();
  const orders = ordersObject ? Object.values(ordersObject) : [];

  useEffect(() => {
    if (orders.length > 0) {
      dispatch(setOrders(orders));
    }
  }, [orders, dispatch]);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>Error loading orders</Text>;
  }

  return (
    <View style={styles.orders}>
      <FlatList
        contentContainerStyle={styles.list}
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <OrderItem
            createdAt={item.date || "Fecha no disponible"}
            totalPrice={item.totalPrice !== undefined ? item.totalPrice : 0}
          />
        )}
        ListEmptyComponent={<Text>No orders</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  orders: {
    backgroundColor: "white",
    minHeight: "100%",
  },
  list: {
    gap: 32,
  },
});
