import {  SafeAreaView, FlatList } from 'react-native'
import { useState, useEffect } from 'react'
import React from 'react'
import ProductItem from '../components/ProductItem'
import products from '../data/products.json'
import SearchInput from '../components/SearchInput'

export default function ItemListCategory() {

  //Estado inicial para el texto que ingresa el usuario
  const [textToSearch, setTextToSearch] = useState('')
  //Estado lista de productos filtrado
  const [productsFiltered, setProductsFiltered] = useState(products)

  //Filtrar los productos con el texto ingresado del usuario teniendo en cuenta sus categorias
  useEffect( () => {
    const filtered = products.filter(
      product => 
        product.category.toLowerCase().includes(textToSearch.toLowerCase())
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
            renderItem={({item}) => <ProductItem {...item}/>}/>
    </SafeAreaView>
  )
}