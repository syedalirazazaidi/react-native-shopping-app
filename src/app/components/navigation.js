import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TabNavigator from '../navigation/AppNavigator';
import {NavigationContainer} from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const NavigationRoute = () => {
  return (
    <View style={styles.container}>
      <Text>
        {/* <NavigationContainer> */}
        <TabNavigator />
        {/* </NavigationContainer> */}
      </Text>
    </View>
  );
};

export default NavigationRoute;
