import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { ROUTE } from '../navigation/Routes';


export default function SignUp() {

    const { navigate } = useNavigation()


    const handleSignUp = () => {
    
    };

    const goToLogin = () => {
      navigate(ROUTE.LOGIN)
    }


  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        // onChangeText={text => setName(text)}
        // value={name}
        autoCapitalize="words"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        // onChangeText={text => setEmail(text)}
        // value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        // onChangeText={text => setPassword(text)}
        // value={password}
        secureTextEntry
      />
      <Button title="Registrarse" onPress={handleSignUp} />
      <Text>Ya tienes cuenta? </Text>
      <Button title='Ingresar' onPress={goToLogin}> Ingresar </Button>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
      },
      input: {
        height: 40,
        width: '100%',
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
      },
})