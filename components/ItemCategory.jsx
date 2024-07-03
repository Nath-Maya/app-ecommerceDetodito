import { Pressable, Text, StyleSheet } from 'react-native'
import React from 'react'


export default function ItemCategory({name , onPress}) {

  return (
  <Pressable style={styles.category} onPress={onPress}>
      <Text style={styles.name}>{name}</Text>
  </Pressable>
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
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
      },

})