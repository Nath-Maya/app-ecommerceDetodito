import React, { useState, useEffect, useMemo } from 'react';
import { SafeAreaView, FlatList, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useGetProductsByCategoryQuery } from '../service/shopService';
import ProductItem from '../components/ProductItem';
import NotFoundModal from '../components/NotFoundModal';
import Categories from '../components/Categories.jsx';
import { Searchbar } from 'react-native-paper';

export default function ItemListCategory() {
  const [textToSearch, setTextToSearch] = useState(''); 
  const [modalVisible, setModalVisible] = useState(false); 
  const navigation = useNavigation();
  const route = useRoute();
  const { category } = route.params;
  const { data: productsObject = {} } = useGetProductsByCategoryQuery(category);

  const products = useMemo(() => Object.values(productsObject), [productsObject]);

  const productsFiltered = useMemo(() => {
    return products.filter(product => {
      const title = product.title.toLowerCase();
      const categoryMatch = product.category.toLowerCase() === category.toLowerCase();
      const textMatch = textToSearch.toLowerCase() === '' || title.includes(textToSearch.toLowerCase());
      return categoryMatch && textMatch;
    });
  }, [products, textToSearch, category]);

 
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

  console.log(productsFiltered)

  return (
    <SafeAreaView style={styles.container}>
      <Searchbar
        placeholder='Buscar producto...'
        onChangeText={setTextToSearch}
        value={textToSearch}
        style={styles.searchBar}
        mode='bar'
        iconColor='gray'
        searchAccessibilityLabel='Search'
      />
      <Categories/>
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
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
  },
  searchBar: {
    margin: 8,
  },
});
