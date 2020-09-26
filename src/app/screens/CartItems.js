import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 33,
    marginHorizontal: 20,
    marginTop: 30,
  },
  txt: {
    fontWeight: 'bold',
    fontSize: 20,
    marginHorizontal: 20,
    marginTop: 30,
    color: 'gray',
  },
});

const CartItems = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My Bag</Text>
      <Text style={styles.txt}>Check and Play Your Shoes</Text>
      <Text>Item in the Cart</Text>
    </View>
  );
};

export default CartItems;
