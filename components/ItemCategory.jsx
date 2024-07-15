import { Pressable, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Chip } from 'react-native-elements'


export default function ItemCategory({name , onPress}) {

  return (
  <Chip title={name} type='solid' onPress={onPress}/>
  )
}

const styles = StyleSheet.create({


})