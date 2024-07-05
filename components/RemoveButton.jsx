import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/cart/cartSlice';


export default function RemoveButton({ id }) {

  const dispatch = useDispatch()
  
  const handleRemove = () => {
    dispatch(removeFromCart({ id }));
    console.log("\x1b[35m%s\x1b[0m", "Producto Eliminado")
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={handleRemove}>
        <Text style={styles.buttonText}>Eliminar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 16,
  },
  button: {
    backgroundColor: '#dc3545',
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
