import React from 'react';
import { StyleSheet, View, TextInput, Button, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ROUTE } from '../navigation/Routes';


export default function Login() {


    const { navigate } = useNavigation();
    // const user = useSelector(state => state.auth.value.user)

    const handleLogin = () => {
        console.log('Iniciar sesión');
    };
    
    //Redireccionar a Crear cuenta
    const handleRegister = () => {
        navigate(ROUTE.SIGN_UP);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ingresar</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                // onChangeText={(text) => setEmail(text)}
                // value={email}
            />
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                secureTextEntry
                // onChangeText={(text) => setPassword(text)}
                // value={password}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Ingresar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleRegister}>
                <Text style={styles.registerLink}>Registrarme</Text>
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
        backgroundColor: '#fff', // Fondo blanco
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333', // Texto gris oscuro
    },
    input: {
        height: 40,
        width: '100%',
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 5, // Bordes redondeados
    },
    button: {
        backgroundColor: '#007bff', // Azul
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        color: '#fff', // Texto blanco
        fontSize: 16,
        fontWeight: 'bold',
    },
    registerLink: {
        marginTop: 10,
        fontSize: 16,
        color: '#007bff', // Azul
        fontWeight: 'bold',
    },
});
