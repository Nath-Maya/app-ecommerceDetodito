import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';


export default function MyProfile() {
  const { navigate } = useNavigation();
  const imageCamera = useSelector(state => state.auth.value.imageCamera);

  const handleAddPhoto = () => {
    navigate('ImageSelector');
  };

  return (
    <View style={styles.myProfile}>
      <Text style={styles.title}>Mi cuenta</Text>
      <Image
        source={
          imageCamera
            ? { uri: imageCamera }
            : require('../icons/myProfile/profile-image-placeholder-png.png')
        }
        resizeMode="cover"
        style={styles.image}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddPhoto}>
        <Text style={styles.buttonText}>Agregar foto de perfil</Text>
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
