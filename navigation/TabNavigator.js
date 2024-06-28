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
import StackCart from './StackCart';
import StackOrders from './StackOrders';


const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'green'
      }}
    >
      <Tab.Screen
        name='Tienda'
        component={StackShop}
        options={{
          tabBarIcon: () => (<ShopIcon/>),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name='Carrito'    
        component={StackCart}
        options={{
          tabBarIcon: () => (<CartIcon/>),
          headerShown: false,
          title: 'Carrito',
        }}
      />
      <Tab.Screen
        name='Ordenes' 
        component={StackOrders}
        options={{
          tabBarIcon: () => (<OrderIcon/>),
          title: 'Ordenes',
          headerShown: false,
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