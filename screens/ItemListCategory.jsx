import { SafeAreaView, FlatList, StyleSheet } from 'react-native';
import { useState, useEffect, useMemo } from 'react';
import React from 'react';
import ProductItem from '../components/ProductItem';
import SearchInput from '../components/SearchInput';
import { useNavigation } from '@react-navigation/native';
import NotFoundModal from '../components/NotFoundModal';
import { useDispatch, useSelector } from 'react-redux';
import { setCategorySelected } from '../redux/shop/shopSlice';

// Filtrar productos tanto por selección de categoría en lista o por busqueda de texto
const filterProducts = (products, textToSearch, selectedCategory) => {
  let filteredProducts = products;

  if (selectedCategory) {
    filteredProducts = filteredProducts.filter(product =>
      product.category.toLowerCase() === selectedCategory.toLowerCase()
    );
  }

  if (textToSearch) {
    filteredProducts = filteredProducts.filter(product =>
      product.title.toLowerCase().includes(textToSearch.toLowerCase())
    );
  }

  return filteredProducts;
};

export default function ItemListCategory() {
  const [textToSearch, setTextToSearch] = useState(''); // Estado inicial para el texto que ingresa el usuario
  const [modalVisible, setModalVisible] = useState(false); // Estado de visibilidad de modal con mensaje de producto encontrado o no encontrado
  const navigation = useNavigation();
  const dispatch = useDispatch();

  // Obtener los productos y selector de categorías
  const products = useSelector(state => state.shop.products);
  const selectedCategory = useSelector(state => state.shop.categorySelected); // Obtener la categoría seleccionada desde el estado

  // Filtrar productos basado en la categoría seleccionada y el texto de búsqueda
  const productsFiltered = useMemo(() => filterProducts(products, textToSearch, selectedCategory), [products, textToSearch, selectedCategory]);

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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
