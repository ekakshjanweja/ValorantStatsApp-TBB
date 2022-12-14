import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import Axios from 'axios';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Importing external style

import {customStyle} from './style.ts';
import {weaponsApi} from './src/utils/url.js';
import HomeScreen from './src/screens/HomeScreen.tsx';
import WeaponDetailScreen from './src/screens/WeaponDetailScreen.tsx';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="WeaponDetailScreen"
          component={WeaponDetailScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
