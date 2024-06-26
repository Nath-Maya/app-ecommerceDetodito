import { StyleSheet, FlatList, View, ActivityIndicator, Text } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setCategorySelected } from '../redux/shop/shopSlice'
import { useNavigation } from '@react-navigation/native'
import { useGetCategoriesQuery } from '../service/shopService'
import ItemCategory from './ItemCategory'

export default function Categories() {

  const { data, isLoading, error } = useGetCategoriesQuery()
  const dispatch = useDispatch()
  const navigation = useNavigation()

  //Evento con el cual se activara el filtro por categorias
  const handleCategoryPress = (category) => {
    dispatch(setCategorySelected(category));
    navigation.navigate('Categorías', {category})
  };

  if(isLoading){
    return (
      
      <View>
        <ActivityIndicator size={'Large'} color={"green"}/>
      </View>
  )}

  if(error){
    return (
      <View>
        <Text style={styles.textError} >Error al cargar categorias </Text>
      </View>
  )}
  // console.log('\x1b[42;30m%s\x1b[0m', 'Mi data: ' + data);

  return (
    <View style={styles.categoriesContainer}>
      <FlatList
        data={data}
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
      },
      textError: {
        color: "red",
        fontSize: 20,
      }
})