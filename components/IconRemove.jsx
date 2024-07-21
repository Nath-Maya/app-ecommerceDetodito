import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cart/cartSlice";
import { IconButton } from "react-native-paper";
import Toast from "react-native-toast-message";

export default function RemoveButton({ id }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart({ id }));
    Toast.show({
      type: 'error',
      text1: '❌  Producto eliminado',
      text2: 'El producto se ha eliminado de elcarrito',
      position: 'top',
      topOffset: 95
    });
  };

  return (
    <IconButton
      icon="delete-circle"
      iconColor="red"
      size={35}
      onPress={handleRemove}
      accessibilityLabel="Delete product"
    />
  );
};
