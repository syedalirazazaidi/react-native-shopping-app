import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MenuBar from './MenuBar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>
        <MenuBar />
      </Text>
    </View>
  );
};

export default Home;
