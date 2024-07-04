import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

export default function MyProfile() {

  const handleAddPhoto = () => {
    // Lógica para agregar foto de perfil
    console.log("Agregar foto de perfil");
  };

  const handleAddLocation = () => {
    // Lógica para agregar ubicación
    console.log("Agregar ubicación");
  };

  return (
    <View style={styles.myProfile}>
      <Text style={styles.title}>Mi cuenta</Text>
      <Image
        source={require('../icons/myProfile/profile-image-placeholder-png.png')}
        resizeMode='cover'
        style={styles.image}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddPhoto}>
        <Text style={styles.buttonText}>Agregar foto de perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleAddLocation}>
        <Text style={styles.buttonText}>Agregar ubicación</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  myProfile: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 80,
    marginBottom: 32,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
