import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import IconA from 'react-native-vector-icons/EvilIcons';
import color from '../assets/Constants/colors';

// import {createDrawerNavigator} from 'react-navigation-drawer';
import {NavigationContainer} from '@react-navigation/native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {useDispatch, useSelector} from 'react-redux';

function MenuBar({navigation}) {
  {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity>
          <Icon
            onPress={() => navigation.openDrawer()}
            //onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            style={styles.icon}
            name="menu"
            size={30}
          />
        </TouchableOpacity>
        <Text style={styles.leng}>{state.products.length}</Text>
        <IconA style={styles.iconCart} name="cart" size={40} />
      </SafeAreaView>
    );
  }
}
export default MenuBar;
// const Drawer = createDrawerNavigator();
// function AppThrow() {
//   return (
//     // <NavigationContainer>
//     <Drawer.Navigator
//       drawerContentOptions={{
//         activeTintColor: '#e91e63',
//         itemStyle: {marginVertical: 5},
//       }}>
//       <Drawer.Screen
//         name="firstScreenStack"
//         // options={{drawerLabel: 'Home Screen Option'}}
//         // component={HomeScreenStack}
//         options={{drawerLabel: 'Home'}}
//         component={firstScreenStack}
//       />
//       <Drawer.Screen
//         name="secondScreenStack"
//         options={{drawerLabel: 'SignUo'}}
//         component={secondScreenStack}
//       />
//     </Drawer.Navigator>
//     // {/* </NavigationContainer> */}
//   );
// }
// function secondScreenStack({navigation}) {
//   return (
//     <Stack.Navigator initialRouteName="Profile">
//       <Stack.Screen
//         name="SignUp"
//         component={SignUp}
//         options={({route}) => ({
//           headerTitle: getHeaderTitle(route),
//           // headerLeft: () => <MenuBar navigationProps={navigation} />,
//           headerStyle: {
//             backgroundColor: '#f4511e', //Set Header color
//           },
//           headerTintColor: '#fff', //Set Header text color
//           headerTitleStyle: {
//             fontWeight: 'bold', //Set Header text style
//           },
//         })}
//       />
//     </Stack.Navigator>
//   );
// }
// const Stack = createStackNavigator();
// function firstScreenStack({navigation}) {
//   return (
//     <Stack.Navigator initialRouteName="FirstPage">
//       <Stack.Screen
//         name="Profile"
//         component={Profile}
//         options={{
//           title: 'First Page', //Set Header Title
//           // headerLeft: () => <MenuBar navigationProps={navigation} />,
//           headerStyle: {
//             backgroundColor: '#f4511e', //Set Header color
//           },
//           headerTintColor: '#fff', //Set Header text color
//           headerTitleStyle: {
//             fontWeight: 'bold', //Set Header text style
//           },
//         }}
//       />
//     </Stack.Navigator>
//   );
// }

// export default AppThrow;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    paddingTop: 25,
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
  icon: {width: 30, height: 30},
  image: {
    width: 35,
    height: 35,
    borderRadius: 30,
    paddingRight: 3,
    backgroundColor: color.darkBlue,
  },
});
