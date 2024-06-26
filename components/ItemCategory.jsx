import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function ItemCategory({name}) {
  return (
    <View style={styles.category}>
        <Text style={styles.name}>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    category: {
        borderRadius: 15,
        borderWidth: 1,
        elevation: 5,
        marginHorizontal: 3,
        padding: 12,
        shadowColor: "#000",
        shadowOffset: { width: 2, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
      },
      name: {
        color: colors.titleClear,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
      },

})