import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text> This is the First Page under First Page Option</Text>
    </View>
  );
};

export default Profile;
