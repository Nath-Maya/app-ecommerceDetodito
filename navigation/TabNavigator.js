import React from 'react'
import { Image, StyleSheet } from 'react-native';
import Home from '../screens/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ROUTE } from './Routes';
import Welcome from '../screens/Welcome';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
      name={ROUTE.HOME}
      component={Home}
      options={{
        tabBarIcon: () => (
          <Image
            source={require('../assets/icons/tab-navigation/hogar.png')}
            style={styles.iconTab}
          />
        ),
        title: 'Inicio',
      }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  iconTab: {
    width: 25,
    height: 25
  }
})