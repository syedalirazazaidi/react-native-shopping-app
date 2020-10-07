import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import AppMain from './Apps';
import {configureStore} from '@reduxjs/toolkit';

const store = configureStore({
  reducer: cartSlice.reducer,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Appss = () => {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <NavigationContainer>
          <AppMain />
        </NavigationContainer>
      </Provider>
      {/* <Text>Appss</Text> */}
    </View>
  );
};

export default Appss;
