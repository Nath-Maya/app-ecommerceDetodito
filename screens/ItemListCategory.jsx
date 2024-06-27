import {  SafeAreaView, FlatList } from 'react-native'
import { useState, useEffect } from 'react'
import React from 'react'
import Card from '../components/Card'
import products from '../data/products.json'
import SearchInput from '../components/SearchInput'

export default function ItemListCategory() {

  const [textToSearch, setTextToSearch] = useState('')
  const [productsFiltered, setProductsFiltered] = useState(products)

  //Cuando el usuario escriba filtre los resultados
  useEffect( () => {
    const filtered = products.filter(
      product => 
        product.category.toLowerCase().startsWith(textToSearch.toLowerCase())
    )
    setProductsFiltered(filtered)
  }, [textToSearch]
  )
   
  return (
    <SafeAreaView>
        <SearchInput 
        onChangeText={setTextToSearch}
        value={textToSearch}
      />
        <FlatList
            data={ productsFiltered }
            key = {item => item.id}
            renderItem={({item}) => <Card {...item}/>}/>
    </SafeAreaView>
  )
}