import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableHighlight,
} from 'react-native';
import Swipeable from 'react-native-swipeable';
import Icon from 'react-native-vector-icons/AntDesign';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    padding: 35,
    color: '#fff',
  },
});

function BaskitList({name, price, image, onPress}) {
  const rightButtons = [
    <View
      style={{
        backgroundColor: '#ff5252',
        borderRadius: 30,
        height: '100%',
        width: '30%',
      }}>
      <TouchableHighlight onPress={onPress} style={styles.iconCont}>
        <Icon style={styles.icon} name="delete" size={40} />
      </TouchableHighlight>
    </View>,
  ];
  return (
    <Swipeable rightButtons={rightButtons}>
      <SafeAreaView
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: '#fff',
          marginHorizontal: 15,
          padding: 10,
          borderRadius: 15,
          elevation: 5,
          margin: 5,
        }}>
        <View>
          <Text>{name}</Text>
          <Text>${price}</Text>
        </View>
        <View>
          <Image style={{width: 80, height: 80}} source={image} />
        </View>
      </SafeAreaView>
    </Swipeable>
  );
}

export default BaskitList;
