import React from 'react';

// Navegação das telas
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Referencia de navegação
import { navigationRef } from './rootNavigation';

// Pages
import Login from '../pages/Login';
import Type from '../pages/Steps/type';
import Car from '../pages/Steps/car';
import Payment from '../pages/Steps/payment';
import Home from '../pages/Home';
import Ride from '../pages/Ride';

// Pilha de Navegação
const Stack = createStackNavigator();

const Routes = () => (
  <NavigationContainer ref={navigationRef}>
    <Stack.Navigator initialRouteName="Login">

      <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
      <Stack.Screen options={{ headerShown: false }} name="Type" component={Type} />
      <Stack.Screen options={{ headerShown: false }} name="Car" component={Car} />
      <Stack.Screen options={{ headerShown: false }} name="Payment" component={Payment} />
      <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
      <Stack.Screen options={{ headerShown: false }} name="Ride" component={Ride} />

    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;