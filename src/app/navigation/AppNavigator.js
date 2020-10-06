import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CartItems from '../screens/CartItems';
import App from '../../../App';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {/* <Tab.Screen name="App" component={App} /> */}
        <Tab.Screen name="CartItems" component={CartItems} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;
