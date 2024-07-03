import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { getTotalItems, getTotalPrice } from '../redux/cart/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { usePostOrderMutation } from '../service/shopService'


export default function TotalCart() {

  const dispatch = useDispatch();
  const totalItems = useSelector(state => state.cart.totalItems);
  const totalPrice = useSelector(state => state.cart.totalPrice);
  const items = useSelector(state => state.cart.items)
  const user = useSelector(state => state.cart.user)

  
  useEffect(() => {
    dispatch(getTotalItems());
    dispatch(getTotalPrice());
    console.log('Total: $' + totalPrice + "- Total productos: " + totalItems);
  }, [items,dispatch])

  const cartIsEmpty = items.length === 0
  

const [triggerPost, result] = usePostOrderMutation()

  const confirmOrder = () => {
    triggerPost({ items, totalPrice, user})
    console.log("Confirmar pedido");
  }


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Total Items: {totalItems}</Text>
      <Text style={styles.text}>Total Price: ${totalPrice}</Text>
      <View style={styles.containerButton}>
        {cartIsEmpty ? null : (
          <Pressable style={styles.button} onPress={confirmOrder}>
            <Text style={styles.buttonText}>Confirmar Pedido</Text>
          </Pressable>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 16,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        alignItems: 'center',
      },
      text: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      containerButton: {
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