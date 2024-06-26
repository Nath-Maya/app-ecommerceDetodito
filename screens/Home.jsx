import React from "react"
import { StyleSheet, Text, Button, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import ItemCategory from "../components/ItemCategory"
import Categories from "../components/Categories"


export default Home = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.textContainer}>
      <Text style={styles.title}>Gran Variedad</Text>
      <Categories/>
      <Text style={styles.subtitle}>¡Aquí encontrarás de todo!</Text>
    </View>
  </SafeAreaView>
)

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
    marginBottom: 30
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginTop: 20
  },
})