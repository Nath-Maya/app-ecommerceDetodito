import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Card, useTheme } from "react-native-paper";
import ProductRating from "./ProductRating";

export default function ProductItem({ title, price, image, onPress, rating }) {
  const { colors } = useTheme();
  const styles = createStyles(colors);

  return (
    <Pressable onPress={onPress} style={styles.pressable}>
      <Card   style={styles.card}>
        <Card.Content style={styles.content}>
          <View style={styles.descriptionContainer}>
            <Text style={styles.title}>{title}</Text>
            <ProductRating rating={rating} />
            <Text style={styles.price}>${price.toFixed(2)}</Text>
          </View>
          <Card.Cover source={{ uri: image }} style={styles.image} />
        </Card.Content>
      </Card>
    </Pressable>
  );
}

const createStyles = (colors) =>
  StyleSheet.create({
    pressable: {
      width: "98%",
    },
    card: {
      marginVertical: 10,
      backgroundColor: colors.secondaryContainer,
    },
    content: {
      flexDirection: "row",
    },
    title: {
      textAlign: "left",
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 5,
    },
    descriptionContainer: {
      flex: 1,
      paddingHorizontal: 10,
    },
    image: {
      width: 100,
      height: 100,
      borderRadius: 10,
      resizeMode: "cover",
    },
    price: {
      fontSize: 16,
      fontWeight: "bold",
      marginTop: 5,
    },
  });
