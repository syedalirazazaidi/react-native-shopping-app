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
import {store} from './src/app/redux/store/store';
import TabNavigator from './src/app/navigation/AppNavigator';
import {NavigationContainer} from '@react-navigation/native';
import NavigationRoute from './src/app/components/navigation';
import BottomTap from './src/app/components/bottomTap';
import 'react-native-gesture-handler';
console.log(store);
const App = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <MenuBar />
        <SearchBar />
        <Text style={styles.text}>Categories</Text>
        <ScrollView style={styles.image}>
          <NikeStore />
        </ScrollView>
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
  text: {
    fontWeight: 'bold',
    fontSize: 30,
    marginHorizontal: 20,
    marginTop: 30,
  },
});

export default App;
