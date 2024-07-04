import * as yup from 'yup';

const signUpSchema = yup.object().shape({
    
    name: yup.string().matches(/^[A-Za-z\s]+$/, 'El nombre solo puede contener letras y espacios').required('Nombre es requerido'),
    email: yup.string().email('Formato de correo inválido').required('Email es requerido'),
    password: yup.string().min(6, 'Contraseña debe tener mínimo 6 caracteres').required('Contraseña es requerido')
});

export default signUpSchema;