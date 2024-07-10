import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, SafeAreaView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/auth/authSlice';
import { ROUTE } from '../navigation/Routes';
import { init, fetchSession } from '../database/SQliteConfig';
import { CommonActions } from '@react-navigation/native';
import { useTheme } from 'react-native-paper';
import { Button } from 'react-native-paper';

export default function Welcome() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const { colors } = useTheme();

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

  const styles = createStyles(colors);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Image source={require("../icons/logo/logo-de-todito.png")} style={styles.image} />
      <Button icon="login" mode='elevated' onPress={handlePress} style={styles.button}>
         Ingresar
      </Button>
    </SafeAreaView>
  );
}

const createStyles = (colors) => StyleSheet.create({
  safeAreaView: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    marginTop: 20,
  },
  buttonText: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '900',
  },
  image: {
    width: 160,
    height: 160,
  },
});
