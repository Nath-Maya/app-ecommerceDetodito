import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/auth/authSlice';
import { theme } from '../config/theme';
import { ROUTE } from '../navigation/Routes';
import { init, fetchSession } from '../database/SQliteConfig';
import { CommonActions } from '@react-navigation/native';

export default function Welcome() {
    
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      await init();
      const session = await fetchSession();
      if (session) {
        dispatch(setUser({ email: session.email, localId: session.localId, token: session.token }));
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: ROUTE.TAB_NAVIGATOR }],
          })
        );
      } else {
        setIsLoading(false);
      }
    };

    checkSession();
  }, []);

  const handlePress = () => {
    if (!isLoading) {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: ROUTE.STACK_AUTH }],
        })
      );
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Image source={require("../icons/logo/logo-de-todito.png")} style={styles.image} />
      <TouchableOpacity style={styles.button} onPress={handlePress} disabled={isLoading}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    borderRadius: 15,
    padding: 16,
    marginTop: 20,
    borderWidth: 2,
    backgroundColor: theme.colors.sky['500'],
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '900',
  },
  image: {
    width: 160,
    height: 160,
  },
});
