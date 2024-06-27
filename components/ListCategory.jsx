import { StyleSheet, View, FlatList } from 'react-native'
import React from 'react'
import ItemCategory from './ItemCategory'
import category from '../data/category.json'
import SearchInput from './SearchInput'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function ListCategory() {
  return (
    <SafeAreaView style={styles.container}>
      <SearchInput/>
        <FlatList 
            data = { category }
            horizontal
            keyExtractor={(item, index) => index.toString()}
        />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
    gap: 32,
    padding: 10,
    backgroundColor: 'white',
  }
})