import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { useGetProfileImageQuery } from '../service/userService';
import {  setUserPhoto } from '../redux/auth/authSlice';
import { Button } from 'react-native-paper';

export default function MyProfile() {

  const { navigate } = useNavigation();
  const user = useSelector(state => state.auth.value.user);
  const profilePicture = useSelector(state => state.auth.value.profilePicture);
  const { data: profileImage } = useGetProfileImageQuery(user.localId);
  const dispatch = useDispatch();


  useEffect(() => {
    if (profileImage) {
      dispatch(setUserPhoto(profileImage.image));
    }
  }, [profileImage, dispatch]);

  const handleAddPhoto = () => {
    navigate('ImageSelector');
  };

  return (
    <View style={styles.myProfile}>
      <Text style={styles.title}>{user.email}</Text>
      <Image
        source={
          profilePicture
            ? { uri: profilePicture }
            : user.photo
              ? { uri: user.photo }
              : require('../icons/myProfile/profile-image-placeholder-png.png')
        }
        resizeMode='cover'
        style={styles.image}
      />
      <Button icon="camera" mode="contained-tonal" title="Agregar foto de perfil" onPress={handleAddPhoto}>
        Agregar foto de perfil
      </Button>
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
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 50,
    marginBottom: 32,
  },
});
