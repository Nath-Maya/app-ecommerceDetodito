import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ROUTE } from '../navigation/Routes';
import { useSignUpMutation } from '../service/authService';


export default function SignUp() {

    const { navigate } = useNavigation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [triggerSignUp, result] = useSignUpMutation()

    const handleSignUp = async () => {
      console.log("----", email, name, password);
      try {
        const payload = await triggerSignUp({ name, email, password }).unwrap()
        console.log("Registro: " + payload);
      } catch (error) {
        console.log(error);
      }
        

    };

    const goToLogin = () => { navigate(ROUTE.LOGIN)};

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Nombre"
                onChangeText={setName}
                value={name}
                autoCapitalize="words"
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={setEmail}
                value={email}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                onChangeText={setPassword}
                value={password}
                secureTextEntry
            />
            <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                <Text style={styles.buttonText}>Registrarse</Text>
            </TouchableOpacity>
            <Text style={styles.loginText}>¿Ya tienes cuenta?</Text>
            <TouchableOpacity onPress={goToLogin}>
                <Text style={styles.loginLink}>Ingresar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#fff', 
    },
    input: {
        height: 40,
        width: '100%',
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 5, 
    },
    button: {
        backgroundColor: '#007bff', 
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 10, 
    },
    buttonText: {
        color: '#fff', 
        fontSize: 16,
        fontWeight: 'bold',
    },
    loginText: {
        marginBottom: 10, 
        fontSize: 14,
        color: '#333', 
    },
    loginLink: {
        color: '#007bff', 
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 20
    },
});

