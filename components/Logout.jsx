import { Pressable, StyleSheet, Image } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import {deleteSession} from '../database/SQliteConfig'
import { logout } from '../redux/auth/authSlice'
import { useNavigation } from '@react-navigation/native'
import Login from '../screens/Login'


export default function Logout() {

    const dispatch = useDispatch()

    const {navigate} = useNavigation()

const handleLogout = () => {
    dispatch(logout())
    deleteSession()
    console.log('\x1b[31m%s\x1b[0m', 'Se cerro la sesión');
    navigate('Login')
}

  return (
    <Pressable onPress={handleLogout}>
        <Image style={styles.icon} source={require('../icons/logout/salida.png')}/>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30,
        marginRight: 8

    }
})