import React from "react"
import { TouchableOpacity, StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Categories from "../components/Categories"
import {  useNavigation } from "@react-navigation/native"
import { ROUTE } from "../navigation/Routes"
import StackShop from '../navigation/StackShop'

export default function Home () {

  const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('Categorías'); 
      };


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Gran Variedad</Text>
        <Categories/>
        <Text style={styles.subtitle}>¡Aquí encontrarás de todo!</Text>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={styles.buttonText}>Explorar</Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  textContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
})