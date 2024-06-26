import { StyleSheet, View } from 'react-native'
import React from 'react'
import ItemCategory from './ItemCategory'

export default function ListCategory() {
  return (
    <View style={styles.container}>
        <FlatList 
            data = { category }
            horizontal
            renderItem={({ item }) => <ItemCategory name={item}/>}
            keyExtractor={(item, index) => index.toString()}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
    }
})