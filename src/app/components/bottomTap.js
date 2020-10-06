import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const BottomTap = () => {
  return (
    <View style={styles.container}>
      <Text>BottomTap</Text>
    </View>
  );
};

export default BottomTap;
