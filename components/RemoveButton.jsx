import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function RemoveButton({ id, handleDelete }) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={() => handleDelete(id)}>
        <Text style={styles.buttonText}>Eliminar</Text>
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
    backgroundColor: '#dc3545',
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
