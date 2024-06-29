import { StyleSheet, FlatList, View } from 'react-native'
import React from 'react'
import ItemCategory from './ItemCategory'
import { useDispatch, useSelector } from 'react-redux'
import { setCategorySelected } from '../redux/shop/shopSlice'
import { useNavigation } from '@react-navigation/native'
import ItemListCategory from '../screens/ItemListCategory'


export default function Categories() {

  const categories = useSelector(state => state.shop.categories) //Selecciono el estado de categorias
  const dispatch = useDispatch()
  const navigation = useNavigation()

  //Evento con el cual se activara el filtro por categorias
  const handleCategoryPress = (category) => {
    dispatch(setCategorySelected(category));
    navigation.navigate('Categorías', {category})
  };

  return (
    <View style={styles.categoriesContainer}>
      <FlatList
        data={categories}
        renderItem={({ item }) => 
          <ItemCategory name={item} onPress={() => handleCategoryPress(item)} />}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    categoriesContainer: {
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
      }
})