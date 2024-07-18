import React from "react";
import {  StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cart/cartSlice";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";

export default function AddButton({ product }) {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    navigation.goBack();
  };

  return (
      <Button 
        icon="cart-arrow-down" 
        mode="contained" 
        onPress={handleAddToCart}
        style={styles.button}
      >
        Agregar al carrito
      </Button>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 15
  }
});
