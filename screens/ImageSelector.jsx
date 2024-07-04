import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import { PermissionStatus, launchImageLibraryAsync } from 'expo-image-picker'
import * as ImagePicker from 'expo-image-picker'


export default function ImageSelector() {

  const [ image, setImage ] = useState(null)

  const verifyPermissions = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync()
    if (!granted ) {
      Alert.alert('Permisos insuficientes', 'Necesitas dar permisos para usar la camara', [{text: 'Ok'}])
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
    setImage(`data:image/jpeg;base64,${image.assets[0].base64}`)
  }

  const confirmImage = () => { }

  return (
    <View style={styles.imageSelector}>
      {image ? (
        <>
          <Image source={{ uri: image }} style={styles.image} />
          <View style={styles.actions}>
            <Button onPress={pickImage}>Tomar otra</Button>
            <Button onPress={confirmImage}>
              {isSavingProfileImage ? 'Confirmando...' : 'Confirmar'}
            </Button>
          </View>
        </>
      ) : (
        <>
          <Text>No hay foto para mostrar...</Text>
          <Button onPress={pickImage}>Tomar foto</Button>
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