import React from 'react'
import { View } from 'react-native'
import CartItem from '../components/CartItem'
import cart from '../data/cart.json'
import { FlatList } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Cart() {
  return (
    <SafeAreaView>
            <FlatList
        contentContainerStyle = { { gab : 30}}
        data= { cart }
        renderItem={({item}) => <CartItem { ...item}/>}
      />
    </SafeAreaView>
  )
}