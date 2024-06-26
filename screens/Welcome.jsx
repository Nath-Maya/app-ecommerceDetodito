import { StyleSheet, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { theme } from '../config/theme';

export default function Welcome() {

    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('Home'); 
      };

  return (
    <SafeAreaView style={styles.safeAreaView}>
        <Image source={require("../assets/icons/logo/logo-de-todito.png")} style={styles.image} />
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