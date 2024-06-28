import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import RemoveButton from './RemoveButton';
import QuantitySelector from './QuantitySelector'


export default function CartItem({ id, image, title, category, price, handleDelete }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{category}</Text>
        <Text style={styles.price}>${price}</Text>
        <View>
          <RemoveButton id={id} handleDelete={handleDelete} />
          <QuantitySelector/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 16,
    margin: 8,
    borderRadius: 8,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 16,
  },
  details: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginVertical: 4,
  },
  price: {
    fontSize: 16,
    color: '#888',
    marginTop: 8,
  },
});
