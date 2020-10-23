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
import {addProduct} from '../redux/store/slice';
import {useDispatch} from 'react-redux';
import {SafeAreaView} from 'react-native-safe-area-context';

const NikeComponent = ({item}) => {
  const dispatch = useDispatch();
  let [click, setClick] = React.useState(false);

  // let [cart, addToCart] = React.useState([]);
  addToCart = (item) => {
    dispatch(addProduct(item));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.txt}>
        <Text
          style={{
            color: color.darkBlue,
            marginLeft: 20,
            paddingBottom: 40,
            margin: 20,
            fontSize: 15,
            marginLeft: 5,
          }}>
          $
        </Text>
        {item.price}
        <View>
          <TouchableOpacity onPress={() => addToCart(item)}>
            <View style={styles.button}>
              <Icon
                style={{marginTop: 10, color: 'red'}}
                name="hearto"
                size={24}
              />
            </View>
          </TouchableOpacity>
        </View>
      </Text>
      <Image
        style={{width: 130, height: 140, marginTop: 20}}
        source={item.photo}
      />
      <Text style={styles.text}>{item.name}</Text>
    </SafeAreaView>
  );
};

export default NikeComponent;
const styles = StyleSheet.create({
  button: {
    marginLeft: 40,
  },
  container: {
    margin: 20,
    borderRadius: 10,
    marginTop: 10,
    padding: 2,
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
