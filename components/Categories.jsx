import { StyleSheet, FlatList, View } from 'react-native'
import React from 'react'
import category from '../data/category.json'
import ItemCategory from './ItemCategory'

export default function Categories() {
  return (
    <View style={styles.categoriesContainer}>
      <FlatList
        data={category}
        renderItem={({ item }) => <ItemCategory name={item} />}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    categoriesContainer: {
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
      }
})