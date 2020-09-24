import React from 'react';
import {StyleSheet, Image, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import color from '../assets/Constants/colors';
export default function MenuBar() {
  return (
    <SafeAreaView style={styles.container}>
      <Icon style={styles.icon} name="menu" size={30} />
      <Image
        style={styles.image}
        source={require('../assets/Constants/man.png')}
      />
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
  icon: {width: 30, height: 30},
  image: {
    width: 35,
    height: 35,
    borderRadius: 30,
    paddingRight: 3,
    backgroundColor: color.darkBlue,
  },
});
