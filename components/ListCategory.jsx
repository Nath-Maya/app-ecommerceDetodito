import { StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'


export default function ListCategory() {

  return (
    <SafeAreaView style={styles.container}>
        <FlatList 
            data = { products }
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