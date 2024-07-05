import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ROUTE } from '../navigation/Routes';
import { useSignUpMutation } from '../service/authService';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import signUpSchema from '../validations/signUpSchema';


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
            console.log('userCredential:', userCredential);
            navigate(ROUTE.LOGIN);
        } catch (error) {
            console.error('Error durante el registro:', error.message);
            setSignupError('Error durante el registro. Por favor, inténtalo de nuevo.');
        }
    };


    return (
        <View style={styles.container}>
            <Controller
                control={control}
                name="name"
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        placeholder="Nombre"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        autoCapitalize="words"
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
                        placeholder="Email"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        keyboardType="email-address"
                        autoCapitalize="none"
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
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        secureTextEntry
                    />
                )}
            />
            {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}

            {signupError ? <Text style={styles.errorText}>{signupError}</Text> : null}

            <TouchableOpacity style={styles.button} onPress={handleSubmit(handleSignUp)}>
                <Text style={styles.buttonText}>Registrarse</Text>
            </TouchableOpacity>
            <Text style={styles.loginText}>¿Ya tienes cuenta?</Text>
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
    errorText: {
        color: 'red',
        marginBottom: 10,
    },
});