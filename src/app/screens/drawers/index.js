import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {View, Text, StyleSheet} from 'react-native';
import Profile from './Profile';
import SignIn from './SignIn';
import SignUp from './signUp';
import {NavigationContainer} from '@react-navigation/native';
import SideMenu from './SideMenu';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
const Drawer = createDrawerNavigator();
const Index = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <SideMenu {...props} />}>
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="SignIn" component={SignIn} />
        <Drawer.Screen name="SignUp" component={SignUp} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Index;
