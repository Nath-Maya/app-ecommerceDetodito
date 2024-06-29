import { StyleSheet, FlatList, View } from 'react-native'
import React from 'react'
import ItemCategory from './ItemCategory'
import { useSelector } from 'react-redux'


export default function Categories() {

  const categories = useSelector(state => state.shop.categories)

  return (
    <View style={styles.categoriesContainer}>
      <FlatList
        data={categories}
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