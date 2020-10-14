import React from 'react';
import {
  StyleSheet,
  Image,
  SafeAreaView,
  Text,
  Alert,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import IconA from 'react-native-vector-icons/EvilIcons';
import color from '../assets/Constants/colors';
import {useDispatch, useSelector} from 'react-redux';
export default function MenuBar({navigation}) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const {products, total} = state;
  return (
    <SafeAreaView style={styles.container}>
      {/* <TouchableOpacity> */}
      <Icon
        // onPress={() => alert('hi')}
        onPress={() => navigation.openDrawer('Index')}
        // navigation.navigate('SideMenu')}
        style={styles.icon}
        name="menu"
        size={30}
      />
      {/* </TouchableOpacity> */}
      <Text style={styles.leng}>{state.products.length}</Text>
      <IconA style={styles.iconCart} name="cart" size={40} />
    </SafeAreaView>
  );
}

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
    left: 165,
    top: 20,
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
