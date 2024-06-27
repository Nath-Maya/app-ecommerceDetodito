import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import QuantitySelector from '../components/QuantitySelector';

export default function ItemDetail( { route }) {

  //Obtener los parametros del producto
  const { product } = route.params;
  console.log('\x1b[32m%s\x1b[0m', 'Detalles de producto: ' + product.title);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: product.image }} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      <View>
        <QuantitySelector/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    fontSize: 25,
    fontWeight: "Bold",
    color: '#888',
    marginTop: 15,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
});