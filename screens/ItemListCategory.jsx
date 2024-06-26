import {  SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import ListCategory from '../components/ListCategory'
import Card from '../components/Card'
import products from '../data/products.json'

export default function ItemListCategory() {
  return (
    <SafeAreaView>
        <ListCategory/>
        <FlatList
            data={ products }
            renderItem={({item}) => <Card {...item}/>}/>
    </SafeAreaView>
  )
}