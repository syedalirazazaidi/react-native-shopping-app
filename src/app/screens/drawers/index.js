import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {StyleSheet} from 'react-native';
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
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: {marginVertical: 5},
        }}
        //  drawerContent={(props) => <SideMenu {...props} />}
      >
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="SignIn" component={SignIn} />
        <Drawer.Screen name="SignUp" component={SignUp} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Index;
