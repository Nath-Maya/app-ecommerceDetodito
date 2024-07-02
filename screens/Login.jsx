import { StyleSheet, View, TextInput, Button, Text} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function Login() {

    const { navigate } = useNavigation()

    const handleLogin = () => {
        console.log("Ingresar");
      };
    
      const handleRegister = () => {
        navigate('SignUp')
      };

  return (
    <View style={styles.container}>
        <Text>Ingresar</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        // onChangeText={(text) => setEmail(text)}
        // value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        // onChangeText={(text) => setPassword(text)}
        // value={password}
        secureTextEntry
      />
      <Button title="Ingresar" onPress={handleLogin} />
      <Button title="Registrarme"  onPress={handleRegister}/>
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