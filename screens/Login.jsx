import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ROUTE } from '../navigation/Routes';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { loginSchema } from '../validations/loginSchema';
import { auth } from '../database/firebaseConfig';


export default function Login() {

    const { navigate } = useNavigation();
    const [ loginError, setLoginError ] = useState('');

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const handleLogin = async (data) => {
        const { email, password } = data;

        if (!email || !password) {
            console.error('El email y la contraseña son obligatorios.');
            return;
        }

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            if (user && user.email) {
                console.log('\x1b[34m%s\x1b[0m',`Usuario ${user.email} ha iniciado sesión.`);
                navigate(ROUTE.TAB_NAVIGATOR);
            } else {
                console.warn("El usuario o el email es undefined.");
            }
        } catch (error) {
            if (error.code === 'auth/wrong-password') {
                setLoginError('La contraseña es incorrecta.');
            } else if (error.code === 'auth/user-not-found') {
                setLoginError('No se encontró ningún usuario con este email.');
            } else {
                setLoginError('Error durante el inicio de sesión. Por favor, inténtalo de nuevo.');
            }
            console.error('Error durante el inicio de sesión:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ingresar</Text>
            <Controller
                control={control}
                name="email"
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
            />
            {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}

            <Controller
                control={control}
                name="password"
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        placeholder="Contraseña"
                        secureTextEntry
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
            />
            {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}

            {loginError ? <Text style={styles.errorText}>{loginError}</Text> : null}

            <TouchableOpacity style={styles.button} onPress={handleSubmit(handleLogin)}>
                <Text style={styles.buttonText}>Ingresar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate(ROUTE.SIGN_UP)}>
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
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
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
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    registerLink: {
        marginTop: 10,
        fontSize: 16,
        color: '#007bff',
        fontWeight: 'bold',
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
    },
});
