import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MenuBar from './src/app/components/menuBar';
import BaskitContainer from './BaskitData';
import {SafeAreaView} from 'react-native-safe-area-context';

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
  baskit: {
    paddingTop: 50,
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
      <View style={styles.baskit}>
        <BaskitContainer />
      </View>
    </View>
  );
};

export default Baskit;
