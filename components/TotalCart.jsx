import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { getTotalItems, getTotalPrice } from '../redux/cart/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { usePostOrderMutation } from '../service/shopService'
import { Button, useTheme } from 'react-native-paper';



export default function TotalCart() {

  const dispatch = useDispatch();
  const totalItems = useSelector(state => state.cart.totalItems);
  const totalPrice = useSelector(state => state.cart.totalPrice);
  const items = useSelector(state => state.cart.items)
  const user = useSelector(state => state.cart.user)
  const { colors } = useTheme()
  const styles = createStyles(colors);

  
  useEffect(() => {
    dispatch(getTotalItems());
    dispatch(getTotalPrice());
  }, [items,dispatch])

  const cartIsEmpty = items.length === 0
  

const [triggerPost, result] = usePostOrderMutation()

  const confirmOrder = () => {
    triggerPost({ items, totalPrice, user})
    console.log("Confirmar pedido");
  }


  return (
    <View style={styles.container}>
      <View style={styles.detailOrder}>
        <Text style={styles.text}>Total Items: {totalItems}</Text>
        <Text style={styles.text}>Total Price: ${totalPrice}</Text>
      </View>
      {cartIsEmpty ? null : (
        <Button icon="text-box-check" onPress={confirmOrder} mode="elevated">
          Confirmar pedido
        </Button>
      )}
    </View>
  );
}

const createStyles = (colors) =>  StyleSheet.create({
    container: {
        paddingVertical: 10,
        borderTopColor: '#ccc',
        alignItems: 'center',
        backgroundColor: colors.onSecondaryContainer,
        flexDirection: 'column',
        justifyContent: 'space-around',
        borderRadius: 10
      },
      detailOrder: {
        flexDirection: 'row',
        marginBottom: 15
      },
      text: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingHorizontal: 10,
        color: 'white'
      },
})