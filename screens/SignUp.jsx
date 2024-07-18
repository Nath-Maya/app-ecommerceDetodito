import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { DarkTheme, useNavigation } from '@react-navigation/native';
import { ROUTE } from '../navigation/Routes';
import { useSignUpMutation } from '../service/authService';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import signUpSchema from '../validations/signUpSchema';
import { Button, TextInput } from 'react-native-paper';


export default function SignUp() {

    const { navigate } = useNavigation();
    const [signupError, setSignupError] = useState('');
    const [triggerSignUp, { data: userCredential, error }] = useSignUpMutation();

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(signUpSchema)
    });

    const handleSignUp = async (formData) => {
        try {
            const { email, password } = formData;
            const response = await triggerSignUp({ email, password });

            if (response.error) {
                throw new Error(response.error.data); 
            }
            navigate(ROUTE.LOGIN);
        } catch (error) {
            console.error('Error durante el registro:', error.message);
            setSignupError('Error durante el registro. Por favor, inténtalo de nuevo.');
        }
    };


    return (
        <View style={styles.container}>
            <Text style={styles.title}> Registrate aquí </Text>
            <Text style={styles.subtitle}>Crea una cuenta para comenzar</Text>
            <Controller
                control={control}
                name="name"
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        label='Nombre'
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        autoCapitalize="words"
                        mode='outlined'
                    />
                )}
            />
            {errors.name && <Text style={styles.errorText}>{errors.name.message}</Text>}

            <Controller
                control={control}
                name="email"
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        label="Email"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        keyboardType="email-address"
                        autoCapitalize="none"
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
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        secureTextEntry
                        mode='outlined'
                    />
                )}
            />
            {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}

            {signupError ? <Text style={styles.errorText}>{signupError}</Text> : null}

            <Button mode="contained-tonal" icon='account-arrow-right' onPress={handleSubmit(handleSignUp)} style={styles.button}>
                Registrarse
            </Button>
            <Text style={styles.loginText}> ¿Ya tienes cuenta? </Text>
            <TouchableOpacity onPress={() => navigate(ROUTE.LOGIN)}>
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
    title: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 10
    },
    subtitle: {
        color: 'gray',
        marginBottom: 40
    },
    input: {
        height: 40,
        width: '90%',
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    button: {
        marginTop: 10,
        marginBottom: 10, 
        fontSize: 10,
    },
    buttonText: {
        color: '#fff', 
        fontSize: 16,
        fontWeight: 'bold',
    },
    loginText: {
        marginTop: 20,
        fontSize: 14,
        color: DarkTheme.colors.outline, 
    },
    loginLink: {
        color: '#007bff', 
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
    },
});