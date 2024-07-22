import { StyleSheet, Text, View, Image, Alert } from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { launchCameraAsync } from "expo-image-picker"; // Cambiado a launchCameraAsync
import { useDispatch, useSelector } from "react-redux";
import { setProfilePicture } from "../redux/auth/authSlice";
import { useNavigation } from "@react-navigation/native";
import { usePostProfileImageMutation } from "../service/userService";
import { Chip } from "react-native-paper";

export default function ImageSelector() {
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();
  const { goBack } = useNavigation();
  const [triggerSaveProfileImage] = usePostProfileImageMutation();

  const localId = useSelector((state) => state.auth.value.user.localId);

  const verifyPermissions = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      Alert.alert(
        "Permisos insuficientes",
        "Necesitas dar permisos para usar la cámara",
        [{ text: "Ok" }]
      );
      return false;
    }
    return true;
  };

  const pickImage = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) return;

    const image = await launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      base64: true,
      quality: 0.25,
    });
    if (image.canceled) return;
    const imageUri = `data:image/jpeg;base64,${image.assets[0].base64}`;
    setImage(imageUri);
    dispatch(setProfilePicture(imageUri));
  };

  const confirmImage = () => {
    try {
      dispatch(setProfilePicture(image));
      triggerSaveProfileImage({ image, localId });
      goBack();
    } catch (error) {
      console.error("Error al confirmar la imagen: ", error);
    }
  };

  return (
    <View style={styles.imageSelector}>
      {image ? (
        <>
          <Image source={{ uri: image }} style={styles.image} />
          <View style={styles.actions}>
            <Chip mode="outlined" icon="information" onPress={pickImage}>
              Tomar Otra
            </Chip>
            <Chip mode="flat" icon="account-check" onPress={confirmImage}>
              Confirmar
            </Chip>
          </View>
        </>
      ) : (
        <>
          <Text style={styles.noImageText}>No hay foto para mostrar...</Text>
          <Chip mode="outlined" icon="camera-burst" onPress={pickImage}>
            Tomar foto
          </Chip>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  imageSelector: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    gap: 32,
  },
  actions: {
    flexDirection: "row",
    gap: 16,
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 80,
  },
  noImageText: {
    fontSize: 18,
    color: "#888",
    textAlign: "center",
    marginVertical: 20,
  },
});
