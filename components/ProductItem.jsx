import { View, Text, StyleSheet, Image, Pressable, useWindowDimensions } from 'react-native'
import React from 'react'

export default function ProductItem({title, price, image, onPress}) {
  const { width } = useWindowDimensions();
  const smallDevice = width < 350;

  return (
    <Pressable style={[styles.card, smallDevice && styles.cardSmall]} onPress={onPress}>
      <View style={styles.descriptionContainer}>
        <Text style={[styles.title, smallDevice && styles.titleSmall]}>{title}</Text>
        <Text style={[styles.price, smallDevice && styles.priceSmall]}>${price.toFixed(2)}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image style={[styles.image, smallDevice && styles.imageSmall]} source={{ uri: image }} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row', 
    borderRadius: 8,
    padding: 16,
    margin: 8,
    borderColor: 'black', 
    borderWidth: 1, 
    alignItems: 'center',
    maxWidth: 480,
  },
  cardSmall: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  descriptionContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  titleSmall: {
    fontSize: 14,
  },
  price: {
    fontSize: 16,
    color: '#888',
  },
  priceSmall: {
    fontSize: 12,
  },
  imageContainer: {
    paddingLeft: 16
  },
  image: {
    width: 100, 
    height: 100,
  },
  imageSmall: {
    width: 80,
    height: 80,
  }
});
