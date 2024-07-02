import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cart/cartSlice';
import { useNavigation, useRoute } from '@react-navigation/native';


export default function AddButton({product}) {

  const dispatch = useDispatch();
  const navigation = useNavigation()
  // const route = useRoute()

  // const { item } = route.params

  //Manejo del evento para agregar producto al carrito con boton
  const handleAddToCart = () => {
    dispatch(addToCart(product));
    console.log("\x1b[34m%s\x1b[0m", "Producto agregado")
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={handleAddToCart}>
        <Text style={styles.buttonText}>Agregar al carrito</Text>
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
    backgroundColor: '#28a745',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
