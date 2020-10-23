import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import BaskitList from './BaskitList';
import {removeProduct} from './src/app/redux/store/slice';

const BaskitContainer = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const {products, total} = state;
  onDelete = (item) => {
    dispatch(removeProduct(item));
  };
  const product = products.length;
  return (
    <View style={{paddingTop: 30, height: 330}}>
      {product ? (
        <FlatList
          style={styles.container}
          data={products}
          renderItem={({item}) => (
            <BaskitList
              name={item.name}
              price={item.price}
              image={item.photo}
              onPress={() => onDelete(item.id)}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <View
          style={{flex: 0.5, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: 'red', fontSize: 20}}>Cart is empty</Text>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
});

export default BaskitContainer;
