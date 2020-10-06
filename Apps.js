// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import TabNavigator from './src/app/navigation/AppNavigator';
import App from './App';
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });
// const Stack = createStackNavigator();
// const AppMain = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator headerMode="none">
//         <Stack.Screen name="App" component={App}></Stack.Screen>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default AppMain;
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Foundation from 'react-native-vector-icons/Feather';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Baskit from './Baskit';
import Profile from './User';

// import HomeStackScreen from './home.routes';
// import DiscoveryScreen from "../screens/DiscoveryScreen";
// import CreatePostScreen from "../screens/CreatePostScreen";
// import NotificationsScreen from "../screens/NotificationsScreen";
// import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();
function AppMain() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}>
      <Tab.Screen
        name="Home"
        component={App}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Baskit}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
          // tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// const AppMain = () => (
//   <Tab.Navigator
//     screenOptions={({route}) => ({
//       tabBarIcon: ({focused, color, size}) => {
//         if (route.name === 'Home') {
//           return <Foundation name="menu" size={33} />;
//         }
// if (route.name === 'Discovery') {
//   return <Feather name="search" size={size} color={color} />;
// }
// if (route.name === 'Post') {
//   return <Feather name="plus-square" size={size} color={color} />;
// }
// if (route.name === 'Notifications') {
//   return <AntDesign name="hearto" size={size} color={color} />;
// }
// if (route.name === 'Profile') {
//   return <Ionicons name="person-outline" size={size} color={color} />;
// }
//     },
//   })}
//   tabBarOptions={{
//     activeTintColor: '#000',
//     inactiveTintColor: 'gray',
//     showLabel: false,
//   }}>
//   <Tab.Screen name="App" component={App} />
//   {/* <Tab.Screen name="Discovery" component={DiscoveryScreen} />
//   <Tab.Screen name="Post" component={CreatePostScreen} />
//   <Tab.Screen name="Notifications" component={NotificationsScreen} />
//   <Tab.Screen name="Profile" component={ProfileScreen} /> */}
// </Tab.Navigator>
// );

export default AppMain;
