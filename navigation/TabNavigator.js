import React from 'react'
import { StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ROUTE } from './Routes';
import { ShopIcon } from '../icons/ShopIcon';
import { CartIcon } from '../icons/CartIcon';
import { OrderIcon } from '../icons/OrderIcon'
import { ProfileIcon } from '../icons/ProfileIcon'
import Cart from '../screens/Cart'
import Orders from '../screens/Orders'
import MyProfile from '../screens/MyProfile'
import StackShop from './StackShop';


const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Tienda'
        component={StackShop}
        options={{
          tabBarIcon: () => (<ShopIcon/>),
        }}
      />
      <Tab.Screen
        name={ROUTE.CART}     
        component={Cart}
        options={{
          tabBarIcon: () => (<CartIcon/>),
          title: 'Carrito',
        }}
      />
      <Tab.Screen
        name={ROUTE.ORDERS}     
        component={Orders}
        options={{
          tabBarIcon: () => (<OrderIcon/>),
          title: 'Ordenes',
        }}
      />
      <Tab.Screen
        name={ROUTE.MY_PROFILE}     
        component={MyProfile}
        options={{
          tabBarIcon: () => (<ProfileIcon/>),
          title: 'Mi Perfil',
        }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({

})