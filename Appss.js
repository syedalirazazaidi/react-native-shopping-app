import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AppMain from './Apps';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Appss = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <AppMain />
      </NavigationContainer>
      {/* <Text>Appss</Text> */}
    </View>
  );
};

export default Appss;
