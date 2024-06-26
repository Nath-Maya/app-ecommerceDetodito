import React from "react"
import { StyleSheet, Text, Button, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default Home = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.textContainer}>
      <Text style={styles.title}>Categorías</Text>
      <Text style={styles.subtitle}>¡Aquí encontrarás de todo!</Text>
    </View>
    <Button title="Explorar" onPress={() => {}} color="#1679AB" />
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
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
  },
})