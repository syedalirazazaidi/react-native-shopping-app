import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AppMain from './Apps';
import {cartReducer} from './src/app/redux/store/slice';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import AppThrow from './src/app/components/menuBar';
import MenuBar from './src/app/components/menuBar';
import Profile from './src/app/screens/drawers/Profile';

import {createDrawerNavigator} from '@react-navigation/drawer';
const store = configureStore({
  reducer: cartReducer,
});

const Drawer = createDrawerNavigator();

const Appss = () => {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="HomeMAin" component={AppMain} />
            <Drawer.Screen name="Profile" component={Profile} />
          </Drawer.Navigator>
        </NavigationContainer>
      </Provider>
    </View>
  );
};

export default Appss;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
