import { Text, Pressable, View, StyleSheet } from 'react-native'
import React from 'react'

export default function ConfirmOrderButton() {

    const handleAddToCart = () => {
        console.log("Confirmar pedido");
      };
    
      return (
        <View style={styles.container}>
          <Pressable style={styles.button} onPress={handleAddToCart}>
            <Text style={styles.buttonText}>Confirmar Pedido</Text>
          </Pressable>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 16,
      },
      button: {
        backgroundColor: 'green',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 10,
      },
      buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },
})