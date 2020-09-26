import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CartItems from '../screens/CartItems';
import App from '../../../App';
const Tab = createBottomTabNavigator();
const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="App" component={App} />
    <Tab.Screen name="CartItems" component={CartItems} />
  </Tab.Navigator>
);

export default AppNavigator;
