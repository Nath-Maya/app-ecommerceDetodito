import React from "react";
import {  StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cart/cartSlice";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";
import Toast from "react-native-toast-message";

export default function AddButton({ product }) {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    navigation.goBack();
    Toast.show({
      type: 'success',
      text1: '✅ Producto agregado',
      text2: 'El producto se ha añadido al carrito',
      position: 'top',
      topOffset: 95
    });
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
