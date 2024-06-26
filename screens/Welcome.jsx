import { StyleSheet, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { theme } from '../config/theme';
import { ROUTE } from '../navigation/Routes';

export default function Welcome() {

    //Se obtiene la instancia de navegacion para dirigir al usuario
    const navigation = useNavigation();
    //Manejar el evento de presionar el boton ingresar
    const handlePress = () => {
        navigation.navigate(ROUTE.TAB_NAVIGATOR); 
      };

  return (
    <SafeAreaView style={styles.safeAreaView}>
        <Image source={require("../icons/logo/logo-de-todito.png")} style={styles.image} />
          <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={styles.buttonText}>Ingresar</Text>
          </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    safeAreaView: { 
        alignItems: 'center',
        flex: 1, 
        justifyContent: 'center'
    },
    button : {
        borderRadius: 15,
        padding: 16,
        marginTop: 20,
        border: '2px',
        backgroundColor: theme.colors.sky['500']
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '900'
    },
    image: {
        width: 160,
        height: 160 
    }
})