import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MenuBar from './src/app/components/menuBar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 25,
  },
  bag: {
    fontWeight: 'bold',
    fontSize: 35,
    paddingTop: 10,
  },
  bagShoe: {
    fontWeight: '400',
    fontSize: 21,
    color: '#a6a6a4',
  },
});

const Baskit = () => {
  return (
    <View>
      <MenuBar />
      <View style={styles.container}>
        <Text style={styles.bag}>My Bag</Text>
        <Text style={styles.bagShoe}>Check And Pay Your Shoes</Text>
      </View>
    </View>
  );
};

export default Baskit;
