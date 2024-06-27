import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function ProductItem({title, price, image}) {
  return (
    <View style={styles.card}>
      <View style={styles.descriptionContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>${price.toFixed(2)}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image style={ styles.image} source={{ uri: image }} />
      </View>
    </View>
  ) 
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
    },
    descriptionContainer: {
      flex: 1,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    price: {
      fontSize: 16,
      color: '#888',
    },
    imageContainer: {
      paddingLeft: 16
    },
    image: {
      width: 100, 
      height: 100,
    }
  });