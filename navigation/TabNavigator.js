import React from 'react'
import { StyleSheet, Image } from 'react-native';
import Home from '../screens/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ROUTE } from './Routes';
import ShopIcon from '../icons/ShopIcon';


const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
      name={ROUTE.HOME}
      component={Home}
      options={{
        tabBarIcon: () => (
          <ShopIcon/>
        ),
        title: 'Tienda',
      }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({

})