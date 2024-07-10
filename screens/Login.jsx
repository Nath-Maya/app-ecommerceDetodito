import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ROUTE } from '../navigation/Routes';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../database/firebaseConfig';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/auth/authSlice'; 
import { loginSchema } from '../validations/loginSchema';
import { useEffect } from 'react';
import { insertSession, fetchSession, init } from '../database/SQliteConfig';
import { Button, TextInput } from 'react-native-paper';


export default function Login() {
    
    const { navigate } = useNavigation();
    const [ loginError, setLoginError ] = useState('');
    const dispatch = useDispatch(); 

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    });

    useEffect(() => {
        const initializeDatabase = async () => {
            await init();
            const session = await fetchSession();
            if (session) {
                dispatch(setUser({ email: session.email, localId: session.localId, token: session.token }));
                navigate(ROUTE.TAB_NAVIGATOR);
            }
        };

        initializeDatabase();
    }, []);


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
                console.log(`Usuario ${user.email} ha iniciado sesión.`);
                const token = await user.getIdToken();
                const userSession = { email: user.email, localId: user.uid, token };
                await insertSession(userSession);
                dispatch(setUser(userSession));

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
            <Text style={styles.title}>Bienvenido !</Text>
            <Controller
                control={control}
                name="email"
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        label="Email"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        mode='outlined'
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
                        label="Contraseña"
                        secureTextEntry
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        mode='outlined'
                    />
                )}
            />
            {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}

            {loginError ? <Text style={styles.errorText}>{loginError}</Text> : null}

            <Button icon="login" mode='contained' onPress={handleLogin} style={styles.buttonText}>
                Iniciar Sesión
            </Button>
            <View>
                <Text>¿No eres un miembro?</Text>
                <Button mode="text" onPress={() => navigate(ROUTE.SIGN_UP)} >
                Regístrate ahora
                </Button>
            </View>
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
        marginBottom: 40,
    },
    input: {
        height: 40,
        width: '90%',
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    buttonText: {
        marginVertical: 35,
    },
    registerLink: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
    },
});