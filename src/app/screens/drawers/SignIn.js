import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const SignIn = () => {
  return (
    <View style={styles.container}>
      <Text>SignIn</Text>
    </View>
  );
};

export default SignIn;
