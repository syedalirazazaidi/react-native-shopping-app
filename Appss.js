import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AppMain from './Apps';
import {cartReducer} from './src/app/redux/store/slice';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';

const store = configureStore({
  reducer: cartReducer,
});

const Appss = () => {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <NavigationContainer>
          <AppMain />
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
