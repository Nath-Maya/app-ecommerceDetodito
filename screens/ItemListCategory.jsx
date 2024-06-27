import {  SafeAreaView, FlatList, Modal, View, StyleSheet, Text, Button } from 'react-native'
import { useState, useEffect } from 'react'
import React from 'react'
import ProductItem from '../components/ProductItem'
import products from '../data/products.json'
import SearchInput from '../components/SearchInput'

export default function ItemListCategory() {


  const [textToSearch, setTextToSearch] = useState('')    //Estado inicial para el texto que ingresa el usuario
  const [productsFiltered, setProductsFiltered] = useState(products)   //Estado lista de productos filtrado
  const [modalVisible, setModalVisible] = useState(false)   //Estado de visibilidad de modal con mensaje de producto encontrado o no encontrado

  //Filtrar los productos con el texto ingresado del usuario teniendo en cuenta sus categorias
  useEffect( () => {
    const filtered = products.filter(
      product => 
        product.category.toLowerCase().includes(textToSearch.toLowerCase())
    )
    setProductsFiltered(filtered)
 
    // Mostrar modal si no se encuentra ningún producto
    if (textToSearch !== '' && filtered.length === 0) {
      setModalVisible(true);
    } else {
      setModalVisible(false);
    }
 
  }, [textToSearch])

  
  return (
    <SafeAreaView>
        <SearchInput 
        onChangeText={setTextToSearch}
        value={textToSearch}
        />
        <FlatList
            data={ productsFiltered }
            key = {item => item.id}
            renderItem={({item}) => <ProductItem {...item}/>}
        />
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
            }}
        >
          <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Producto no encontrado</Text>
            <Button
              title="Cerrar"
              onPress={() => setModalVisible(!modalVisible)}
            />
            </View>
          </View>
        </Modal>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});