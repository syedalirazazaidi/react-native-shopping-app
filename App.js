/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, Text, StyleSheet, ScrollView, View} from 'react-native';
import MenuBar from './src/app/components/menuBar';
import SearchBar from './src/app/components/SearchBar';
import color from './src/app/assets/Constants/colors';
import NikeStore from './src/app/screens/NikeStore';
import {Provider} from '@reduxjs/toolkit';
import {store} from './src/app/redux/store/configStore.js';
import TabNavigator from './src/app/navigation/AppNavigator';
import {NavigationContainer} from '@react-navigation/native';
import NavigationRoute from './src/app/components/navigation';
import BottomTap from './src/app/components/bottomTap';
import 'react-native-gesture-handler';
import AppThrow from './src/app/components/menuBar';
import {useDispatch, useSelector} from 'react-redux';

import IconA from 'react-native-vector-icons/EvilIcons';
console.log(store);
const App = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <>
      <SafeAreaView style={styles.container}>
        {/* <MenuBar /> */}
        {/* <AppThrow /> */}
        {/* <SearchBar /> */}
        {/* <Text>{state.products.length}</Text> */}
        <IconA style={styles.iconCart} name="cart" size={40} />
        <Text style={styles.text}>Categories</Text>
        <NikeStore />
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: color.offwhite,
  },
  image: {
    paddingHorizontal: 10,
    padding: 20,
  },
  iconCart: {
    marginLeft: 340,
    marginTop: 20,
    // alignItems: 'flex-end',
    // justifyContent: 'flex-start',
  },

  leng: {
    position: 'relative',
    left: 140,
    top: -10,
    color: '#fff',
    zIndex: 1,
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 18,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 30,
    marginHorizontal: 20,
    marginTop: 30,
  },
});

export default App;
