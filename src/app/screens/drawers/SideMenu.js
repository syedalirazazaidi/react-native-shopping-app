import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const SideMenu = ({...props}) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        // icon = { ()=> ( <Icon name="home-outline" style={{fontSize:2.8*vh,color:'grey'}} />  ) }
        // label="Home"
        onPress={() => {
          props.navigation.navigate('Profile');
        }}
      />

      <DrawerItem
        // icon={() => (
        //   <Icon
        //     name="account-outline"
        //     style={{fontSize: 2.8 * vh, color: 'grey'}}
        //   />
        // )}
        label="Profile"
        onPress={() => {
          props.navigation.navigate('SignIn');
        }}
      />
      <DrawerItem
        // icon={() => (
        //   <Icon
        //     name="wallet-outline"
        //     style={{fontSize: 2.8 * vh, color: 'grey'}}
        //   />
        // )}
        label="Wallet"
        onPress={() => {
          props.navigation.navigate('SignUp');
        }}
      />
      {/* <DrawerItemList {...props} /> */}
    </DrawerContentScrollView>
  );
};

export default SideMenu;
