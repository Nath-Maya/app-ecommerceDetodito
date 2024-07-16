import {
  View,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";
import React from "react";
import ProductRating from "./ProductRating";
import { Card } from "react-native-elements";
import { LightSheme } from "../theme/lightSheme.js";

export default function ProductItem({ title, price, image, onPress, rating }) {

  return (
    <Pressable onPress={onPress} style={styles.pressable}>
      <Card containerStyle={styles.card}>
        <View style={styles.content}>
          <View style={styles.descriptionContainer}>
            <Card.Title style={styles.title}>{title}</Card.Title>
            <ProductRating rating={rating} />
            <Text style={styles.price}>${price.toFixed(2)}</Text>
          </View>
          <View style={styles.imageContainer}>
            <Card.Image source={{ uri: image }} style={styles.image}/>
          </View>
        </View>
      </Card>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    width: "100%",
  },
  card: {
    marginBottom: 10,
    backgroundColor: LightSheme.primaryContainer,
  },
  content: {
    flexDirection: "row",
  },
  title: {
    textAlign: 'left'
  },
  descriptionContainer: {
    flex: 1,
    paddingRight: 10,
  },
  imageContainer: {
    width: 100,
    height: 100,
    overflow: "hidden",
    borderRadius: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
});
