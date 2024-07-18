import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cart/cartSlice";
import { IconButton } from "react-native-paper";

export default function RemoveButton({ id }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart({ id }));
  };

  return (
    <IconButton
      icon="delete-circle"
      iconColor="red"
      size={40}
      onPress={handleRemove}
      mode="contained"
      accessibilityLabel="Delete product"
    />
  );
};
