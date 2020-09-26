import React from 'react';
import {
  View,
  Dimensions,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import color from '../assets/Constants/colors';
import Icon from 'react-native-vector-icons/AntDesign';
var {height, width} = Dimensions.get('window');
const NikeComponent = ({item}) => {
  let [click, setClick] = React.useState(false);

  let [cart, addToCart] = React.useState([]);
  const onPress = () => setClick(true);

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>
        <Text
          style={{
            color: color.darkBlue,
            marginLeft: 20,
            paddingBottom: 40,
            margin: 90,
            fontSize: 15,
            marginLeft: 5,
          }}>
          $
        </Text>
        {item.price}
        {console.log({cart})}
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => addToCart(item.id)}>
            <Icon
              style={{marginLeft: 60, marginTop: 10, color: 'red'}}
              name="hearto"
              size={23}
            />
          </TouchableOpacity>
        </View>
      </Text>
      <Image
        style={{width: 180, height: 150, marginTop: 20}}
        source={item.photo}
      />
      <Text style={styles.text}>{item.name}</Text>
    </View>
  );
};

export default NikeComponent;
const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    backgroundColor: color.white,
    elevation: 5,
  },
  text: {
    marginTop: 10,
    color: 'black',
    justifyContent: 'space-between',
    fontWeight: 'bold',
    fontSize: 13,
    marginRight: 10,
    paddingBottom: 20,
    paddingLeft: 10,
  },
  txt: {
    marginLeft: 20,
    position: 'absolute',
    justifyContent: 'center',
  },
});
