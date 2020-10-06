import React from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import color from '../assets/Constants/colors';
export default function SearchBar() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput} placeholder="Find shoes" />
      <Icon style={styles.icon} name="search" size={39} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    paddingTop: 60,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  textInput: {
    backgroundColor: color.white,
    borderRadius: 25,
    paddingLeft: 23,
    width: '100%',
    fontSize: 18,
    padding: 15,
    position: 'relative',
    marginRight: 15,
  },
  icon: {
    borderRadius: 25,
    padding: 4,
    marginTop: 10,
    margin: -6,
    width: 44,
    height: 44,
    backgroundColor: color.darkBlue,
    position: 'absolute',
    left: 305,
    bottom: 13,
    color: color.white,
  },
});
