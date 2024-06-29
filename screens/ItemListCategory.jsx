import { SafeAreaView, FlatList, StyleSheet } from 'react-native'
import { useState, useEffect, useMemo } from 'react'
import React from 'react'
import ProductItem from '../components/ProductItem'
import SearchInput from '../components/SearchInput'
import { useNavigation } from '@react-navigation/native'
import NotFoundModal from '../components/NotFoundModal'
import { useSelector } from 'react-redux'

// Filtrar los productos
const filterProducts = (products, textToSearch) => {
  if (!textToSearch) return products;
  return products.filter(product =>
    product.category.toLowerCase().includes(textToSearch.toLowerCase())
  );
};

export default function ItemListCategory() {
  const [textToSearch, setTextToSearch] = useState(''); // Estado inicial para el texto que ingresa el usuario
  const [modalVisible, setModalVisible] = useState(false); // Estado de visibilidad de modal con mensaje de producto encontrado o no encontrado
  const navigation = useNavigation();
  

  const products = useSelector(state => state.shop.products);

  // Filtrar productos basado en el texto de búsqueda
  const productsFiltered = useMemo(() => filterProducts(products, textToSearch), [products, textToSearch]);

  // Efecto para mostrar modal si no se encuentran productos
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
    <SafeAreaView style={styles.container}>
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
