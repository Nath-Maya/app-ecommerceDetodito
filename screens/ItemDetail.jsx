import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { Card } from "react-native-paper";
import AddButton from "../components/AddButton";

export default function ItemDetail({ route }) {
  const { product } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Card.Cover source={{ uri: product.image }} style={styles.image} />
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.subtitle}>{product.description}</Text>
          <Text style={styles.price}>${product.price.toFixed(2)}</Text>
        </Card.Content>
        <AddButton product={product} />
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  card: {
    width: "100%",
    padding: 16,
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 12,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#888",
    textAlign: "center",
    marginTop: 15,
  },
});
