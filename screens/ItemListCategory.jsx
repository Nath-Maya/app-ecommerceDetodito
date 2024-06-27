import { SafeAreaView, FlatList, StyleSheet } from 'react-native'
import { useState, useEffect, useMemo } from 'react'
import React from 'react'
import ProductItem from '../components/ProductItem'
import products from '../data/products.json'
import SearchInput from '../components/SearchInput'
import { useNavigation } from '@react-navigation/native'
import NotFoundModal from '../components/NotFoundModal'

//Logica de filtro de productos
const filterProducts = (products, textToSearch) => {
  if (!textToSearch) return products;
  return products.filter(product =>
    product.category.toLowerCase().includes(textToSearch.toLowerCase())
  );
};

export default function ItemListCategory() {

  const [textToSearch, setTextToSearch] = useState('')    //Estado inicial para el texto que ingresa el usuario
  const productsFiltered = useMemo(() => filterProducts(products, textToSearch), [textToSearch]);   //Estado lista de productos filtrado
  const [modalVisible, setModalVisible] = useState(false)   //Estado de visibilidad de modal con mensaje de producto encontrado o no encontrado
  const navigation = useNavigation() 


  useEffect(() => {
    if (textToSearch !== '' && productsFiltered.length === 0) {
      setModalVisible(true);
    } else {
      setModalVisible(false);
    }
  }, [textToSearch, productsFiltered]);

  const handlePressProduct = (item) => {
    navigation.navigate('Detalle', { product: item });
  };

  return (
    <SafeAreaView>
        <SearchInput 
        onChangeText={setTextToSearch}
        value={textToSearch}
        />
        <FlatList
            data={productsFiltered}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <ProductItem
                {...item}
                onPress={() => handlePressProduct(item)} 
              />
            )}
        />
        <NotFoundModal
          visible={modalVisible}
          textToSearch={textToSearch}
          onClose={() => setModalVisible(false)}
        />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});