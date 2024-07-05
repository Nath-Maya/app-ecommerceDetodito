import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import { PermissionStatus, launchImageLibraryAsync } from 'expo-image-picker'
import * as ImagePicker from 'expo-image-picker'
import { useDispatch } from 'react-redux'
import { setCameraImage } from '../redux/auth/authSlice'
import { useNavigation } from '@react-navigation/native'


export default function ImageSelector() {

  const [image, setImage] = useState(null)
  const dispatch = useDispatch()
  const { goBack } = useNavigation()


  const verifyPermissions = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync()
    if (!granted) {
      Alert.alert('Permisos insuficientes', 'Necesitas dar permisos para usar la cámara', [{ text: 'Ok' }])
      return false
    }
    return true
  }

  const pickImage = async () => {
    const hasPermission = await verifyPermissions()
    if (!hasPermission) return

    const image = await launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      base64: true,
      quality: 0.25
    })
    if (image.canceled) return
    const imageUri = `data:image/jpeg;base64,${image.assets[0].base64}`;
    setImage(imageUri);
    dispatch(setImageCamera(imageUri));
  }

  const confirmImage = () => {
    dispatch(setCameraImage(image))
    goBack()
  }

  return (
    <View style={styles.imageSelector}>
      {image ? (
        <>
          <Image source={{ uri: image }} style={styles.image} />
          <View style={styles.actions}>
            <Pressable onPress={pickImage}>
              <Text>Tomar otra</Text>
            </Pressable>
            <Pressable onPress={confirmImage}>
              <Text>Confirmar</Text>
            </Pressable>
          </View>
        </>
      ) : (
        <>
          <Text>No hay foto para mostrar...</Text>
          <Pressable onPress={pickImage}>
            <Text>Tomar foto</Text>
          </Pressable>
        </>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  imageSelector: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    gap: 32,
  },
  actions: {
    gap: 16,
  },
  image: { width: 160, height: 160 },
})
